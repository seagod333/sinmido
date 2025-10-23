import { memo } from 'react';
import { FadeIn, ScaleIn } from '../animation';

// TypeScript interfaces
interface LoadingProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  showMessage?: boolean;
}

const Loading = memo<LoadingProps>(({ 
  className = "", 
  size = 'md',
  message = "Loading...",
  showMessage = true
}) => {
  const sizeClasses = {
    sm: 'h-16 w-16',
    md: 'h-32 w-32', 
    lg: 'h-48 w-48'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl'
  };

  return (
    <div className={`flex items-center justify-center min-h-screen bg-gray-50 ${className}`}>
      <div className="text-center">
        <ScaleIn delay={0.2}>
          <div className={`${sizeClasses[size]} border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-6`}></div>
        </ScaleIn>
        
        {showMessage && (
          <FadeIn delay={0.4}>
            <p className={`text-gray-600 font-medium ${textSizeClasses[size]}`}>
              {message}
            </p>
          </FadeIn>
        )}
      </div>
    </div>
  )
})

export default Loading;
