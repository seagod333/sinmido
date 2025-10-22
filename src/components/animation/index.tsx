import React from 'react';
import { motion, MotionProps, Variants } from 'framer-motion';

// Common animation variants
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

export const slideDownVariants: Variants = {
  hidden: { opacity: 0, y: -32 },
  visible: { opacity: 1, y: 0 }
};

export const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 }
};

export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 }
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 }
};

export const rotateInVariants: Variants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: { opacity: 1, rotate: 0 }
};

// Stagger container variants
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Common transition configurations
export const defaultTransition = {
  duration: 0.6,
  ease: "easeOut" as const
};

export const fastTransition = {
  duration: 0.3,
  ease: "easeOut" as const
};

export const slowTransition = {
  duration: 1,
  ease: "easeOut" as const
};

export const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15
};

// Base motion component props interface
interface BaseMotionProps extends Omit<MotionProps, 'variants' | 'initial' | 'animate' | 'transition'> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

// FadeIn Component
export const FadeIn: React.FC<BaseMotionProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  ...props
}) => {
  return (
    <motion.div
      className={className}
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// SlideUp Component
export const SlideUp: React.FC<BaseMotionProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  ...props
}) => {
  return (
    <motion.div
      className={className}
      variants={slideUpVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// SlideDown Component
export const SlideDown: React.FC<BaseMotionProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  ...props
}) => {
  return (
    <motion.div
      className={className}
      variants={slideDownVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// SlideLeft Component
export const SlideLeft: React.FC<BaseMotionProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  ...props
}) => {
  return (
    <motion.div
      className={className}
      variants={slideLeftVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// SlideRight Component
export const SlideRight: React.FC<BaseMotionProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  ...props
}) => {
  return (
    <motion.div
      className={className}
      variants={slideRightVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// ScaleIn Component
export const ScaleIn: React.FC<BaseMotionProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  ...props
}) => {
  return (
    <motion.div
      className={className}
      variants={scaleInVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// ScaleUp Component (for images)
export const ScaleUp: React.FC<BaseMotionProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.6,
  ...props
}) => {
  return (
    <motion.div
      className={className}
      variants={scaleUpVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// RotateIn Component
export const RotateIn: React.FC<BaseMotionProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  ...props
}) => {
  return (
    <motion.div
      className={className}
      variants={rotateInVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// StaggerContainer Component
export const StaggerContainer: React.FC<BaseMotionProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  ...props
}) => {
  return (
    <motion.div
      className={className}
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// StaggerItem Component
export const StaggerItem: React.FC<BaseMotionProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  ...props
}) => {
  return (
    <motion.div
      className={className}
      variants={staggerItemVariants}
      transition={{ duration, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Custom Motion Component with flexible variants
interface CustomMotionProps extends BaseMotionProps {
  variants: Variants;
}

export const CustomMotion: React.FC<CustomMotionProps> = ({
  children,
  className = "",
  variants,
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  ...props
}) => {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Page Header Animation Component
export const PageHeader: React.FC<BaseMotionProps> = ({
  children,
  className = "",
  delay = 0.3,
  duration = 1,
  once = true,
  amount = 0.2,
  ...props
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Background Image Animation Component
export const BackgroundImage: React.FC<BaseMotionProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 1,
  once = true,
  amount = 0.2,
  ...props
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 1.08 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Counter Animation Component (for statistics)
export const CounterAnimation: React.FC<BaseMotionProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.3,
  ...props
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once, amount }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Hover Animation Component
export const HoverScale: React.FC<BaseMotionProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.2,
  once = false,
  amount = 0.2,
  ...props
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Export all components
export default {
  FadeIn,
  SlideUp,
  SlideDown,
  SlideLeft,
  SlideRight,
  ScaleIn,
  ScaleUp,
  RotateIn,
  StaggerContainer,
  StaggerItem,
  CustomMotion,
  PageHeader,
  BackgroundImage,
  CounterAnimation,
  HoverScale,
  // Variants
  fadeInVariants,
  slideUpVariants,
  slideDownVariants,
  slideLeftVariants,
  slideRightVariants,
  scaleInVariants,
  scaleUpVariants,
  rotateInVariants,
  staggerContainerVariants,
  staggerItemVariants,
  // Transitions
  defaultTransition,
  fastTransition,
  slowTransition,
  springTransition
};
