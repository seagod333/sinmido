import React, { useRef, useEffect, useState, memo, useCallback } from "react";
import { Link } from "gatsby";

import { sleep } from "../../utils/utils";
import "./dropdown-menu.scss";

// TypeScript interfaces
interface NavigationItem {
    label: string;
    href: string;
    icon?: string;
}

interface DropdownMenuProps {
    items: NavigationItem[];
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

const DropdownMenu = memo<DropdownMenuProps>(({
    items,
    isOpen,
    onClose,
    className = ""
}) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isClosing, setIsClosing] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    // Optimize event handlers with useCallback
    const handleItemClick = useCallback(() => {
        onClose();
    }, [onClose]);

    const handleClickOutside = useCallback(async (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            await sleep(100);
            onClose();
        }
    }, [onClose]);

    // Handle opening animation
    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            setIsClosing(false);
        } else if (shouldRender) {
            setIsClosing(true);
            // Wait for animation to complete before removing from DOM
            const timer = setTimeout(() => {
                setShouldRender(false);
                setIsClosing(false);
            }, 200); // Match the slideOut animation duration
            return () => clearTimeout(timer);
        }
    }, [isOpen, shouldRender]);

    // Close dropdown when clicking outside
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, handleClickOutside]);

    if (!shouldRender) return null;

    return (
        <div
            className={`dropdown-menu ${isClosing ? 'closing' : ''} absolute flex flex-col gap-4 lg:gap-12 py-5 sm:py-8 lg:py-12 right-0 top-full w-200 mt-12 rounded-10 z-100 bg-white dropdown-backdrop ${className}`}
            ref={dropdownRef}
            role="menu"
            aria-label="Navigation menu"
        >
            {items.map((item, index) => (
                <Link
                    key={`dropdown-${item.href}-${index}`}
                    to={item.href}
                    className="dropdown-item block px-12 sm:px-16 lg:px-20 text-black/90 hover:text-black rounded-lg transition-all duration-200 hover:bg-gray-50"
                    onClick={handleItemClick}
                    role="menuitem"
                >
                    <span className="text-10 sm:text-15 lg:text-18 group-hover:text-gradient transition-all duration-300 font-medium">
                        {item.label}
                    </span>
                </Link>
            ))}
        </div>
    )
})

export default DropdownMenu;
