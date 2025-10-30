import React, { memo } from "react";
import { BackgroundImage, FadeIn, HeaderSpacing, Layouts, SlideUp, StaggerContainer, StaggerItem, ScaleIn } from "../components";
import faqBackgroundImg from "../assets/image/faps/background.png";

// Mock data for FAQ sections
const faqData = [
    {
        id: "application-selection",
        title: "応募・選考について",
        backgroundColor: "bg-primary",
        questions: [
            {
                id: "selection-results",
                question: "選考結果の発表はどのようになりますか？",
                answer: "合否に関わらず、7営業日以内にメール、もしくはお電話にてご連絡をいたします。8営業日以上経過し連絡が来ていない場合、お手数ですが下記のメールアドレス宛にご連絡ください。 saiyou@sinmido.com"
            },
            {
                id: "selection-schedule",
                question: "選考スケジュールはどのようになっていますか？",
                answer: "まずは募集要項からエントリーしてください。次のステップへ進む場合は、メールまたはお電話にてご連絡させていただきます。ご応募いただいた方や各職種によって異なりますが、選考は概ね、2~4回程度の面接(各部門の担当者、人事担当者、役員)を経て決定します。"
            }
        ]
    },
    {
        id: "work",
        title: "仕事について",
        backgroundColor: "bg-fifth",
        questions: [
            {
                id: "mid-career-hiring",
                question: "中途採用はしていますか？",
                answer: "随時受付しております。詳しくは募集要項をご覧ください。"
            },
            {
                id: "career-plan",
                question: "キャリアプランについて教えてください",
                answer: "社員それぞれの特性や資格・経験に合わせて、弊社独自のキャリアプランを用意しています。詳しくは「働く環境」のページをご参照ください。"
            }
        ]
    },
    {
        id: "benefits",
        title: "福利厚生について",
        backgroundColor: "bg-primary",
        questions: [
            {
                id: "childcare-support",
                question: "育児や子育てのサポート制度はありますか？",
                answer: "産休・育休制度があります。男性社員の取得も可能です。"
            }
        ]
    }
];

const SectionHeader = memo(({ title, className = "" }: { title: string, className?: string }) => (
    <SlideUp delay={0} duration={0.7}
        className={`text-sixth text-15 sm:text-20 lg:text-40 font-600 text-center ${className}`}
    >
        {title}
    </SlideUp>
));

const FaqItem = memo(({ question, answer, index }: { question: string, answer: string, index: number }) => (
    <StaggerItem delay={index * 0.1} duration={0.8}>
        <div className="flex flex-col gap-10 lg:gap-20">
            <div className="flex gap-10 lg:gap-20 text-black">
                <FadeIn delay={0.2} duration={0.6} className="text-20 sx:text-24 lg:text-60 font-500 leading-none">Q.</FadeIn>
                <FadeIn delay={0.3} duration={0.6} className="flex-1 flex flex-col justify-end pt-5 sx:pt-10 lg:pt-20 text-10 sx:text-12 lg:text-30 font-500">
                    {question}
                </FadeIn>
            </div>

            <FadeIn delay={0.4} duration={0.6}>
                <div className="h-1 bg-black/50" />
            </FadeIn>

            <div className="flex gap-10 lg:gap-20 text-twentythird">
                <FadeIn delay={0.5} duration={0.6} className="text-20 sx:text-24 lg:text-60 font-500">A.</FadeIn>
                <FadeIn delay={0.6} duration={0.6} className="flex-1 flex flex-col justify-end pt-5 sx:pt-10 lg:pt-15 text-10 sx:text-12 lg:text-30 font-500">
                    {answer}
                </FadeIn>
            </div>
        </div>
    </StaggerItem>
));

const FaqSection = memo(({ section, sectionIndex }: { section: typeof faqData[0], sectionIndex: number }) => (
    <ScaleIn delay={sectionIndex * 0.2} duration={0.8}>
        <div className={`${section.backgroundColor}`}>
            <div className="max-w-1300 mx-auto px-20 lg:px-50 py-30 lg:py-50">
                <FadeIn delay={0.2} duration={0.6} className="text-20 sx:text-24 lg:text-48 font-600 pb-10 sx:pb-20 lg:pb-40">
                    {section.title}
                </FadeIn>

                <StaggerContainer className="flex flex-col px-20 sx:px-30 lg:px-50">
                    {section.questions.map((item, index) => (
                        <FaqItem
                            key={item.id}
                            question={item.question}
                            answer={item.answer}
                            index={index}
                        />
                    ))}
                </StaggerContainer>
            </div>
        </div>
    </ScaleIn>
));

const Faqs = () => {
    return (
        <Layouts>
            <HeaderSpacing className="relative w-full h-full flex items-center justify-center aspect-[2/1] lg:aspect-[19/6] select-none overflow-hidden">
                <BackgroundImage className="w-full h-full object-cover absolute top-0 left-0 pointer-events-none select-none">
                    <img src={faqBackgroundImg} className="w-full h-full object-cover" />
                </BackgroundImage>
                <div className="relative z-10 pb-20 sm:pb-30 lg:pb-40">
                    <FadeIn delay={0.5} duration={1} className="text-white text-18 sm:text-20 lg:text-60 font-600 text-center">
                        FAQ
                    </FadeIn>
                </div>
            </HeaderSpacing>

            <div className="flex flex-col pt-30 sx:pt-55 lg:pt-100 overflow-hidden">
                <SectionHeader className="w-full max-w-790 m-auto px-10" title="よくある質問" />

                <StaggerContainer className="flex flex-col">
                    {faqData.map((section, index) => (
                        <FaqSection key={section.id} section={section} sectionIndex={index} />
                    ))}
                </StaggerContainer>
            </div>
        </Layouts>
    )
}

export default Faqs;