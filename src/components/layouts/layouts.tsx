import Header from "./header";
import Footer from "./footer";
import backgroundVideo from "../../assets/video/background.mp4";
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
  return (
    <div className="layouts-wrapper relative flex flex-col h-screen overflow-x-hidden overflow-y-auto">
      {/* Background Video */}
      <video autoPlay loop muted playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Header />

      <div className="flex-1 flex flex-col relative z-10">{children}</div>

      <Footer />
    </div>
  )
}