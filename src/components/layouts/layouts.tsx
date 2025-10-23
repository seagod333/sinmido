import { useState, memo, useCallback } from "react";

import Header from "./header";
import Footer from "./footer";
import backgroundVideo from "../../assets/video/background.mp4";
import backgroundThumb from "../../assets/video/background-thumb.jpg";
import './layouts.scss';

// TypeScript interfaces
export interface SpacingProps {
  children: React.ReactNode;
  className?: string;
}

export interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
  topPage?: boolean;
  overflowX?: boolean;
}

// Optimized spacing components with React.memo
export const GlobalSpacing = memo<SpacingProps>(({ children, className = "" }) => {
  return (
    <div className={`px-15 sm:px-30 lg:px-58 w-full ${className}`}>
      {children}
    </div>
  )
})

export const HeaderSpacing = memo<SpacingProps>(({ children, className = "" }) => {
  return (
    <div className={`pt-75 sm:pt-100 lg:pt-120 ${className}`}>
      {children}
    </div>
  )
})

export const ComponentsSpacing = memo<SpacingProps>(({ children, className = "" }) => {
  return (
    <div className={`px-30 sm:px-35 lg:px-300 py-30 sm:py-40 lg:py-90 w-full ${className}`}>
      {children}
    </div>
  )
})

export const ComponentsSpacing1 = memo<SpacingProps>(({ children, className = "" }) => {
  return (
    <div className={`px-20 lg:px-180 py-40 lg:py-180 w-full ${className}`}>
      {children}
    </div>
  )
})

export const ComponentsSpacing2 = memo<SpacingProps>(({ children, className = "" }) => {
  return (
    <div className={`px-0 lg:px-150 w-full ${className}`}>
      {children}
    </div>
  )
})

// Optimized main layout component
export const Layouts = memo<LayoutProps>(({
  children,
  className = "",
  topPage = false,
  overflowX = false
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = useCallback(() => {
    setVideoLoaded(true);
  }, []);

  const handleVideoLoadStart = useCallback(() => {
    setVideoLoaded(false);
  }, []);

  return (
    <div className={`layouts-wrapper flex flex-col ${overflowX ? '' : 'overflow-x-hidden'}`}>
      {topPage && (
        <>
          {/* Background Thumbnail - shown until video loads */}
          {!videoLoaded && (
            <img
              src={backgroundThumb}
              alt="Background thumbnail"
              className="fixed inset-0 w-full h-full object-cover -z-10"
            />
          )}

          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`fixed inset-0 w-full h-full object-cover -z-10 transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoadStart={handleVideoLoadStart}
            onCanPlayThrough={handleVideoLoad}
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </>
      )}

      <Header />

      <div className={`flex-1 flex flex-col relative z-10 ${className}`}>
        {children}
      </div>

      <Footer />
    </div>
  )
})