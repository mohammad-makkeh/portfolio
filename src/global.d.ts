import { MotionProps as OriginalMotionProps } from "framer-motion";

declare module "framer-motion" {
  interface MotionProps extends OriginalMotionProps {
    className?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
  }
}