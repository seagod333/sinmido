import Header from "./header";
import Footer from "./footer";
import backgroundVideo from "../../assets/video/background.mp4";
import backgroundThumb from "../../assets/video/background-thumb.jpg";
import { useState } from "react";
import './layouts.scss';

export const GlobalSpacing = ({ children, className }: any) => {
  return (
    <div
      className={`px-30 lg:px-58 w-full ${typeof (className) === "string" ? className : ""}`}
    >
      {children}
    </div>
  );
};

export const Layouts = ({ children }: { children: React.ReactNode }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="layouts-wrapper relative flex flex-col h-screen overflow-x-hidden overflow-y-auto">
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

      <Header />

      <div className="flex-1 flex flex-col relative z-10">{children}</div>

      <Footer />
    </div>
  )
}