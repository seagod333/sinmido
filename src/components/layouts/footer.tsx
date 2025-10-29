import { memo } from "react";
import { Link } from "react-router-dom";
import instagramIcon from "../../assets/image/icons/instagram.png";
import youtubeIcon from "../../assets/image/icons/youtube.png";
import logo from "../../assets/image/logo.png";
import { GlobalSpacing } from "../common";
import { FadeIn, SlideUp } from "../animation";

// TypeScript interfaces
interface FooterProps {
  className?: string;
}

interface NavigationItem {
  label: string;
  href: string;
}

interface SocialLink {
  href: string;
  icon: string;
  alt: string;
  label: string;
}

// Navigation items configuration
const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "企業文化", href: "/corporate-culture" },
  { label: "仕事内容", href: "/corporate-intelligence" },
  { label: "インタビュー", href: "/interview" },
  { label: "採用情報", href: "/work-environment" }
]

// Social links configuration
const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://youtube.com",
    icon: youtubeIcon,
    alt: "YouTube",
    label: "Subscribe to our YouTube channel"
  },
  {
    href: "https://instagram.com",
    icon: instagramIcon,
    alt: "Instagram",
    label: "Follow us on Instagram"
  }
]

// Sub-components for better organization
const LogoSection = memo(() => (
  <FadeIn delay={0.2} duration={0.6}>
    <Link to="/" className="flex flex-row">
      <img src={logo} className="h-45 w-auto" alt="Company Logo" />
    </Link>
  </FadeIn>
));

const NavigationSection = memo(({ items }: { items: NavigationItem[] }) => (
  <SlideUp delay={0.3} duration={0.6}>
    <div className="flex items-center gap-50">
      {items.map((item) => (
        <Link
          key={`desktop-nav-${item.href}`}
          to={item.href}
          className="text-white text-15 font-500 cursor-pointer transition-colors duration-200 hover:text-third"
        >
          {item.label}
        </Link>
      ))}
    </div>
  </SlideUp>
));

const SocialMediaSection = memo(() => (
  <FadeIn delay={0.4} duration={0.6}>
    <div className="flex flex-row gap-50">
      {SOCIAL_LINKS.map((social) => (
        <div key={`social-${social.alt}`} className="flex-1 flex flex-col items-center justify-center">
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 border border-white rounded-full cursor-pointer transition-all duration-200 hover:bg-white/10 hover:scale-110"
            aria-label={social.label}
          >
            <img
              src={social.icon}
              alt={social.alt}
              className="w-30 h-30"
              loading="lazy"
            />
          </a>
        </div>
      ))}
    </div>
  </FadeIn>
));

const EntryButton = memo(() => (
  <SlideUp delay={0.5} duration={0.6}>
    <div className="flex-shrink-0 relative">
      <Link to="/requirements" className="group">
        <span className="text-40 font-500 text-white pr-20 transition-colors duration-200 group-hover:text-third">
          ENTRY
        </span>
        <span className="absolute bottom-1 left-0 w-full h-1 bg-white transform scale-x-100 origin-left transition-transform duration-200 group-hover:scale-x-0"></span>
        <span className="absolute -bottom-2 right-10 w-1 h-50% bg-white transform -rotate-45 origin-right transition-transform duration-200 group-hover:scale-y-0"></span>
      </Link>
    </div>
  </SlideUp>
));

const CopyrightSection = memo(() => (
  <FadeIn delay={0.6} duration={0.6}>
    <p className="text-white text-15 text-center">
      Copyright © 2024 Sinmido. All Rights Reserved.
    </p>
  </FadeIn>
));

const MobileBrandSection = memo(() => (
  <FadeIn delay={0.2} duration={0.6}>
    <div className="sm:px-15 sm:py-15 px-10 py-10 bg-white flex flex-col justify-center">
      <div className="text-10 sm:text-12 text-center text-gray-700">
        2027年度新卒採用
      </div>
      <div className="text-12 sm:text-16 text-center font-semibold text-gray-900">
        MY PAGE
      </div>
    </div>
  </FadeIn>
));

const MobileNavigationSection = memo(({ items }: { items: NavigationItem[] }) => (
  <div className="bg-secondary text-white text-center">
    {items.map((item, index) => (
      <FadeIn key={`footer-nav-${item.href}`} delay={0.3 + index * 0.1} duration={0.6}>
        <Link
          to={item.href}
          className={`text-10 px-10 py-5 sm:px-15 sm:py-10 block transition-colors duration-200 hover:text-third ${index < items.length - 1 ? 'border-b border-white' : ''
            }`}
        >
          {item.label}
        </Link>
      </FadeIn>
    ))}
  </div>
));

const MobileSocialSection = memo(() => (
  <div className="bg-black flex flex-row">
    {SOCIAL_LINKS.map((social, index) => (
      <FadeIn key={`social-${social.alt}`} delay={0.4 + index * 0.1} duration={0.6}>
        <div
          className={`flex-1 flex flex-col items-center justify-center ${index < SOCIAL_LINKS.length - 1 ? 'border-r border-white' : ''
            }`}
        >
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 sm:p-7 border border-white rounded-full cursor-pointer transition-all duration-200 hover:bg-white/10 hover:scale-110"
            aria-label={social.label}
          >
            <img
              src={social.icon}
              alt={social.alt}
              className="sm:w-16 sm:h-16 w-12 h-12"
              loading="lazy"
            />
          </a>
        </div>
      </FadeIn>
    ))}
  </div>
));

const Footer = memo<FooterProps>(({ className = "" }) => {
  // Add requirements page to navigation for footer
  const footerNavigationItems = [
    ...NAVIGATION_ITEMS,
    { label: "募集要項", href: "/requirements" }
  ];

  return (
    <footer className={className}>
      {/* Desktop Footer */}
      <div className="hidden lg:block bg-fourth">
        <GlobalSpacing className="py-30">
          {/* Top Section */}
          <div className="flex items-center justify-between mb-8">
            <LogoSection />

            <div className="flex-1 flex flex-col items-center gap-35">
              <NavigationSection items={footerNavigationItems} />
              <SocialMediaSection />
            </div>

            <EntryButton />
          </div>
        </GlobalSpacing>

        {/* Bottom Section - Copyright */}
        <GlobalSpacing className="border-t border-white py-20">
          <CopyrightSection />
        </GlobalSpacing>
      </div>

      {/* Mobile Footer */}
      <div className="lg:hidden grid grid-cols-3">
        <MobileBrandSection />
        <MobileNavigationSection items={footerNavigationItems} />
        <MobileSocialSection />
      </div>
    </footer>
  )
})

export default Footer;