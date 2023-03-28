import { motion, Transition } from "framer-motion";

interface Props {
  children: React.ReactNode;
  up?: boolean;
  animation?: string;
  transition?: Transition;
  rotate?: number;
}

export default function FadeIn({
  children,
  up = true,
  animation = "ease-in-out",
  transition = {
    type: "keyframes",
    duration: 0.8,
  },
  rotate = 0,
}: Props) {
  return (
    <motion.div
      initial={{
        y: up ? 20 : 0,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        x: 0,
        rotate,
        animation,
        opacity: [0, 0.25, 0.5, 0.8, 1],
        transition,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        type: "keyframes",
        duration: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
}
