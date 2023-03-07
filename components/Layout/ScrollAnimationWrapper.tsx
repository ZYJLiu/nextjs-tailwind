import { motion } from "framer-motion"
import React, { ReactNode } from "react"

interface ScrollAnimationWrapperProps {
  children: ReactNode
  className?: string
  [key: string]: any
}

const ScrollAnimationWrapper: React.FC<ScrollAnimationWrapperProps> = ({
  children,
  className,
  ...props
}: ScrollAnimationWrapperProps): JSX.Element => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default ScrollAnimationWrapper
