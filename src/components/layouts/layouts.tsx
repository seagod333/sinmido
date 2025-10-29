import React, { useState, memo, useCallback } from "react";

import Header from "./header";
import Footer from "./footer";
import backgroundVideo from "../../assets/video/background.mp4";
import backgroundThumb from "../../assets/video/background-thumb.jpg";

import './layouts.scss';
import "../../assets/styles/tailwind.css";
import "../../assets/styles/global.scss";

export interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
  topPage?: boolean;
  overflowX?: boolean;
}

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