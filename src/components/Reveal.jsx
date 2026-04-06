import { motion } from "framer-motion";

const variantsMap = {
  fadeUp: (distance) => ({
    hidden: { opacity: 0, y: distance },
    visible: { opacity: 1, y: 0 },
  }),

  fadeDown: (distance) => ({
    hidden: { opacity: 0, y: -distance },
    visible: { opacity: 1, y: 0 },
  }),

  fadeLeft: (distance) => ({
    hidden: { opacity: 0, x: distance },
    visible: { opacity: 1, x: 0 },
  }),

  fadeRight: (distance) => ({
    hidden: { opacity: 0, x: -distance },
    visible: { opacity: 1, x: 0 },
  }),

  fadeIn: () => ({
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }),

  zoomIn: () => ({
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  }),
};

export default function Reveal({
  children,
  enable = true,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  distance = 40,
  once = true,
  amount = 0.2,
}) {
  if (!enable) {
    return <div className={className}>{children}</div>;
  }

  const selectedVariant =
    variantsMap[animation]?.(distance) || variantsMap.fadeUp(distance);

  return (
    <motion.div
      className={className}
      variants={selectedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
}