import { useRef, useEffect } from "react";

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

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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

    const handleItemClick = () => {
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div
            className={`absolute flex flex-col gap-4 lg:gap-12 py-8 lg:py-12 right-0 top-full w-200 mt-12 rounded-xl z-50 bg-white ${className}`}
            ref={dropdownRef}
        >
            {items.map((item, index) => (
                <a key={index}
                    href={item.href}
                    className={`block px-12 lg:px-16 text-black/90 hover:text-black rounded-lg`}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={handleItemClick}
                >
                    <span className="text-10 lg:text-15 group-hover:text-gradient transition-all duration-300 font-medium">
                        {item.label}
                    </span>
                </a>
            ))}
        </div>
    );
};

export default DropdownMenu;
