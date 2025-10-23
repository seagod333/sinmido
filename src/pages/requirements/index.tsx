import { BackgroundImage, PageHeader, SlideUp } from "../../components/animation";
import { ComponentsSpacing, HeaderSpacing, Layouts } from "../../components/layouts/layouts";
import appRequirementsBgImg from "../../assets/image/requirements/background.png";
import eventImg1 from "../../assets/image/requirements/event-1.png";
import eventImg2 from "../../assets/image/requirements/event-2.png";
import entryImg from "../../assets/image/requirements/entry.png";
import React from "react";

const selectionProgressDatas = [
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
]

const ComponentsHeader = ({ title, className = "" }: { title: string, className?: string }) => {
    return (
        <SlideUp
            className={`text-sixth text-18 sm:text-20 lg:text-50 font-600 text-center ${className}`}
            delay={0}
            duration={0.7}
        >
            {title}
        </SlideUp>
    )
}

const AppRequirements = () => {
    return (
        <Layouts>
            <HeaderSpacing className="relative w-full h-full flex items-center justify-center aspect-[5/2] select-none">
                <BackgroundImage className="w-full h-full absolute top-0 left-0 pointer-events-none select-none">
                    <img src={appRequirementsBgImg} className="w-full h-full object-cover" />
                </BackgroundImage>

                <PageHeader className="relative flex flex-col z-10 pb-20 sm:pb-30 lg:pb-40">
                    <div className="hidden lg:block max-w-1150 text-white text-18 sm:text-20 lg:text-60 font-500 text-center">
                        募集要項
                    </div>
                </PageHeader>
            </HeaderSpacing>

            <ComponentsSpacing className="flex flex-col gap-30 sx:gap-40 lg:gap-80">
                <ComponentsHeader title="募集内容" />

                <div className="flex flex-col gap-5 lg:gap-20">
                    <div className="text-10 sx:text-12 lg:text-20 text-center">
                        私たちは、個性やパーソナリティを重視した採用を行っています。
                    </div>

                    <div className="text-10 sx:text-12 lg:text-20 text-center">
                        会社説明会や選考を通じて、当社の理念や業務内容をご理解いただけるよう丁寧にご案内いたします。
                    </div>

                    <div className="text-10 sx:text-12 lg:text-20 text-center">
                        選考はエントリーシート不要で、筆記・適性検査および面接を実施します。
                    </div>

                    <div className="text-10 sx:text-12 lg:text-20 text-center">
                        内々定まではおおよそ1か月半程度を予定しています。
                    </div>

                    <div className="text-10 sx:text-12 lg:text-20 text-center">
                        募集対象は大学・大学院・短大・専門学校・既卒の方まで幅広く、学部・学科は問いません。
                    </div>

                    <div className="text-10 sx:text-12 lg:text-20 text-center">
                        多様なバックグラウンドを持つ先輩たちが活躍しており、これまでの経験を活かせる環境です。
                    </div>

                    <div className="text-10 sx:text-12 lg:text-20 text-center">
                        採用人数は6〜10名を予定しており、総合職・エリア限定職の募集があります（転居を伴う転勤なし）。
                    </div>
                </div>
            </ComponentsSpacing>

            <div className="flex flex-col gap-25 lg:gap-150 bg-fifth px-20 lg:px-85 py-35 lg:py-130">
                <ComponentsHeader title="イベント情報" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-30 lg:gap-20">
                    <div className="flex flex-col gap-25 sx:gap-50 lg:gap-80 py-15 lg:py-40 px-20 sx:px-30 lg:px-40 bg-twentyth">
                        <div className="text-15 sx:text-20 lg:text-34 text-center text-primary">
                            パート・アルバイト・業務委託
                        </div>


                        <div className="flex flex-col gap-20 sx:gap-25 lg:gap-0">
                            {([1, 2, 3, 4, 5]).map((key: number) => (
                                <div key={key} className="grid grid-cols-1 lg:grid-cols-8 gap-0 lg:gap-45 py-0 lg:py-35 lg:px-20 border-b border-primary">
                                    <div className="col-span-3 flex flex-col justify-center">
                                        <img src={eventImg1} className="w-full aspect-square cursor-pointer" />
                                    </div>

                                    <div className="col-span-5 flex flex-col justify-between gap-10 sx:gap-15 lg:gap-25 px-15 lg:px-10 py-15 lg:py-10">
                                        <div className="text-12 lg:text-24 text-primary">
                                            デジタルマーケター（広告運用担当）
                                        </div>

                                        <div className="flex">
                                            <div className="bg-primary px-25 lg:px-25 py-10 lg:py-15 text-12 lg:text-24 text-twentyth cursor-pointer">
                                                埼玉本社
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-5">
                                            <div className="text-12 lg:text-24 text-primary">
                                                ■週3日〜OK！■1日4時間～OK！
                                            </div>

                                            <div className="text-12 lg:text-24 text-primary">
                                                ■在宅勤務OK！
                                            </div>

                                            <div className="text-12 lg:text-24 text-primary">
                                                時給 1,100円〜1,300円
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-25 sx:gap-50 lg:gap-80 py-15 lg:py-40 px-20 sx:px-30 lg:px-40 bg-twentysecond">
                        <div className="text-15 sx:text-20 lg:text-34 text-center text-primary">
                            正社員
                        </div>


                        <div className="flex flex-col gap-20 sx:gap-25 lg:gap-0">
                            {([1, 2, 3, 4, 5]).map((key: number) => (
                                <div key={key} className="flex flex-col-reverse lg:grid lg:grid-cols-8 gap-0 lg:gap-45 py-0 lg:py-35 lg:px-20 border-b border-primary">
                                    <div className="col-span-5 flex flex-col justify-between gap-10 sx:gap-15 lg:gap-25 px-15 lg:px-10 py-15 lg:py-10">
                                        <div className="text-12 lg:text-24 text-primary">
                                            デジタルマーケター（広告運用担当）
                                        </div>

                                        <div className="flex">
                                            <div className="bg-primary px-25 lg:px-25 py-10 lg:py-15 text-12 lg:text-24 text-twentyth cursor-pointer">
                                                埼玉本社
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-5">
                                            <div className="text-12 lg:text-24 text-primary">
                                                ■転勤なし！■週休2日制！
                                            </div>

                                            <div className="text-12 lg:text-24 text-primary">
                                                ■賞与年2回！
                                            </div>

                                            <div className="text-12 lg:text-24 text-primary">
                                                月給 250,000円〜450,000円
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-3 flex flex-col justify-center">
                                        <img src={eventImg2} className="w-full aspect-square cursor-pointer" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-25 lg:gap-120 px-20 sx:px-40 lg:px-100 py-30 sx:py-50 lg:py-220">
                <ComponentsHeader title="選考フロ" />

                <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
                    {selectionProgressDatas.map((item, index) => (
                        <div key={index} className={`relative`} style={{ backgroundColor: item.bgColor }}>
                            <div className="relative top-15 lg:top-0 lg:left-13 w-full aspect-[9/4] lg:aspect-[2/5] max-h-300 lg:max-h-450 px-20 py-15 flex flex-col items-center justify-center">
                                <div className="text-white text-12 lg:text-30 font-500">
                                    {item.title}
                                </div>

                                {item.subTitle && (
                                    <div className="text-white text-12 lg:text-30 font-500">
                                        {item.subTitle}
                                    </div>
                                )}
                            </div>

                            {selectionProgressDatas.length - 1 !== index && (
                                <React.Fragment>
                                    <div className="hidden lg:block absolute top-0 -right-24 w-25 h-full z-30" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)", backgroundColor: item.bgColor }} />

                                    <div className="block lg:hidden absolute -bottom-14 left-0 w-full h-15 z-30" style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)", backgroundColor: item.bgColor }} />
                                </React.Fragment>
                            )}

                            {index !== 0 && (
                                <React.Fragment>
                                    <div className="hidden lg:block absolute top-0 -left-1 w-25 h-full bg-primary z-20" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }} />

                                    <div className="block lg:hidden absolute -top-1 left-0 w-full h-16 bg-primary z-20" style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)" }} />
                                </React.Fragment>
                            )}

                            {/* {index !== 0 && (
                                <div className="absolute top-0 right-[-25px] w-25 h-full z-20" style={{ clipPath: "polygon(50% 100%, 0 0, 100% 0)", borderLeftColor: item.bgColor }} />
                            )} */}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col">
                <img src={entryImg} className="w-full aspect-[9/4]" />
            </div>
        </Layouts>
    )
}

export default AppRequirements;