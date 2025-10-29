import React, { memo } from "react";
import { BackgroundImage, FadeIn, HeaderSpacing, Layouts, SlideUp, StaggerContainer, StaggerItem, ScaleIn } from "../components";
import columnBackgroundImg from "../assets/image/column/background.png";
import popularColumnImg1 from "../assets/image/column/popular-item-1.png";
import popularColumnImg2 from "../assets/image/column/popular-item-2.png";
import popularColumnImg3 from "../assets/image/column/popular-item-3.png";
import popularColumnImg4 from "../assets/image/column/popular-item-4.png";
import popularColumnImg5 from "../assets/image/column/popular-item-5.png";
import popularColumnImg6 from "../assets/image/column/popular-item-6.png";
import popularColumnImg7 from "../assets/image/column/popular-item-7.png";
import popularColumnImg8 from "../assets/image/column/popular-item-8.png";
import popularColumnImg9 from "../assets/image/column/popular-item-9.png";
import newColumnImg1 from "../assets/image/column/new-items-1.png";
import newColumnImg2 from "../assets/image/column/new-items-2.png";
import newColumnImg3 from "../assets/image/column/new-items-3.png";
import newColumnImg4 from "../assets/image/column/new-items-4.png";
import newColumnImg5 from "../assets/image/column/new-items-5.png";
import newColumnImg6 from "../assets/image/column/new-items-6.png";
import newColumnImg7 from "../assets/image/column/new-items-7.png";
import newColumnImg8 from "../assets/image/column/new-items-8.png";
import newColumnImg9 from "../assets/image/column/new-items-9.png";
import newColumnImg10 from "../assets/image/column/new-items-10.png";

interface PopularColumnData {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
}

interface NewColumnData {
    id: number;
    number: number;
    thumbnailUrl: string;
    text: string;
}

// Mock data for Popular Columns
const popularColumnsData: PopularColumnData[] = [
    {
        id: 1,
        imageUrl: popularColumnImg1,
        title: "2025.10.22",
        description: "4C分析で売上UP！初心者向け分析方法を分かりやすく解説"
    },
    {
        id: 2,
        imageUrl: popularColumnImg2,
        title: "2025.10.22",
        description: "4C分析で売上UP！初心者向け分析方法を分かりやすく解説"
    },
    {
        id: 3,
        imageUrl: popularColumnImg3,
        title: "2025.10.22",
        description: "4C分析で売上UP！初心者向け分析方法を分かりやすく解説"
    },
    {
        id: 4,
        imageUrl: popularColumnImg4,
        title: "2025.10.22",
        description: "4C分析で売上UP！初心者向け分析方法を分かりやすく解説"
    },
    {
        id: 5,
        imageUrl: popularColumnImg5,
        title: "2025.10.22",
        description: "4C分析で売上UP！初心者向け分析方法を分かりやすく解説"
    },
    {
        id: 6,
        imageUrl: popularColumnImg6,
        title: "2025.10.22",
        description: "4C分析で売上UP！初心者向け分析方法を分かりやすく解説"
    },
    {
        id: 7,
        imageUrl: popularColumnImg7,
        title: "2025.10.22",
        description: "4C分析で売上UP！初心者向け分析方法を分かりやすく解説"
    },
    {
        id: 8,
        imageUrl: popularColumnImg8,
        title: "2025.10.22",
        description: "4C分析で売上UP！初心者向け分析方法を分かりやすく解説"
    },
    {
        id: 9,
        imageUrl: popularColumnImg9,
        title: "2025.10.22",
        description: "4C分析で売上UP！初心者向け分析方法を分かりやすく解説"
    }
];

// Mock data for New Columns
const newColumnsData: NewColumnData[] = [
    {
        id: 1,
        number: 1,
        thumbnailUrl: newColumnImg1,
        text: "4C分析で売上UP！初心者向け分析方法を分かりやすく解説"
    },
    {
        id: 2,
        number: 2,
        thumbnailUrl: newColumnImg2,
        text: "4C分析で売上UP！初心者向け分析方法を分かりやすく解説"
    },
    {
        id: 3,
        number: 3,
        thumbnailUrl: newColumnImg3,
        text: "4C分析で売上UP！初心者向け分析方法を分かりやすく解説"
    },
    {
        id: 4,
        number: 4,
        thumbnailUrl: newColumnImg4,
        text: "4C分析で売上UP！初心者向け分析方法を分かりやすく解説"
    },
    {
        id: 5,
        number: 5,
        thumbnailUrl: newColumnImg5,
        text: "4C分析で売上UP！初心者向け分析方法を分かりやすく解説"
    },
    {
        id: 6,
        number: 6,
        thumbnailUrl: newColumnImg6,
        text: "4C分析で売上UP！初心者向け分析方法を分かりやすく解説"
    },
    {
        id: 7,
        number: 7,
        thumbnailUrl: newColumnImg7,
        text: "4C分析で売上UP！初心者向け分析方法を分かりやすく解説"
    },
    {
        id: 8,
        number: 8,
        thumbnailUrl: newColumnImg8,
        text: "4C分析で売上UP！初心者向け分析方法を分かりやすく解説"
    },
    {
        id: 9,
        number: 9,
        thumbnailUrl: newColumnImg9,
        text: "4C分析で売上UP！初心者向け分析方法を分かりやすく解説"
    },
    {
        id: 10,
        number: 10,
        thumbnailUrl: newColumnImg10,
        text: "4C分析で売上UP！初心者向け分析方法を分かりやすく解説"
    }
];

const SectionHeader = memo(({ title, className = "" }: { title: string, className?: string }) => (
    <SlideUp delay={0} duration={0.7}
        className={`text-black text-20 sm:text-24 lg:text-40 font-500 text-center ${className}`}
    >
        {title}
    </SlideUp>
));

const PopularColumnCard = memo(({ column, index }: { column: PopularColumnData, index: number }) => (
    <ScaleIn delay={index * 0.1} duration={0.8} className="flex flex-col gap-5 lg:gap-30 bg-white rounded-lg border-1 border-twentyfourth pt-5">
        <img src={column.imageUrl} className="w-full aspect-[9/5] object-cover rounded-t-lg" />
        
        <div className="flex flex-col gap-10 sx:gap-20 px-10 sx:px-15 lg:px-20 py-10 sx:py-20 lg:py-40">
            <FadeIn delay={0.2} duration={0.6} className="text-11 lg:text-20 font-500 text-black">
                {column.title}
            </FadeIn>
            
            <FadeIn delay={0.3} duration={0.6} className="text-11 lg:text-20 font-500 text-black">
                {column.description}
            </FadeIn>
        </div>
    </ScaleIn>
));

const NewColumnItem = memo(({ column, index }: { column: NewColumnData, index: number }) => (
    <ScaleIn delay={index * 0.1} duration={0.8} className="grid grid-cols-5 gap-15 px-10 sx:px-15 lg:px-15 py-10 sx:py-20 lg:py-30 border-b border-twentyfourth">
        <div className="col-span-1 flex-shrink-0">
            <img src={column.thumbnailUrl} className="w-full aspect-square object-cover flex-shrink-0" />
        </div>
        
        <div className="col-span-4 flex-grow">
            <FadeIn delay={0.2} duration={0.6} className="text-12 sx:text-15 lg:text-20 font-500 text-black">
                {column.text}
            </FadeIn>
        </div>
    </ScaleIn>
));

const Column = memo(() => {
    return (
        <Layouts>
            <HeaderSpacing className="relative w-full h-full flex items-center justify-center aspect-[3/2] lg:aspect-[9/4] select-none overflow-hidden">
                <BackgroundImage className="w-full h-full object-cover absolute top-0 left-0 pointer-events-none select-none">
                    <img src={columnBackgroundImg} className="w-full h-full object-cover" alt="White Paper Background" />
                </BackgroundImage>
                <div className="relative z-10 pb-20 sm:pb-30 lg:pb-40">
                    <FadeIn delay={0.5} duration={1} className="text-white text-18 sm:text-20 lg:text-60 font-600 text-center">
                        コラム
                    </FadeIn>
                </div>
            </HeaderSpacing>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-65 px-10 lg:px-150 py-20 sx:py-40 lg:py-100">
                <div className="col-span-1 lg:col-span-2 flex flex-col">
                    {/* Featured Popular Columns Section */}
                    <div className="flex flex-col pt-10 sx:pt-40 lg:pt-65">
                        <SectionHeader title="人気コラム" />

                        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-10 sx:gap-20 lg:gap-45 py-20 sx:py-50 lg:py-90">
                            {popularColumnsData.slice(0, 3).map((column, index) => (
                                <PopularColumnCard key={column.id} column={column} index={index} />
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* More Popular Columns Section */}
                    <div className="flex flex-col pt-20 sx:pt-40 lg:pt-65">
                        <SectionHeader title="人気コラム" />

                        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-10 sx:gap-20 lg:gap-45 py-20 sx:py-50 lg:py-90">
                            {popularColumnsData.slice(3, 9).map((column, index) => (
                                <PopularColumnCard key={column.id} column={column} index={index + 3} />
                            ))}
                        </StaggerContainer>
                    </div>
                </div>

                {/* New Columns Section */}
                <div className="col-span-1 border-1 border-twentyfourth bg-white">
                    <div className="flex flex-col gap-10 sx:gap-20 px-5 lg:px-50 py-20 sx:py-40 lg:py-70">
                        <SectionHeader title="新しコラム" />
                        
                        <StaggerContainer className="flex flex-col">
                            {newColumnsData.map((column, index) => (
                                <NewColumnItem key={column.id} column={column} index={index} />
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </div>
        </Layouts>
    );
});

export default Column;