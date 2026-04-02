import "../App.css";
import Carousel from "./Carousel.jsx";

export default function ServiceCard({
  title,
  description,
  images,
  imageArr = [],
  fullWidth = false,
  link,
  buttonText = "Learn More",
}) {
  const rawImages = images ?? imageArr ?? [];

  const normalizedImages = rawImages
    .map((it) => (typeof it === "string" ? it : it?.jpg || it?.webp || null))
    .filter(Boolean);

  return (
    <div
      className={`bg-[#E5E7EB] ${
        fullWidth ? "w-full max-w-none col-span-full" : "max-w-sm mx-auto"
      } rounded-2xl overflow-hidden shadow-lg flex flex-col h-full transition duration-300 hover:scale-105 hover:shadow-2xl`}
    >
      {normalizedImages.length > 0 && (
        <Carousel images={normalizedImages} objectFit="cover" />
      )}

      <div className="flex flex-col flex-grow px-6 py-5">
        <h2 className="font-bold text-base mb-2">{title}</h2>
        <p className="text-gray-700 text-base flex-1">{description}</p>

        {link && (
          <div className="mt-auto text-center pt-4">
            <a
              href={link}
              className="inline-block rounded-xl px-4 py-2 bg-[#7a4a17] text-white hover:bg-[#683e14] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7a4a17]"
            >
              {buttonText}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}