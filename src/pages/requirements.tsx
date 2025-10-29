import React, { memo } from "react";
import { Layouts } from "../components/layouts/layouts";
import { BackgroundImage, PageHeader, SlideUp, FadeIn, StaggerContainer, ScaleIn } from "../components/animation";
import { ComponentsSpacing, HeaderSpacing } from "../components/common/index";
import appRequirementsBgImg from "../assets/image/requirements/background.png";
import eventImg1 from "../assets/image/requirements/event-1.png";
import eventImg2 from "../assets/image/requirements/event-2.png";
import entryImg from "../assets/image/requirements/entry.png";

interface SelectionProgress {
    title: string;
    subTitle: string;
    bgColor: string;
}

interface JobPosition {
    id: number;
    title: string;
    location: string;
    benefits: string[];
    salary: string;
    image: string;
    isPartTime?: boolean;
}

interface RecruitmentContent {
    text: string;
}

const selectionProgressDatas: SelectionProgress[] = [
    {
        title: "マイナビより",
        subTitle: "エントリー",
        bgColor: "#27B2D9"
    }, {
        title: "会社説明会",
        subTitle: "WEBにて実施",
        bgColor: "#1793C0"
    }, {
        title: "一次面接",
        subTitle: "（Web/対面）",
        bgColor: "#2788CD"
    }, {
        title: "実務体験",
        subTitle: "（対面）",
        bgColor: "#1A76B8"
    }, {
        title: "最終面接",
        subTitle: "（対面）",
        bgColor: "#1A76B8"
    }, {
        title: "内々定",
        subTitle: "",
        bgColor: "#0A5A93"
    }
];

const recruitmentContent: RecruitmentContent[] = [
    { text: "私たちは、個性やパーソナリティを重視した採用を行っています。" },
    { text: "会社説明会や選考を通じて、当社の理念や業務内容をご理解いただけるよう丁寧にご案内いたします。" },
    { text: "選考はエントリーシート不要で、筆記・適性検査および面接を実施します。" },
    { text: "内々定まではおおよそ1か月半程度を予定しています。" },
    { text: "募集対象は大学・大学院・短大・専門学校・既卒の方まで幅広く、学部・学科は問いません。" },
    { text: "多様なバックグラウンドを持つ先輩たちが活躍しており、これまでの経験を活かせる環境です。" },
    { text: "採用人数は6〜10名を予定しており、総合職・エリア限定職の募集があります（転居を伴う転勤なし）。" }
];

const partTimePositions: JobPosition[] = [
    {
        id: 1,
        title: "デジタルマーケター（広告運用担当）",
        location: "埼玉本社",
        benefits: ["■週3日〜OK！■1日4時間～OK！", "■在宅勤務OK！"],
        salary: "時給 1,100円〜1,300円",
        image: eventImg1,
        isPartTime: true
    }
];

const fullTimePositions: JobPosition[] = [
    {
        id: 1,
        title: "デジタルマーケター（広告運用担当）",
        location: "埼玉本社",
        benefits: ["■転勤なし！■週休2日制！", "■賞与年2回！"],
        salary: "月給 250,000円〜450,000円",
        image: eventImg2,
        isPartTime: false
    }
];

const ComponentsHeader = memo(({ title, className = "" }: { title: string, className?: string }) => {
    return (
        <SlideUp delay={0} duration={0.7}
            className={`text-sixth text-18 sm:text-20 lg:text-50 font-600 text-center ${className}`}
        >
            {title}
        </SlideUp>
    );
});

const RecruitmentContentItem = memo(({ content, index }: { content: RecruitmentContent, index: number }) => (
    <FadeIn delay={index * 0.1} duration={0.6} className="text-10 sx:text-12 lg:text-20 text-center">
        {content.text}
    </FadeIn>
));

const JobPositionCard = memo(({ position, isPartTime, index }: { position: JobPosition, isPartTime: boolean, index: number }) => (
    <ScaleIn delay={index * 0.1} duration={0.8} className="grid grid-cols-1 lg:grid-cols-8 gap-0 lg:gap-45 py-0 lg:py-35 lg:px-20 border-b border-primary">
        {isPartTime ? (
            <>
                <div className="col-span-3 flex flex-col justify-center">
                    <FadeIn delay={0.2} duration={0.6} className="w-full">
                        <img src={position.image} className="w-full aspect-square cursor-pointer" />
                    </FadeIn>
                </div>
                <div className="col-span-5 flex flex-col justify-between gap-10 sx:gap-15 lg:gap-25 px-15 lg:px-10 py-15 lg:py-10">
                    <FadeIn delay={0.3} duration={0.6} className="text-12 lg:text-24 text-primary">
                        {position.title}
                    </FadeIn>
                    <div className="flex">
                        <FadeIn delay={0.4} duration={0.6} className="bg-primary px-25 lg:px-25 py-10 lg:py-15 text-12 lg:text-24 text-twentyth cursor-pointer">
                            {position.location}
                        </FadeIn>
                    </div>
                    <div className="flex flex-col gap-5">
                        {position.benefits.map((benefit, benefitIndex) => (
                            <FadeIn key={benefitIndex} delay={0.5 + (benefitIndex * 0.1)} duration={0.6} className="text-12 lg:text-24 text-primary">
                                {benefit}
                            </FadeIn>
                        ))}
                        <FadeIn delay={0.6} duration={0.6} className="text-12 lg:text-24 text-primary">
                            {position.salary}
                        </FadeIn>
                    </div>
                </div>
            </>
        ) : (
            <>
                <div className="col-span-5 flex flex-col justify-between gap-10 sx:gap-15 lg:gap-25 px-15 lg:px-10 py-15 lg:py-10">
                    <FadeIn delay={0.2} duration={0.6} className="text-12 lg:text-24 text-primary">
                        {position.title}
                    </FadeIn>
                    <div className="flex">
                        <FadeIn delay={0.3} duration={0.6} className="bg-primary px-25 lg:px-25 py-10 lg:py-15 text-12 lg:text-24 text-twentyth cursor-pointer">
                            {position.location}
                        </FadeIn>
                    </div>
                    <div className="flex flex-col gap-5">
                        {position.benefits.map((benefit, benefitIndex) => (
                            <FadeIn key={benefitIndex} delay={0.4 + (benefitIndex * 0.1)} duration={0.6} className="text-12 lg:text-24 text-primary">
                                {benefit}
                            </FadeIn>
                        ))}
                        <FadeIn delay={0.5} duration={0.6} className="text-12 lg:text-24 text-primary">
                            {position.salary}
                        </FadeIn>
                    </div>
                </div>
                <div className="col-span-3 flex flex-col justify-center">
                    <FadeIn delay={0.6} duration={0.6} className="w-full">
                        <img src={position.image} className="w-full aspect-square cursor-pointer" />
                    </FadeIn>
                </div>
            </>
        )}
    </ScaleIn>
));

const SelectionProgressItem = memo(({ item, index }: { item: SelectionProgress, index: number }) => (
    <div className="relative" style={{ backgroundColor: item.bgColor }}>
        <div className="relative top-15 lg:top-0 lg:left-13 w-full aspect-[9/4] lg:aspect-[2/5] max-h-300 lg:max-h-450 px-20 py-15 flex flex-col items-center justify-center">
            <FadeIn delay={0.2} duration={0.6} className="text-white text-12 lg:text-30 font-500">
                {item.title}
            </FadeIn>
            {item.subTitle && (
                <FadeIn delay={0.3} duration={0.6} className="text-white text-12 lg:text-30 font-500">
                    {item.subTitle}
                </FadeIn>
            )}
        </div>

        {selectionProgressDatas.length - 1 !== index && (
            <>
                <div className="hidden lg:block absolute top-0 -right-24 w-25 h-full z-30" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)", backgroundColor: item.bgColor }} />
                <div className="block lg:hidden absolute -bottom-14 left-0 w-full h-15 z-30" style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)", backgroundColor: item.bgColor }} />
            </>
        )}

        {index !== 0 && (
            <>
                <div className="hidden lg:block absolute top-0 -left-1 w-25 h-full bg-primary z-20" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }} />
                <div className="block lg:hidden absolute -top-1 left-0 w-full h-16 bg-primary z-20" style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }} />
            </>
        )}
    </div>
));

const AppRequirements = memo(() => {
    return (
        <Layouts>
            <HeaderSpacing className="relative w-full h-full flex items-center justify-center aspect-[5/2] select-none">
                <BackgroundImage className="w-full h-full absolute top-0 left-0 pointer-events-none select-none">
                    <img src={appRequirementsBgImg} className="w-full h-full object-cover" />
                </BackgroundImage>

                <PageHeader delay={0.5} duration={1} className="relative flex flex-col z-10 pb-20 sm:pb-30 lg:pb-40">
                    <FadeIn delay={0.7} duration={0.8} className="hidden lg:block max-w-1150 text-white text-18 sm:text-20 lg:text-60 font-500 text-center">
                        募集要項
                    </FadeIn>
                </PageHeader>
            </HeaderSpacing>

            <ComponentsSpacing className="flex flex-col gap-30 sx:gap-40 lg:gap-80">
                <ComponentsHeader title="募集内容" />

                <StaggerContainer className="flex flex-col gap-5 lg:gap-20">
                    {recruitmentContent.map((content, index) => (
                        <RecruitmentContentItem key={index} content={content} index={index} />
                    ))}
                </StaggerContainer>
            </ComponentsSpacing>

            <div className="flex flex-col gap-25 lg:gap-150 bg-fifth px-20 lg:px-85 py-35 lg:py-130">
                <ComponentsHeader title="イベント情報" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-30 lg:gap-20">
                    <div className="flex flex-col gap-25 sx:gap-50 lg:gap-80 py-15 lg:py-40 px-20 sx:px-30 lg:px-40 bg-twentyth">
                        <FadeIn delay={0.2} duration={0.6} className="text-15 sx:text-20 lg:text-34 text-center text-primary">
                            パート・アルバイト・業務委託
                        </FadeIn>

                        <div className="flex flex-col gap-20 sx:gap-25 lg:gap-0">
                            {([1, 2, 3, 4, 5]).map((key: number) => (
                                <JobPositionCard key={key} position={partTimePositions[0]} isPartTime={true} index={key} />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-25 sx:gap-50 lg:gap-80 py-15 lg:py-40 px-20 sx:px-30 lg:px-40 bg-twentysecond">
                        <FadeIn delay={0.3} duration={0.6} className="text-15 sx:text-20 lg:text-34 text-center text-primary">
                            正社員
                        </FadeIn>

                        <div className="flex flex-col gap-20 sx:gap-25 lg:gap-0">
                            {([1, 2, 3, 4, 5]).map((key: number) => (
                                <JobPositionCard key={key} position={fullTimePositions[0]} isPartTime={false} index={key} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-25 lg:gap-120 px-20 sx:px-40 lg:px-100 py-30 sx:py-50 lg:py-220">
                <ComponentsHeader title="選考フロ" />

                <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
                    {selectionProgressDatas.map((item, index) => (
                        <SelectionProgressItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>

            <FadeIn delay={0.3} duration={0.8} className="flex flex-col">
                <img src={entryImg} className="w-full aspect-[9/4]" />
            </FadeIn>
        </Layouts>
    );
});

export default AppRequirements;