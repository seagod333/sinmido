import { Link } from "react-router-dom";
import { useState, memo, useCallback } from "react";
import DropdownMenu from "../drop-menu/dropdown-menu";
import { GlobalSpacing } from "../common/index";
import logo from "../../assets/image/logo.png";

// TypeScript interfaces
interface NavigationItem {
  label: string;
  href: string;
}

interface HeaderProps {
  className?: string;
}

// Navigation items configuration
const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "企業文化", href: "/corporate-culture" },
  { label: "仕事内容", href: "/corporate-intelligence" },
  { label: "インタビュー", href: "/interview" },
  { label: "採用情報", href: "/work-environment" }
];

const Header = memo<HeaderProps>(({ className = "" }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Optimize event handlers with useCallback
  const toggleDropdown = useCallback(() => {
    if (!isDropdownOpen) setIsDropdownOpen(!isDropdownOpen);
  }, [isDropdownOpen]);

  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  return (
    <GlobalSpacing className={`header-wrapper fixed top-0 left-0 right-0 z-50 ${className}`}>
      <header className="relative z-50">
        <div className="flex justify-between items-center py-15 sm:py-25 lg:py-20">
          {/* Left Section - Brand */}
          <div className="flex flex-col flex-column group">
            <Link to="/" className="flex flex-row">
              <img
                src={logo}
                className="h-30 sm:h-35 lg:h-55 w-auto"
                alt="Sinmido Home"
                loading="eager"
              />
            </Link>

            <p className="font-400 text-10 lg:text-15 text-white select-none">
              Copyright © 2024 Sinmido. All Rights Reserved.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex items-center lg:gap-x-130">
            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-x-55">
              {NAVIGATION_ITEMS.map((item, index) => (
                <Link
                  key={`nav-${item.href}`}
                  to={item.href}
                  className="text-white text-15 font-600 cursor-pointer transition-colors duration-200 hover:text-third"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Enhanced Hamburger Button */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="relative w-40 sm:w-50 lg:w-64 h-40 sm:h-50 lg:h-64 rounded-100 flex items-center justify-center group hover-lift border-1 border-white transition-all duration-200 hover:bg-white/10"
                aria-label="Toggle navigation menu"
                aria-expanded={isDropdownOpen}
              >
                <div className="flex flex-col gap-y-5 sm:gap-y-8">
                  <div className="w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full transition-transform duration-200" />
                  <div className="w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full transition-transform duration-200" />
                  <div className="w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full transition-transform duration-200" />
                </div>
              </button>

              <DropdownMenu
                items={NAVIGATION_ITEMS}
                isOpen={isDropdownOpen}
                onClose={closeDropdown}
                className="mt-12"
              />
            </div>
          </div>
        </div>
      </header>
    </GlobalSpacing>
  )
})

export default Header;