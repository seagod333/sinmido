import Header from "./header";
import Footer from "./footer";
import backgroundVideo from "../../assets/video/background.mp4";
import backgroundThumb from "../../assets/video/background-thumb.jpg";
import React, { useState } from "react";
import './layouts.scss';

export const GlobalSpacing = ({ children, className }: any) => {
  return (
    <div
      className={`px-15 sm:px-30 lg:px-58 w-full ${typeof (className) === "string" ? className : ""}`}
    >
      {children}
    </div>
  )
}

export const HeaderSpacing = ({ children, className }: any) => {
  return (
    <div className={`pt-75 sm:pt-100 lg:pt-120 ${typeof (className) === "string" ? className : ""}`}>
      {children}
    </div>
  )
}

export const ComponentsSpacing = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`px-30 sm:px-35 lg:px-300 py-20 sm:py-30 lg:py-90 w-full ${className}`}>
      {children}
    </div>
  )
}

export const Layouts = ({ children, topPage = false }: { children?: React.ReactNode, topPage?: boolean }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="layouts-wrapper flex flex-col">
      {topPage && (
        <React.Fragment>
          {/* Background Thumbnail - shown until video loads */}
          {!videoLoaded && (
            <img src={backgroundThumb} className="fixed inset-0 w-full h-full object-cover -z-10" />
          )}

          {/* Background Video */}
          <video autoPlay loop muted playsInline
            className={`fixed inset-0 w-full h-full object-cover -z-10 transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoadStart={() => setVideoLoaded(false)}
            onCanPlayThrough={handleVideoLoad}
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </React.Fragment>
      )}

      <Header />

      <div className="flex-1 flex flex-col relative z-10">{children}</div>

      <Footer />
    </div>
  )
}