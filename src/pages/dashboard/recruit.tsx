import { useMemo } from 'react';
import { GlobalSpacing } from '../../components/common/index';
import recruit1 from '../../assets/image/dashboard/recruit-1.png';
import recruit2 from '../../assets/image/dashboard/recruit-2.png';

// TypeScript interfaces
interface GridSize {
    w: number;
    h: number;
}

interface RecruitDataItem {
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
const getCardClasses = (item: RecruitDataItem, index: number): string => {
    const aspectClasses = index !== 0 ? 'aspect-[9/7]' : 'py-20';
    const baseClasses = 'relative rounded-xl overflow-hidden cursor-pointer zoom-on-hover';
    const gridClasses = `col-span-${item.responseSize.w} row-span-${item.responseSize.h} lg:col-span-${item.gridSize.w} lg:row-span-${item.gridSize.h}`;

    return [baseClasses, aspectClasses, gridClasses].filter(Boolean).join(' ');
};

// Content rendering component
const RecruitContent = ({ item }: { item: RecruitDataItem }) => {
    const containerClasses = [
        'relative z-10 w-full h-full flex flex-col justify-center gap-10 sm:gap-18 lg:gap-30',
        item.image ? 'items-center' : 'items-start'
    ].filter(Boolean).join(' ');

    const renderTextArray = (textArray: string[]) => (
        textArray.map((text: string, i: number) => (
            <div key={i}>
                {text ? text : <br />}
            </div>
        ))
    );

    return (
        <div className={containerClasses}>
            {item.description && (
                <div className="text-white text-14 sm:text-18 lg:text-25 font-300">
                    {item.description}
                </div>
            )}

            {item.title && (
                <h2 className="font-bold text-white text-15 sm:text-20 lg:text-30 font-300">
                    {renderTextArray(item.title)}
                </h2>
            )}

            {item.title1 && (
                <h2 className="font-bold text-white text-14 lg:text-30 font-300">
                    {renderTextArray(item.title1)}
                </h2>
            )}

            {item.headerTitle && (
                <h2 className="font-bold text-white text-35 sm:text-50 lg:text-80 font-400 !leading-none">
                    {item.headerTitle.map((text: string, i: number) => (
                        <span key={i}>
                            {text}
                            {i < item.headerTitle!.length - 1 && <br />}
                        </span>
                    ))}
                </h2>
            )}
        </div>
    );
};

// Main card component
const RecruitCard = ({ item, index }: { item: RecruitDataItem; index: number }) => {
    const hasContent = item.description || item.title || item.title1 || item.headerTitle;

    return (
        <div key={index} className={getCardClasses(item, index)}>
            {item.image && (
                <div className="absolute inset-0">
                    <img src={item.image} className="w-full h-full object-cover" alt={`Recruit item ${index + 1}`} />
                </div>
            )}

            {hasContent && <RecruitContent item={item} />}
        </div>
    );
};

const Recruit = () => {
    const memoizedCards = useMemo(() =>
        recruitData.map((item, index) => (
            <RecruitCard key={index} item={item} index={index} />
        )), []
    );

    return (
        <GlobalSpacing>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-20 lg:gap-25 mb-30 lg:mb-80">
                {memoizedCards}
            </div>
        </GlobalSpacing>
    );
};

export default Recruit;