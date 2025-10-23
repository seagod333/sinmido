import { memo, useMemo } from 'react';
import { motion, MotionProps, Variants } from 'framer-motion';

// Optimized animation variants with better performance
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const slideDownVariants: Variants = {
  hidden: { opacity: 0, y: -32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

export const rotateInVariants: Variants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

// Optimized stagger container variants
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

// Optimized transition configurations
export const defaultTransition = {
  duration: 0.6,
  ease: "easeOut" as const
}

export const fastTransition = {
  duration: 0.3,
  ease: "easeOut" as const
}

export const slowTransition = {
  duration: 1,
  ease: "easeOut" as const
}

export const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15
}

// Enhanced TypeScript interfaces
interface BaseMotionProps extends Omit<MotionProps, 'variants' | 'initial' | 'animate' | 'transition'> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  threshold?: number;
}

interface CustomMotionProps extends BaseMotionProps {
  variants: Variants;
}

// Animation configuration interface
interface AnimationConfig {
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  threshold?: number;
}

// Optimized FadeIn Component
export const FadeIn = memo<BaseMotionProps>(({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  threshold = 0.1,
  ...props
}) => {
  const viewportConfig = useMemo(() => ({
    once,
    amount,
    margin: "-50px"
  }), [once, amount])

  const transitionConfig = useMemo(() => ({
    duration,
    delay,
    ease: "easeOut" as const
  }), [duration, delay])

  return (
    <motion.div
      className={className}
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      transition={transitionConfig}
      viewport={viewportConfig}
      {...props}
    >
      {children}
    </motion.div>
  )
})

// Optimized SlideUp Component
export const SlideUp = memo<BaseMotionProps>(({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  threshold = 0.1,
  ...props
}) => {
  const viewportConfig = useMemo(() => ({
    once,
    amount,
    margin: "-50px"
  }), [once, amount])

  const transitionConfig = useMemo(() => ({
    duration,
    delay,
    ease: "easeOut" as const
  }), [duration, delay])

  return (
    <motion.div
      className={className}
      variants={slideUpVariants}
      initial="hidden"
      whileInView="visible"
      transition={transitionConfig}
      viewport={viewportConfig}
      {...props}
    >
      {children}
    </motion.div>
  )
})

// Base Animation Component for reusability
const BaseAnimation = memo<BaseMotionProps & { variants: Variants }>(({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  threshold = 0.1,
  variants,
  ...props
}) => {
  const viewportConfig = useMemo(() => ({
    once,
    amount,
    margin: "-50px"
  }), [once, amount])

  const transitionConfig = useMemo(() => ({
    duration,
    delay,
    ease: "easeOut" as const
  }), [duration, delay])

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={transitionConfig}
      viewport={viewportConfig}
      {...props}
    >
      {children}
    </motion.div>
  )
})

// Optimized SlideDown Component
export const SlideDown = memo<BaseMotionProps>((props) => (
  <BaseAnimation {...props} variants={slideDownVariants} />
))

// Optimized SlideLeft Component
export const SlideLeft = memo<BaseMotionProps>((props) => (
  <BaseAnimation {...props} variants={slideLeftVariants} />
))

// Optimized SlideRight Component
export const SlideRight = memo<BaseMotionProps>((props) => (
  <BaseAnimation {...props} variants={slideRightVariants} />
))

// Optimized ScaleIn Component
export const ScaleIn = memo<BaseMotionProps>((props) => (
  <BaseAnimation {...props} variants={scaleInVariants} />
))

// Optimized ScaleUp Component (for images)
export const ScaleUp = memo<BaseMotionProps>(({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.6,
  threshold = 0.1,
  ...props
}) => {
  const viewportConfig = useMemo(() => ({
    once,
    amount,
    margin: "-100px"
  }), [once, amount])

  const transitionConfig = useMemo(() => ({
    duration,
    delay,
    ease: "easeOut" as const
  }), [duration, delay])

  return (
    <motion.div
      className={className}
      variants={scaleUpVariants}
      initial="hidden"
      whileInView="visible"
      transition={transitionConfig}
      viewport={viewportConfig}
      {...props}
    >
      {children}
    </motion.div>
  )
})

// Optimized RotateIn Component
export const RotateIn = memo<BaseMotionProps>((props) => (
  <BaseAnimation {...props} variants={rotateInVariants} />
))

// Optimized StaggerContainer Component
export const StaggerContainer = memo<BaseMotionProps>(({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  threshold = 0.1,
  ...props
}) => {
  const viewportConfig = useMemo(() => ({
    once,
    amount,
    margin: "-50px"
  }), [once, amount])

  const transitionConfig = useMemo(() => ({
    duration,
    delay,
    ease: "easeOut" as const
  }), [duration, delay])

  return (
    <motion.div
      className={className}
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      transition={transitionConfig}
      viewport={viewportConfig}
      {...props}
    >
      {children}
    </motion.div>
  )
})

// Optimized StaggerItem Component
export const StaggerItem = memo<BaseMotionProps>(({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  ...props
}) => {
  const transitionConfig = useMemo(() => ({
    duration,
    delay,
    ease: "easeOut" as const
  }), [duration, delay])

  return (
    <motion.div
      className={className}
      variants={staggerItemVariants}
      transition={transitionConfig}
      {...props}
    >
      {children}
    </motion.div>
  )
})

// Optimized Custom Motion Component with flexible variants
export const CustomMotion = memo<CustomMotionProps>(({
  children,
  className = "",
  variants,
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  threshold = 0.1,
  ...props
}) => {
  const viewportConfig = useMemo(() => ({
    once,
    amount,
    margin: "-50px"
  }), [once, amount])

  const transitionConfig = useMemo(() => ({
    duration,
    delay,
    ease: "easeOut" as const
  }), [duration, delay])

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={transitionConfig}
      viewport={viewportConfig}
      {...props}
    >
      {children}
    </motion.div>
  )
})

// Optimized Page Header Animation Component
export const PageHeader = memo<BaseMotionProps>(({
  children,
  className = "",
  delay = 0.3,
  duration = 1,
  once = true,
  amount = 0.2,
  threshold = 0.1,
  ...props
}) => {
  const viewportConfig = useMemo(() => ({
    once,
    amount,
    margin: "-50px"
  }), [once, amount])

  const transitionConfig = useMemo(() => ({
    duration,
    delay,
    ease: "easeOut" as const
  }), [duration, delay])

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={transitionConfig}
      viewport={viewportConfig}
      {...props}
    >
      {children}
    </motion.div>
  )
})

// Optimized Background Image Animation Component
export const BackgroundImage = memo<BaseMotionProps>(({
  children,
  className = "",
  delay = 0,
  duration = 1,
  once = true,
  amount = 0.2,
  threshold = 0.1,
  ...props
}) => {
  const viewportConfig = useMemo(() => ({
    once,
    amount,
    margin: "-100px"
  }), [once, amount])

  const transitionConfig = useMemo(() => ({
    duration,
    delay,
    ease: "easeOut" as const
  }), [duration, delay])

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 1.08 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={transitionConfig}
      viewport={viewportConfig}
      {...props}
    >
      {children}
    </motion.div>
  )
})

// Optimized Counter Animation Component (for statistics)
export const CounterAnimation = memo<BaseMotionProps>(({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.3,
  threshold = 0.1,
  ...props
}) => {
  const viewportConfig = useMemo(() => ({
    once,
    amount,
    margin: "-50px"
  }), [once, amount])

  const transitionConfig = useMemo(() => ({
    duration,
    delay,
    ease: "easeOut" as const
  }), [duration, delay])

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={transitionConfig}
      viewport={viewportConfig}
      {...props}
    >
      {children}
    </motion.div>
  )
})

// Optimized Hover Animation Component
export const HoverScale = memo<BaseMotionProps>(({
  children,
  className = "",
  delay = 0,
  duration = 0.2,
  once = false,
  amount = 0.2,
  ...props
}) => {
  const transitionConfig = useMemo(() => ({
    duration,
    ease: "easeOut" as const
  }), [duration])

  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={transitionConfig}
      {...props}
    >
      {children}
    </motion.div>
  )
})

// Utility functions for animation configuration
export const createAnimationConfig = (config: Partial<AnimationConfig> = {}): AnimationConfig => ({
  delay: 0,
  duration: 0.6,
  once: true,
  amount: 0.2,
  threshold: 0.1,
  ...config
})

export const createViewportConfig = (config: Partial<AnimationConfig> = {}) => ({
  once: config.once ?? true,
  amount: config.amount ?? 0.2,
  margin: "-50px"
})

export const createTransitionConfig = (config: Partial<AnimationConfig> = {}) => ({
  duration: config.duration ?? 0.6,
  delay: config.delay ?? 0,
  ease: "easeOut" as const
})

// Optimized export structure
export const AnimationComponents = {
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
  HoverScale
} as const;

export const AnimationVariants = {
  fadeInVariants,
  slideUpVariants,
  slideDownVariants,
  slideLeftVariants,
  slideRightVariants,
  scaleInVariants,
  scaleUpVariants,
  rotateInVariants,
  staggerContainerVariants,
  staggerItemVariants
} as const;

export const AnimationTransitions = {
  defaultTransition,
  fastTransition,
  slowTransition,
  springTransition
} as const;

// Default export with all components
export default {
  ...AnimationComponents,
  ...AnimationVariants,
  ...AnimationTransitions,
  createAnimationConfig,
  createViewportConfig,
  createTransitionConfig
}
