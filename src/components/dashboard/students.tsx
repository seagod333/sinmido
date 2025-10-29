import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { GlobalSpacing } from '../../components/common/index';
import { FadeIn, HoverScale, SlideUp } from '../../components/animation/index';
import student1 from '../../assets/image/dashboard/student-1.png';
import student2 from '../../assets/image/dashboard/student-2.png';
import student3 from '../../assets/image/dashboard/student-3.png';
import studentBg1 from '../../assets/image/dashboard/student-bg-1.png';
import studentBg2 from '../../assets/image/dashboard/student-bg-2.png';
import studentBg3 from '../../assets/image/dashboard/student-bg-3.png';
import arrowNext from '../../assets/image/icons/arrow-next.svg';
import arrowPrev from '../../assets/image/icons/arrow-prev.svg';
import './students.scss';

// TypeScript interfaces
interface SlideData {
    image: string;
    image1: string;
    subTitle?: string;
    title: string[];
    desc: string;
}

const slideData: SlideData[] = [
    {
        image: student1,
        image1: studentBg1,
        subTitle: "仕事内容",
        title: ['地域と企業の', '未来をつくる仕事'],
        desc: '地域企業の採用・育成・DXなど、さまざまな課題に向き合い、人と組織の力で解決へ導く。経営者と共に考え、形にしていくことで、企業の成長と地域の活性化を実現します。',
    },
    {
        image: student2,
        image1: studentBg2,
        title: ['Sinmidoの', '親身• 真實 • 新観'],
        desc: 'Sinmido の「シンミ」には、３つの意味があります。私たちらしさをあらわすキーワードであり、経営理念でもある３つのシンミ。それを、社員一人ひとりの個性と人間力をもって実現します。',
    },
    {
        image: student3,
        image1: studentBg3,
        subTitle: "会社員",
        title: ['シンミの心で', '未来を創る仲間たち'],
        desc: 'Sinmidoには、想いをもって行動し、挑戦を楽しむ仲間が集まっています。「親身・真實・新観」を胸に、人と地域の未来を創っています。',
    },
];

// Slide Image Component
const SlideImage = ({ slide, index, currentSlide, isTransitioning, animationKey }: {
    slide: SlideData;
    index: number;
    currentSlide: number;
    isTransitioning: boolean;
    animationKey: number;
}) => {
    const isActive = index === currentSlide;
    const shouldAnimate = isActive && isTransitioning;

    return (
        <div className="student-image-container max-w-85% lg:max-w-50% w-650 aspect-[3/4] relative left-[-5px] lg:left-[-20px]">
            <img src={slide.image1}
                key={`bg-${index}-${animationKey}`}
                className="student-bg-image w-full aspect-3/4 rounded-2xl rotate-3"
                style={{
                    transform: shouldAnimate ? 'none' : 'rotate(-3deg)',
                    transition: 'transform 0.5s ease-in-out'
                }}
                alt={`Background ${index + 1}`}
            />
            <img src={slide.image}
                key={`img-${index}-${animationKey}`}
                className="student-image absolute w-full top-0 right-[-5px] lg:right-[-20px] aspect-3/4 rounded-2xl rotate-3"
                style={{
                    transform: shouldAnimate ? 'none' : 'rotate(3deg)',
                    right: shouldAnimate ? 'none' : '-20px',
                    transition: 'all 0.5s ease-in-out',
                }}
                alt={`Student ${index + 1}`}
            />
        </div>
    );
};

// Slide Content Component
const SlideContent = ({ slide }: { slide: SlideData }) => (
    <div className="student-content absolute h-full w-full max-w-100% lg:max-w-60% w-870 flex flex-col items-center justify-center cursor-pointer select-none">
        <div className="flex flex-col items-center justify-center gap-10 lg:gap-80 z-10 text-white">
            {slide.subTitle && (
                <SlideUp className='text-15 lg:text-25'>
                    {slide.subTitle}
                </SlideUp>
            )}

            <h2 className="text-30 sm:text-35 lg:text-80 font-500 text-center tracking-0 lg:tracking-15">
                {slide.title.map((line, idx) => (
                    <SlideUp key={idx} className='block'>
                        {line}
                    </SlideUp>
                ))}
            </h2>

            <SlideUp className='text-12 lg:text-16 max-w-70% lg:max-w-50% text-center leading-20 lg:leading-35'>
                {slide.desc}
            </SlideUp>
        </div>
    </div>
);

// Navigation Button Component
const NavigationButton = ({ onClick, direction, className, icon, alt }: { onClick: () => void; direction: 'prev' | 'next'; className: string; icon: string; alt: string; }) => (
    <FadeIn delay={0.2} duration={0.5} className={`${className} cursor-pointer hover:scale-110 transition-all duration-300`} onClick={onClick}>
        <img src={icon} alt={alt} className="w-40 lg:w-57 pointer-events-none" />
    </FadeIn>
);

// Slide Indicator Component
const SlideIndicator = ({ index, isActive, onClick }: { index: number; isActive: boolean; onClick: () => void; }) => (
    <FadeIn onClick={onClick} className={`slide-indicator text-base text-15 sm:text-20 ${isActive ? 'text-white' : 'text-white/60 hover:text-white'} cursor-pointer select-none hover:scale-110 transition-all duration-300`}>
        {String(index + 1).padStart(2, '0')}
    </FadeIn>
);

// Mobile Navigation Controls Component
const MobileNavigationControls = ({ onPrev, onNext, indicators }: {
    onPrev: () => void;
    onNext: () => void;
    indicators: React.ReactNode;
}) => (
    <div className="navigation-controls md:hidden flex flex-row items-center justify-center gap-30 sm:gap-35 lg:gap-55">
        <FadeIn delay={0.2} duration={0.5} onClick={onPrev} className="navigation-button w-40 sm:w-50 h-40 sm:h-50 text-white rounded-full border-1 border-white flex items-center justify-center">
            <img src={arrowPrev} alt="Previous" className="w-18 sm:w-20" />
        </FadeIn>

        <FadeIn delay={0.2} duration={0.5} className="flex gap-15 items-center justify-center">
            {indicators}
        </FadeIn>

        <FadeIn delay={0.2} duration={0.5} onClick={onNext} className="navigation-button w-40 sm:w-50 h-40 sm:h-50 text-white rounded-full border-1 border-white flex items-center justify-center z-20">
            <img src={arrowNext} alt="Next" className="w-18 sm:w-20" />
        </FadeIn>
    </div>
);

// Desktop Slide Indicators Component
const DesktopSlideIndicators = ({ indicators }: { indicators: React.ReactNode }) => (
    <FadeIn delay={0.2} duration={0.5} className="navigation-controls hidden md:flex w-full flex flex-row items-center justify-center gap-35 lg:gap-45">
        {indicators}
    </FadeIn>
);

const Students = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);

    // Page load animation trigger
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPageLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const handleSlideChange = useCallback((newSlide: number) => {
        if (isTransitioning || newSlide === currentSlide) return;
        setIsTransitioning(true);
        setAnimationKey(prev => prev + 1);
        setCurrentSlide(newSlide);
        setTimeout(() => setIsTransitioning(false), 700);
    }, [isTransitioning, currentSlide]);

    const nextSlide = useCallback(() => {
        const nextIndex = (currentSlide + 1) % slideData.length;
        handleSlideChange(nextIndex);
    }, [currentSlide, handleSlideChange]);

    const prevSlide = useCallback(() => {
        const prevIndex = (currentSlide - 1 + slideData.length) % slideData.length;
        handleSlideChange(prevIndex);
    }, [currentSlide, handleSlideChange]);

    const goToSlide = useCallback((index: number) => {
        handleSlideChange(index);
    }, [handleSlideChange]);

    // Memoized slide items
    const memoizedSlides = useMemo(() =>
        slideData.map((slide, index) => (
            <div key={`${index}-${currentSlide}`} className="relative flex flex-row items-center justify-center min-w-full">
                <SlideImage
                    slide={slide}
                    index={index}
                    currentSlide={currentSlide}
                    isTransitioning={isTransitioning}
                    animationKey={animationKey}
                />
                <SlideContent slide={slide} />
            </div>
        )), [currentSlide, isTransitioning, animationKey]
    );

    // Memoized indicators
    const memoizedIndicators = useMemo(() =>
        slideData.map((_, index) => (
            <SlideIndicator
                key={index}
                index={index}
                isActive={index === currentSlide}
                onClick={() => goToSlide(index)}
            />
        )), [currentSlide, goToSlide]
    );

    const containerClasses = [
        'students-container relative rounded-2xl',
        isPageLoaded ? 'page-load' : '',
        isTransitioning ? 'slide-transition' : ''
    ].filter(Boolean).join(' ');

    return (
        <GlobalSpacing>
            <div className={containerClasses}>
                {/* Slide Container */}
                <div className="slide-container overflow-hidden">
                    <div className="flex flex-row transition-transform pb-30 sm:pb-40 lg:pb-80 pt-20"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {memoizedSlides}
                    </div>
                </div>

                {/* Desktop Navigation Buttons */}
                <NavigationButton
                    onClick={prevSlide}
                    direction="prev"
                    className="navigation-button hidden md:flex justify-center items-center absolute left-80 top-1/2 -translate-y-1/2 w-150 h-150 lg:w-200 lg:h-200 text-white rounded-full border-1 border-white"
                    icon={arrowPrev}
                    alt="Previous"
                />

                <NavigationButton
                    onClick={nextSlide}
                    direction="next"
                    className="navigation-button hidden md:flex justify-center items-center absolute right-80 top-1/2 -translate-y-1/2 w-150 h-150 lg:w-200 lg:h-200 text-white rounded-full border-1 border-white"
                    icon={arrowNext}
                    alt="Next"
                />

                {/* Mobile Navigation Controls */}
                <MobileNavigationControls
                    onPrev={prevSlide}
                    onNext={nextSlide}
                    indicators={memoizedIndicators}
                />

                {/* Desktop Slide Indicators */}
                <DesktopSlideIndicators indicators={memoizedIndicators} />
            </div>
        </GlobalSpacing>
    );
}

export default Students;