import { useState, useEffect } from 'react';
import { GlobalSpacing } from '../../components/layouts/layouts';
import student1 from '../../assets/image/dashboard/student-1.png';
import student2 from '../../assets/image/dashboard/student-2.png';
import student3 from '../../assets/image/dashboard/student-3.png';
import studentBg1 from '../../assets/image/dashboard/student-bg-1.png';
import studentBg2 from '../../assets/image/dashboard/student-bg-2.png';
import studentBg3 from '../../assets/image/dashboard/student-bg-3.png';
import arrowNext from '../../assets/image/icons/arrow-next.svg';
import arrowPrev from '../../assets/image/icons/arrow-prev.svg';

import './students.scss';

const slideData = [
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
]

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

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setAnimationKey(prev => prev + 1);
        setCurrentSlide((prev) => (prev + 1) % slideData.length);
        setTimeout(() => setIsTransitioning(false), 700);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setAnimationKey(prev => prev + 1);
        setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
        setTimeout(() => setIsTransitioning(false), 700);
    };

    const goToSlide = (index: number) => {
        if (isTransitioning || index === currentSlide) return;
        setIsTransitioning(true);
        setAnimationKey(prev => prev + 1);
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 700);
    };

    return (
        <GlobalSpacing>
            <div className={`students-container relative rounded-2xl ${isPageLoaded ? 'page-load' : ''} ${isTransitioning ? 'slide-transition' : ''}`}>
                {/* Slide Container */}
                <div className="slide-container overflow-hidden">
                    <div className="flex flex-row transition-transform pb-30 sm:pb-40 lg:pb-80 pt-20"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slideData.map((slide, index) => (
                            <div key={`${index}-${currentSlide}`} className="relative flex flex-row items-center justify-center min-w-full">
                                <div className="student-image-container max-w-85% lg:max-w-50% w-650 aspect-[3/4] relative left-[-5px] lg:left-[-20px]">
                                    <img src={slide.image1}
                                        key={`bg-${index}-${animationKey}`}
                                        className={`student-bg-image w-full aspect-3/4 rounded-2xl rotate-3`}
                                        style={{
                                            transform: index === currentSlide && isTransitioning ? 'none' : 'rotate(-3deg)',
                                            transition: 'transform 0.5s ease-in-out'
                                        }}
                                    />

                                    <img src={slide.image}
                                        key={`img-${index}-${animationKey}`}
                                        className={`student-image absolute w-full top-0 right-[-5px] lg:right-[-20px] aspect-3/4 rounded-2xl rotate-3`}
                                        style={{
                                            transform: index === currentSlide && isTransitioning ? 'none' : 'rotate(3deg)',
                                            right: index === currentSlide && isTransitioning ? 'none' : '-20px',
                                            transition: 'all 0.5s ease-in-out',
                                        }}
                                    />
                                </div>


                                <div className="student-content absolute h-full w-full max-w-100% lg:max-w-55% w-700 flex flex-col items-center justify-center">
                                    <div className="flex flex-col items-center justify-center gap-10 lg:gap-80 z-10 text-white">
                                        <span className="text-15 lg:text-25">
                                            {slide?.subTitle || ''}
                                        </span>

                                        <h2 className="text-30 sm:text-35 lg:text-90 font-500 text-center tracking-wide">
                                            {Array.isArray(slide.title) && (
                                                slide.title.map((line, idx) => (
                                                    <span key={idx} className="block lg:tracking-[0.85em]">
                                                        {line}
                                                    </span>
                                                ))
                                            )}
                                        </h2>

                                        <p className="text-12 lg:text-16 max-w-70% lg:max-w-50% text-center">
                                            {slide.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Prev Button - Desktop only */}
                <button onClick={prevSlide}
                    className="navigation-button hidden md:flex justify-center items-center absolute left-80 top-1/2 -translate-y-1/2 w-150 h-150 lg:w-200 lg:h-200 text-white rounded-full border-1 border-white"
                    style={{ zIndex: 20 }}
                >
                    <img src={arrowPrev} alt="Previous" className="w-40 lg:w-57" />
                </button>

                {/* Next Button - Desktop only */}
                <button
                    onClick={nextSlide}
                    className="navigation-button hidden md:flex justify-center items-center absolute right-80 top-1/2 -translate-y-1/2 w-150 h-150 lg:w-200 lg:h-200 text-white rounded-full border-1 border-white"
                    style={{ zIndex: 20 }}
                >
                    <img src={arrowNext} alt="Previous" className="w-40 lg:w-57" />
                </button>

                {/* Mobile Navigation Controls */}
                <div className="navigation-controls md:hidden flex flex-row items-center justify-center gap-30 sm:gap-35 lg:gap-55">
                    {/* Prev Button - Mobile */}
                    <button onClick={prevSlide}
                        className="navigation-button w-40 sm:w-50 h-40 sm:h-50 text-white rounded-full border-1 border-white flex items-center justify-center"
                    >
                        <img src={arrowPrev} alt="Previous" className="w-18 sm:w-20" />
                    </button>

                    {/* Slide Indicators */}
                    <div className="flex gap-15 items-center justify-center">
                        {slideData.map((_, index) => (
                            <button key={index}
                                onClick={() => goToSlide(index)}
                                className={`slide-indicator text-base text-15 sm:text-20 ${index === currentSlide ? 'text-white' : 'text-white/60 hover:text-white'}`}
                            >
                                {String(index + 1).padStart(2, '0')}
                            </button>
                        ))}
                    </div>

                    {/* Next Button - Mobile */}
                    <button
                        onClick={nextSlide}
                        className="navigation-button w-40 sm:w-50 h-40 sm:h-50 text-white rounded-full border-1 border-white flex items-center justify-center"
                        style={{ zIndex: 20 }}
                    >
                        <img src={arrowNext} alt="Next" className="w-18 sm:w-20" />
                    </button>
                </div>

                {/* Desktop Slide Indicators */}
                <div className="navigation-controls hidden md:flex w-full flex flex-row items-center justify-center gap-35 lg:gap-45">
                    {slideData.map((_, index) => (
                        <button key={index}
                            onClick={() => goToSlide(index)}
                            className={`slide-indicator text-base text-20 ${index === currentSlide ? 'text-white' : 'text-white/60 hover:text-white'}`}
                        >
                            {String(index + 1).padStart(2, '0')}
                        </button>
                    ))}
                </div>
            </div>
        </GlobalSpacing>
    )
}

export default Students;