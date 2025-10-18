import { useRef, useEffect, useState } from "react";
import "./dropdownMenu.scss";
import { sleep } from "../utils/utils";

interface DropdownMenuProps {
    items: Array<{
        label: string;
        href: string;
        icon?: string;
    }>;
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

const DropdownMenu = ({ items, isOpen, onClose, className = "" }: DropdownMenuProps) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isClosing, setIsClosing] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

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
        const handleClickOutside = async (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                await sleep(100);
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    const handleItemClick = async () => {
        onClose();
    };

    if (!shouldRender) return null;

    return (
        <div className={`dropdown-menu ${isClosing ? 'closing' : ''} absolute flex flex-col gap-4 lg:gap-12 py-5 sm:py-8 lg:py-12 right-0 top-full w-200 mt-12 rounded-xl z-100 bg-white dropdown-backdrop ${className}`}
            ref={dropdownRef}
        >
            {items.map((item, index) => (
                <a key={index}
                    href={item.href}
                    className={`dropdown-item block px-12 sm:px-16 lg:px-20 text-black/90 hover:text-black rounded-lg transition-all duration-200`}
                    onClick={handleItemClick}
                >
                    <span className="text-10 sm:text-15 lg:text-18 group-hover:text-gradient transition-all duration-300 font-medium">
                        {item.label}
                    </span>
                </a>
            ))}
        </div>
    );
};

export default DropdownMenu;
