import React, { memo } from "react";
import { Layouts } from "../components/layouts/layouts";
import { BackgroundImage, PageHeader, FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "../components/animation";
import { HeaderSpacing, ComponentsSpacing2 } from "../components/common/index";

import interviewCover1 from "../assets/image/interview/interview-cover-1.png";
import interviewHero1 from "../assets/image/interview/interview-hero-1.png";
import interviewFooter from "../assets/image/interview/interview-footer.png";
import serviceImg1 from "../assets/image/interview/service-1.png";
import serviceImg2 from "../assets/image/interview/service-2.png";
import serviceImg3 from "../assets/image/interview/service-3.png";
import arrowPrev from "../assets/image/icons/arrow-prev-1.png";
import arrowNext from "../assets/image/icons/arrow-next-1.png";
import interviewImg1 from "../assets/image/interview/interview-1.png";
import interviewImg2 from "../assets/image/interview/interview-2.png";

interface InterviewContent {
    id: number;
    image: string;
    title: string;
    paragraphs: string[];
    imageOrder?: 'left' | 'right';
    gridCols?: 'lg:grid-cols-5' | 'lg:grid-cols-2';
    imageAspect?: 'aspect-[9/7]' | 'aspect-[9/8]';
    contentPadding?: string;
}

interface NavigationProfile {
    id: number;
    image: string;
    name: string;
    position: string;
}

const interviewContent: InterviewContent[] = [
    {
        id: 1,
        image: serviceImg1,
        title: "♦入社のきっかけと現在の仕事内容♦",
        paragraphs: [
            "私はこれまで、インターネット広告代理店やメーカーでのEC担当として、Webマーケティングに長く携わってきました。転職を考えたタイミングでは、子育てとの両立を重視し、保育園や自宅に近い職場を探していた中で、シンミドウと出会いました。勤務地が大宮であること、そして自身のこれまでのスキルを活かせる環境が整っていると感じ、入社を決めました。",
            "現在は、クライアント様のWeb広告の運用代行や、自社サイトの改善提案・実行を担当しています。これまでの経験を活かしながら、広告効果の最大化に取り組んでいます。"
        ],
        gridCols: 'lg:grid-cols-5',
        imageAspect: 'aspect-[9/7]'
    },
    {
        id: 2,
        image: serviceImg2,
        title: "♦入社のきっかけと現在の仕事内容♦",
        paragraphs: [
            "私はこれまで、インターネット広告代理店やメーカーでのEC担当として、Webマーケティングに長く携わってきました。転職を考えたタイミングでは、子育てとの両立を重視し、保育園や自宅に近い職場を探していた中で、シンミドウと出会いました。勤務地が大宮であること、そして自身のこれまでのスキルを活かせる環境が整っていると感じ、入社を決めました。",
            "現在は、クライアント様のWeb広告の運用代行や、自社サイトの改善提案・実行を担当しています。これまでの経験を活かしながら、広告効果の最大化に取り組んでいます。"
        ],
        imageOrder: 'right',
        gridCols: 'lg:grid-cols-2',
        imageAspect: 'aspect-[9/8]'
    },
    {
        id: 3,
        image: serviceImg3,
        title: "♦今後の目標と求職者へのメッセージ♦",
        paragraphs: [
            "現在は、1時間の時短勤務という形で働かせてもらっています。今後はこの環境の中で、自分なりの仕事と育児の両立スタイルを確立し、限られた時間でもしっかり会社に貢献できる存在になりたいと考えています。",
            "「仕事が好きだけど、家庭との両立に悩んでいる」そんな方にこそ、シンミドウを知ってほしいと思います。私自身も時短での転職でしたが、在宅勤務も柔軟に対応してくれるなど、働き方に理解のある会社です。選考を通じて、自分の希望やライフスタイルについて相談できる環境なので、ぜひ一歩を踏み出してみてください。"
        ],
        imageOrder: 'right',
        gridCols: 'lg:grid-cols-5',
        imageAspect: 'aspect-[9/7]',
        contentPadding: 'pt-20 lg:pt-50 lg:pb-50'
    }
];

const navigationProfiles: NavigationProfile[] = [
    {
        id: 1,
        image: interviewImg2,
        name: "仲世古 隆臣",
        position: "常務取締役"
    },
    {
        id: 2,
        image: interviewImg1,
        name: "赤井律子",
        position: "マーケティング"
    }
];

const InterviewContentSection = memo(({ content }: { content: InterviewContent }) => {
    const isImageRight = content.imageOrder === 'right';
    const gridCols = content.gridCols || 'lg:grid-cols-5';
    const imageAspect = content.imageAspect || 'aspect-[9/7]';
    const contentPadding = content.contentPadding || 'py-20 lg:py-50';

    return (
        <ScaleIn delay={content.id * 0.2} duration={0.8} className={`grid grid-cols-1 ${gridCols}`}>
            <div className={`${gridCols === 'lg:grid-cols-2' ? 'col-span-1' : 'col-span-2'} ${isImageRight ? 'lg:order-2' : ''}`}>
                <FadeIn delay={0.2} duration={0.6} className="w-full">
                    <img src={content.image} className={`w-full ${imageAspect}`} />
                </FadeIn>
            </div>

            <div className={`${gridCols === 'lg:grid-cols-2' ? 'col-span-1' : 'col-span-3'} ${isImageRight ? 'lg:order-1' : ''} flex flex-col justify-center gap-15 sx:gap-20 lg:gap-50 px-10 sx:px-20 lg:px-50 ${contentPadding}`}>
                <FadeIn delay={0.3} duration={0.6} className="text-16 sx:text-19 lg:text-30 text-center text-eightteenth font-500">
                    {content.title}
                </FadeIn>

                <div className="flex flex-col gap-5 lg:gap-30 px-20 lg:px-30 text-center">
                    {content.paragraphs.map((paragraph, index) => (
                        <FadeIn key={index} delay={0.4 + (index * 0.1)} duration={0.6} className="text-10 sx:text-12 lg:text-20 font-500">
                            {paragraph}
                        </FadeIn>
                    ))}
                </div>
            </div>
        </ScaleIn>
    );
});

const NavigationProfile = memo(({ profile, isLeft = false }: { profile: NavigationProfile, isLeft?: boolean }) => (
    <ScaleIn delay={isLeft ? 0.2 : 0.4} duration={0.8} className={`flex ${isLeft ? 'flex-col lg:flex-row' : 'flex-col lg:flex-row-reverse'} items-center gap-10 lg:gap-20`}>
        <div className="w-100 lg:w-150 h-100 lg:h-150 rounded-full overflow-hidden">
            <FadeIn delay={0.3} duration={0.6} className="w-full h-full">
                <img src={profile.image} className="w-full h-full object-cover" />
            </FadeIn>
        </div>

        <div className="flex flex-col items-center">
            <FadeIn delay={0.4} duration={0.6} className="text-15 sx:text-20 lg:text-30 text-black font-600">
                {profile.name}
            </FadeIn>
            <FadeIn delay={0.5} duration={0.6} className="text-10 sx:text-12 lg:text-18 text-black font-500">
                {profile.position}
            </FadeIn>
        </div>
    </ScaleIn>
));

const InterviewDetails = memo(() => {
    return (
        <Layouts className="gap-30 sx:gap-40 lg:gap-120 pb-30 sx:pb-40 lg:pb-120">
            <div className="flex flex-col gap-0 lg:gap-120">
                <HeaderSpacing className="relative w-full h-full flex items-center justify-center aspect-[2/1] select-none">
                    <BackgroundImage className="w-full h-full absolute top-0 left-0 pointer-events-none select-none">
                        <img src={interviewCover1} className="w-full h-full object-cover" />
                    </BackgroundImage>

                    <PageHeader delay={0.3} duration={0.8} className="relative flex flex-col gap-20 z-10 pb-20 sm:pb-30 lg:pb-40">
                        <FadeIn delay={0.5} duration={0.6} className="hidden lg:block max-w-1150 text-white text-18 sm:text-20 lg:text-60 font-500 text-center">
                            Webマーケティングの経験を活かして、育児もキャリアも両立できる働き方を実現
                        </FadeIn>

                        <FadeIn delay={0.7} duration={0.6} className="text-white text-18 sm:text-20 lg:text-60 font-500 text-center">
                            Interview
                        </FadeIn>
                    </PageHeader>
                </HeaderSpacing>

                <StaggerContainer className="flex flex-col-reverse lg:grid lg:grid-cols-7 lg:px-120">
                    <StaggerItem className="col-span-3 text-primary flex flex-col justify-end z-20">
                        <ScaleIn delay={0.3} duration={0.8} className="relative -top-30 lg:top-0 lg:-right-30 w-80% lg:w-full max-w-350 mx-auto lg:max-w-full flex flex-col gap-20 sx:gap-25 lg:gap-40 px-30 sx:px-40 lg:px-65 py-25 sx:py-35 lg:py-40 bg-black">
                            <div className="flex flex-col lg:flex-row flex-wrap justify-center lg:justify-between items-center gap-15 lg:gap-20 sx:gap-25 lg:gap-50">
                                <div className="flex flex-col gap-5 sx:gap-15 lg:gap-25">
                                    <FadeIn delay={0.4} duration={0.6} className="text-20 lg:text-20 font-500 text-seventeenth">
                                        2022年入社
                                    </FadeIn>

                                    <FadeIn delay={0.5} duration={0.6} className="text-20 lg:text-30 font-500">
                                        辻本 小春
                                    </FadeIn>

                                    <FadeIn delay={0.6} duration={0.6} className="text-12 lg:text-16 font-400">
                                        /マーケティング
                                    </FadeIn>
                                </div>

                                <FadeIn delay={0.7} duration={0.6} className="text-12 lg:text-30 font-400 text-eightteenth">
                                    TSUJIMOTO KOHARU
                                </FadeIn>
                            </div>

                            <FadeIn delay={0.8} duration={0.6} className="text-12 lg:text-25 font-500 text-center">
                                育児をしながらでも、時短や在宅など自分に合った働き方ができます。
                            </FadeIn>
                        </ScaleIn>
                    </StaggerItem>

                    <StaggerItem className="col-span-4 lg:pb-60 z-10">
                        <FadeIn delay={0.2} duration={0.6} className="relative lg:-left-30 w-full">
                            <img src={interviewHero1} className="w-full aspect-[7/4]" />
                        </FadeIn>
                    </StaggerItem>
                </StaggerContainer>
            </div>

            <StaggerContainer>
                <ComponentsSpacing2 className="flex flex-col gap-15 sx:gap-25 lg:gap-115">
                    {interviewContent.map((content) => (
                        <InterviewContentSection content={content} />
                    ))}
                </ComponentsSpacing2>
            </StaggerContainer>

            <FadeIn delay={0.3} duration={0.8} className="">
                <img src={interviewFooter} className="w-full aspect-[9/4] object-cover" />
            </FadeIn>

            <StaggerContainer >
                <ComponentsSpacing2 className="flex flex-col gap-15 sx:gap-20">
                    <StaggerItem>
                        <FadeIn delay={0.2} duration={0.6} className="flex lg:hidden flex-col items-center gap-10 cursor-pointer">
                            <div className="w-35 sx:w-45 h-35 sx:h-45 grid grid-cols-2 gap-1">
                                <div className="bg-black w-full h-full"></div>
                                <div className="bg-black w-full h-full"></div>
                                <div className="bg-black w-full h-full"></div>
                                <div className="bg-black w-full h-full"></div>
                            </div>
                            <div className="text-20 sx:text-25 text-black font-500">
                                Interview
                            </div>
                        </FadeIn>
                    </StaggerItem>

                    <StaggerItem className="flex flex-row justify-center items-center gap-30 sx:gap-45 lg:gap-90 px-20">
                        <div className="flex items-end lg:items-center justify-center gap-10 lg:gap-20">
                            {/* Left Navigation Arrow */}
                            <FadeIn delay={0.3} duration={0.6} className="cursor-pointer pb-10 lg:pb-0">
                                <img src={arrowPrev} className="w-20 lg:w-30 h-20 lg:h-30" />
                            </FadeIn>

                            {/* Left Profile Section */}
                            <NavigationProfile profile={navigationProfiles[0]} isLeft />
                        </div>

                        {/* Central Interview Section */}
                        <FadeIn delay={0.4} duration={0.6} className="hidden lg:flex flex-col items-center gap-10 cursor-pointer">
                            <div className="w-55 h-55 grid grid-cols-2 gap-1">
                                <div className="bg-black w-full h-full"></div>
                                <div className="bg-black w-full h-full"></div>
                                <div className="bg-black w-full h-full"></div>
                                <div className="bg-black w-full h-full"></div>
                            </div>
                            <div className="text-30 text-black font-500">
                                Interview
                            </div>
                        </FadeIn>

                        <div className="flex items-end lg:items-center justify-center gap-10 lg:gap-20">
                            {/* Right Profile Section */}
                            <NavigationProfile profile={navigationProfiles[1]} />

                            {/* Right Navigation Arrow */}
                            <FadeIn delay={0.5} duration={0.6} className="cursor-pointer pb-10 lg:pb-0">
                                <img src={arrowNext} className="w-20 lg:w-30 h-20 lg:h-30" />
                            </FadeIn>
                        </div>
                    </StaggerItem>
                </ComponentsSpacing2>
            </StaggerContainer>
        </Layouts>
    );
});

export default InterviewDetails;