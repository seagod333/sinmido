import { useState } from "react";
import { GlobalSpacing } from "./layouts";
import DropdownMenu from "../DropdownMenu";
import logo from "../../assets/image/logo.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigationItems = [
    { label: "企業文化", href: "/corporate-culture" },
    { label: "仕事内容", href: "/corporate-intelligence" },
    { label: "インタビュー", href: "#" },
    { label: "採用情報", href: "#" }
  ];

  const toggleDropdown = () => {
    if (!isDropdownOpen) setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <GlobalSpacing className="header-wrapper fixed top-0 left-0 right-0 z-50">
      <header className="relative z-50">
        <div className="flex justify-between items-center py-15 sm:py-25 lg:py-20">
          {/* Left Section - Brand */}
          <div className="flex flex-col flex-column group">
            <a href="/" className="flex flex-row">
              <img src={logo} className="h-30 sm:h-35 lg:h-55 w-auto" alt="Sinmido Home" />
            </a>

            <p className="font-400 text-10 lg:text-15 text-white select-none">
              Copyright © 2024 Sinmido. All Rights Reserved.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex items-center lg:gap-x-130">
            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:flex items-center gap-x-55">
              {navigationItems.map((item, index) => (
                <a key={index}
                  href={item.href}
                  className="text-white text-15 font-600 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Enhanced Hamburger Button */}
            <div className="relative">
              <button onClick={toggleDropdown}
                className="relative w-40 sm:w-50 lg:w-64 h-40 sm:h-50 lg:h-64 rounded-100 flex items-center justify-center group hover-lift border-1 border-white"
              >
                <div className="flex flex-col gap-y-5 sm:gap-y-8">
                  <div className={`w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full`} />
                  <div className={`w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full`} />
                  <div className={`w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full`} />
                </div>
              </button>

              <DropdownMenu
                items={navigationItems}
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
}

export default Header;