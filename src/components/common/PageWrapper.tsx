import React, { memo, ReactNode } from 'react';
import { FadeIn, SlideUp } from '../animation';

// TypeScript interfaces
interface PageWrapperProps {
  children: ReactNode;
  className?: string;
  title?: string;
  description?: string;
  showAnimation?: boolean;
  animationDelay?: number;
}

const PageWrapper = memo<PageWrapperProps>(({
  children,
  className = "",
  title,
  description,
  showAnimation = true,
  animationDelay = 0.2
}) => {
  const content = (
    <div className={`min-h-screen ${className}`}>
      {title && (
        <div className="text-center py-8 mb-8">
          <FadeIn delay={animationDelay}>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
          </FadeIn>
          
          {description && (
            <SlideUp delay={animationDelay + 0.2}>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {description}
              </p>
            </SlideUp>
          )}
        </div>
      )}
      
      {showAnimation ? (
        <FadeIn delay={animationDelay + 0.4}>
          {children}
        </FadeIn>
      ) : (
        children
      )}
    </div>
  )

  return content;
})

export default PageWrapper;
