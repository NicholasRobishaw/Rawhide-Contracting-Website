// src/components/Carousel.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Reusable image carousel with built-in lightbox (renders via portal).
 *
 * Props:
 *  - images: string[]                     (required)
 *  - className?: string                   (extra classes on outer wrapper)
 *  - height?: string                      (Tailwind height; default "h-64 sm:h-80")
 *  - rounded?: string                     (Tailwind radius; default "rounded-2xl")
 *  - objectFit?: "contain" | "cover"      (default "contain")
 *  - showDots?: boolean                   (default true)
 *  - showArrows?: boolean                 (default true)
 *  - autoplayMs?: number | null           (e.g., 4000; default null = off)
 *  - pauseOnHover?: boolean               (default true)
 */
export default function Carousel({
  images = [],
  className = "",
  height = "h-64 sm:h-80",
  rounded = "rounded-2xl",
  objectFit = "contain",
  showDots = true,
  showArrows = true,
  autoplayMs = null,
  pauseOnHover = true,
}) {
  const total = images.length;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Lightbox
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const fitClass = useMemo(
    () => (objectFit === "cover" ? "object-cover" : "object-contain"),
    [objectFit]
  );

  const next = () => setCurrent((i) => (i + 1) % total);
  const prev = () => setCurrent((i) => (i - 1 + total) % total);

  // Autoplay (pauses on hover and while lightbox is open)
  const timerRef = useRef(null);
  useEffect(() => {
    if (!autoplayMs || total < 2 || (pauseOnHover && paused) || isLightboxOpen) return;
    timerRef.current = setInterval(next, autoplayMs);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplayMs, paused, total, isLightboxOpen]);

  if (!total) return null;

  // Open lightbox
  const handleImageClick = (i) => {
    setLightboxIndex(i);
    setIsLightboxOpen(true);
    setPaused(true);
  };

  // Lightbox: keyboard + body scroll lock
  useEffect(() => {
    if (!isLightboxOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % total);
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isLightboxOpen, total]);

  return (
    <>
      {/* Carousel */}
      <div
        className={`relative overflow-hidden ${height} ${rounded} ${className}`}
        onMouseEnter={() => pauseOnHover && setPaused(true)}
        onMouseLeave={() => pauseOnHover && setPaused(false)}
      >
        {images.map((src, i) => (
          <picture
            key={i}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className={`w-full h-full ${fitClass} bg-black cursor-zoom-in`}
              loading={i === current ? "eager" : "lazy"}
              decoding="async"
              onClick={() => handleImageClick(i)}
            />
          </picture>
        ))}

        {showArrows && total > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/75 text-white px-3 py-2 rounded-xl hover:scale-110 hover:shadow-2xl hover:bg-black/90"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/75 text-white px-3 py-2 rounded-xl hover:scale-110 hover:shadow-2xl hover:bg-black/90"
            >
              ›
            </button>
          </>
        )}

        {showDots && total > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 w-2 rounded-full ${
                  i === current ? "bg-white" : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox in a portal (escapes any transformed/overflow parents) */}
      {isLightboxOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4"
            onClick={(e) => {
              // Close only if clicking the backdrop itself
              if (e.target === e.currentTarget) {
                setIsLightboxOpen(false);
                setPaused(false);
              }
            }}
          >
            <div
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()} // prevent bubbling to backdrop
            >
              <button
                onClick={() => {
                  setIsLightboxOpen(false);
                  setPaused(false);
                }}
                aria-label="Close"
                className="absolute -top-2 -right-2 md:top-0 md:right-0 translate-y-[-100%] md:translate-y-0
                           bg-black/80 hover:bg-white/30 text-white rounded-full w-10 h-10 flex items-center justify-center"
              >
                ✕
              </button>

              <img
                src={images[lightboxIndex]}
                alt={`Enlarged view ${lightboxIndex + 1}`}
                className="max-h-[85vh] w-full h-full object-contain rounded-xl"
              />

              {total > 1 && (
                <>
                  <button
                    onClick={() => setLightboxIndex((i) => (i - 1 + total) % total)}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 -translate-y-1/2
                               bg-white/20 hover:bg-white/30 text-white rounded-full w-10 h-10
                               flex items-center justify-center"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setLightboxIndex((i) => (i + 1) % total)}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 -translate-y-1/2
                               bg-white/20 hover:bg-white/30 text-white rounded-full w-10 h-10
                               flex items-center justify-center"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
