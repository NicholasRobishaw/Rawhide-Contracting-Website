import Reveal from "./Reveal";
import { enableAnimations } from "../config/siteSettings";

export function SectionReveal({ children, className = "", delay = 0 }) {
  return (
    <Reveal
      enable={enableAnimations}
      animation="fadeUp"
      duration={0.7}
      distance={35}
      delay={delay}
      className={className}
    >
      {children}
    </Reveal>
  );
}

export function CardReveal({ children, className = "", delay = 0 }) {
  return (
    <Reveal
      enable={enableAnimations}
      animation="zoomIn"
      duration={0.5}
      distance={20}
      delay={delay}
      className={className}
    >
      {children}
    </Reveal>
  );
}

export function ImageReveal({ children, className = "", delay = 0 }) {
  return (
    <Reveal
      enable={enableAnimations}
      animation="fadeLeft"
      duration={0.8}
      distance={45}
      delay={delay}
      className={className}
    >
      {children}
    </Reveal>
  );
}

export function TextReveal({ children, className = "", delay = 0 }) {
  return (
    <Reveal
      enable={enableAnimations}
      animation="fadeRight"
      duration={0.7}
      distance={30}
      delay={delay}
      className={className}
    >
      {children}
    </Reveal>
  );
}

export function SimpleFade({ children, className = "", delay = 0 }) {
  return (
    <Reveal
      enable={enableAnimations}
      animation="fadeIn"
      duration={0.5}
      delay={delay}
      className={className}
    >
      {children}
    </Reveal>
  );
}