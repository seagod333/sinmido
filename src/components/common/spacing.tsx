import React, { memo } from "react";

// Type definition for spacing components
interface SpacingProps {
    children: React.ReactNode;
    className?: string;
}

// Optimized spacing components with smooth responsive design
const GlobalSpacing = memo<SpacingProps>(({ children, className = "" }) => {
    return (
        <div className={`px-15 xs:px-20 sx:px-25 sm:px-30 md:px-40 lg:px-58 xl:px-80 2xl:px-120 w-full ${className}`}>
            {children}
        </div>
    )
})

const HeaderSpacing = memo<SpacingProps>(({ children, className = "" }) => {
    return (
        <div className={`pt-70 xs:pt-75 sx:pt-80 sm:pt-85 md:pt-95 lg:pt-100 xl:pt-120 2xl:pt-140 ${className}`}>
            {children}
        </div>
    )
})

const ComponentsSpacing = memo<SpacingProps>(({ children, className = "" }) => {
    return (
        <div className={`px-20 xs:px-25 sx:px-30 sm:px-35 md:px-50 lg:px-80 xl:px-120 2xl:px-200 py-25 xs:py-30 sx:py-35 sm:py-40 md:py-50 lg:py-70 xl:py-90 2xl:py-120 w-full ${className}`}>
            {children}
        </div>
    )
})

const ComponentsSpacing1 = memo<SpacingProps>(({ children, className = "" }) => {
    return (
        <div className={`px-15 xs:px-20 sx:px-25 sm:px-30 md:px-50 lg:px-80 xl:px-120 2xl:px-180 py-30 xs:py-35 sx:py-40 sm:py-45 md:py-60 lg:py-90 xl:py-120 2xl:py-180 w-full ${className}`}>
            {children}
        </div>
    )
})

const ComponentsSpacing2 = memo<SpacingProps>(({ children, className = "" }) => {
    return (
        <div className={`px-0 xs:px-5 sx:px-10 sm:px-15 md:px-25 lg:px-50 xl:px-80 2xl:px-150 w-full ${className}`}>
            {children}
        </div>
    )
})


export {
    GlobalSpacing,
    HeaderSpacing,
    ComponentsSpacing,
    ComponentsSpacing1,
    ComponentsSpacing2
}