import { memo } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn, SlideUp } from '../animation';

// TypeScript interfaces
interface NotFoundProps {
  className?: string;
  showBackButton?: boolean;
  customMessage?: string;
}

const NotFound = memo<NotFoundProps>(({ 
  className = "", 
  showBackButton = true,
  customMessage 
}) => {
  return (
    <div className={`flex items-center justify-center min-h-screen bg-gray-50 ${className}`}>
      <div className="text-center max-w-md mx-auto px-6">
        <FadeIn delay={0.2}>
          <div className="mb-8">
            <h1 className="text-8xl sm:text-9xl font-bold text-primary mb-4">
              404
            </h1>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
        </FadeIn>

        <SlideUp delay={0.4}>
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              {customMessage || "Page not found"}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </SlideUp>

        <SlideUp delay={0.6}>
          <div className="space-y-4">
            {showBackButton && (
              <Link
                to="/"
                className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 hover:scale-105 font-medium"
              >
                Go Home
              </Link>
            )}
            
            <div className="pt-4">
              <button
                onClick={() => window.history.back()}
                className="text-secondary hover:text-secondary/80 transition-colors duration-200 font-medium"
              >
                ← Go Back
              </button>
            </div>
          </div>
        </SlideUp>
      </div>
    </div>
  )
})

export default NotFound;
