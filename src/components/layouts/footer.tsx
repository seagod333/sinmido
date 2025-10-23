import React, { memo } from "react";
import { Link } from "react-router-dom";
import instagramIcon from "../../assets/image/icons/instagram.png";
import linkedinIcon from "../../assets/image/icons/linkedin.png";

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
    href: "https://instagram.com",
    icon: instagramIcon,
    alt: "Instagram",
    label: "Follow us on Instagram"
  },
  {
    href: "https://linkedin.com",
    icon: linkedinIcon,
    alt: "LinkedIn",
    label: "Connect with us on LinkedIn"
  }
]

const Footer = memo<FooterProps>(({ className = "" }) => {
  // Add requirements page to navigation for footer
  const footerNavigationItems = [
    ...NAVIGATION_ITEMS,
    { label: "募集要項", href: "/requirements" }
  ];

  return (
    <div className={`md:hidden grid grid-cols-3 ${className}`}>
      {/* Brand Section */}
      <div className="sm:px-15 sm:py-15 px-10 py-10 bg-white flex flex-col justify-center">
        <div className="text-10 sm:text-12 text-center text-gray-700">
          2027年度新卒採用
        </div>
        <div className="text-12 sm:text-16 text-center font-semibold text-gray-900">
          MY PAGE
        </div>
      </div>

      {/* Navigation Section */}
      <div className="bg-secondary text-white text-center">
        {footerNavigationItems.map((item, index) => (
          <Link
            key={`footer-nav-${item.href}`}
            to={item.href}
            className={`text-10 px-10 py-5 sm:px-15 sm:py-10 block transition-colors duration-200 hover:text-third ${index < footerNavigationItems.length - 1 ? 'border-b border-white' : ''
              }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Social Links Section */}
      <div className="bg-black flex flex-row">
        {SOCIAL_LINKS.map((social, index) => (
          <div
            key={`social-${social.alt}`}
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
        ))}
      </div>
    </div>
  )
})

export default Footer;