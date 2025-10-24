import { useMemo } from 'react';
import { GlobalSpacing } from '../../components/common/index';
import { SlideUp, BackgroundImage, FadeIn } from '../../components/animation/index';
import recruit1 from '../../assets/image/dashboard/recruit-1.png';
import recruit2 from '../../assets/image/dashboard/recruit-2.png';

// TypeScript interfaces
interface GridSize {
    w: number;
    h: number;
}

interface RecruitDataItem {
    index: number;
    description?: string;
    headerTitle?: string[];
    title?: string[];
    title1?: string[];
    image?: string;
    gridSize: GridSize;
    responseSize: GridSize;
}

const recruitData: RecruitDataItem[] = [
    {
        index: 0,
        description: "2027年度入社採用情報",
        headerTitle: ['RECRUIT', 'INFO'],
        gridSize: {
            w: 1,
            h: 1,
        },
        responseSize: {
            w: 2,
            h: 1
        }
    },
    {
        index: 1,
        title: ['募集内容'],
        image: recruit1,
        gridSize: {
            w: 1,
            h: 1
        },
        responseSize: {
            w: 1,
            h: 1
        }
    },
    {
        index: 2,
        title1: ["パート・アルバイト", "業務委託", "", "正社員"],
        image: recruit2,
        gridSize: {
            w: 1,
            h: 1
        },
        responseSize: {
            w: 1,
            h: 1
        }
    },
];

// Utility function to generate card classes
const getCardClasses = (item: RecruitDataItem): string => {
    const aspectClasses = item.index !== 0 ? 'aspect-[9/7]' : 'py-20';
    const baseClasses = 'relative rounded-xl overflow-hidden cursor-pointer zoom-on-hover';
    const gridClasses = `col-span-${item.responseSize.w} row-span-${item.responseSize.h} lg:col-span-${item.gridSize.w} lg:row-span-${item.gridSize.h}`;

    return [baseClasses, aspectClasses, gridClasses].filter(Boolean).join(' ');
};

// Content rendering component with animations
const RecruitContent = ({ item }: { item: RecruitDataItem }) => {
    const containerClasses = [
        'relative z-10 w-full h-full flex flex-col justify-center gap-10 sm:gap-18 lg:gap-30',
        item.image ? 'items-center' : 'items-start'
    ].filter(Boolean).join(' ');

    const renderTextArray = (textArray: string[]) => (
        textArray.map((text: string, i: number) => (
            <FadeIn delay={i * 0.1} duration={0.6}>
                {text ? text : <br />}
            </FadeIn>
        ))
    );

    return (
        <div className={containerClasses}>
            {item.description && (
                <SlideUp delay={0.2} duration={0.8}>
                    <div className="text-white text-14 sm:text-18 lg:text-25 font-300">
                        {item.description}
                    </div>
                </SlideUp>
            )}

            {item.title && (
                <SlideUp delay={0.4} duration={0.8}>
                    <h2 className="font-bold text-white text-15 sm:text-20 lg:text-30 font-300">
                        {renderTextArray(item.title)}
                    </h2>
                </SlideUp>
            )}

            {item.title1 && (
                <SlideUp delay={0.4} duration={0.8}>
                    <h2 className="font-bold text-white text-14 lg:text-30 font-300">
                        {renderTextArray(item.title1)}
                    </h2>
                </SlideUp>
            )}

            {item.headerTitle && (
                <FadeIn delay={0.2} duration={0.8} className="font-bold text-white text-35 sm:text-50 lg:text-80 font-400 !leading-none">
                    {item.headerTitle.map((text: string, i: number) => (
                        <FadeIn delay={0.4 + (i * 0.2)} duration={0.8}>
                            {text}
                            {i < item.headerTitle!.length - 1 && <br />}
                        </FadeIn>
                    ))}
                </FadeIn>
            )}
        </div>
    );
};

// Main card component with professional animations
const RecruitCard = ({ item }: { item: RecruitDataItem }) => {
    const hasContent = item.description || item.title || item.title1 || item.headerTitle;

    return (
        <div className={getCardClasses(item)}>
            {item.image && (
                <BackgroundImage delay={0} duration={0.5} className='absolute inset-0 overflow-hidden'>
                    <img src={item.image} className="w-full h-full object-cover" />
                </BackgroundImage>
            )}

            {hasContent && (
                <RecruitContent item={item} />
            )}
        </div>
    );
};

const Recruit = () => {
    const memoizedCards = useMemo(() =>
        recruitData.map((item, index) => (
            <RecruitCard key={index} item={item} />
        )), []
    );

    return (
        <GlobalSpacing>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-20 lg:gap-25 mb-30 lg:mb-80"            >
                {memoizedCards}
            </div>
        </GlobalSpacing>
    );
};

export default Recruit;