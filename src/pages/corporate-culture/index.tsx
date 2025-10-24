import { Layouts } from "../../components/layouts/layouts";
import { ComponentsSpacing, HeaderSpacing } from "../../components/common/index";
import { FadeIn, SlideUp, ScaleIn, StaggerContainer, StaggerItem, PageHeader, BackgroundImage } from "../../components/animation/index";
import corporateCultureImage from "../../assets/image/corporate-culture/background.png";
import { useMemo } from 'react';

// TypeScript interfaces
interface TextGroup {
    texts: string[];
}

interface AboutTextGroup {
    texts: string[];
}

interface CompanyValue {
    title: string;
    description: string;
}

const companyValuesTexts: TextGroup[] = [
    {
        texts: [
            "シンミドウは、情報を共有し、プロとして気持ちのいい仕事をします。",
            "もしも何かが起こった時は、すぐに仲間と共有しチームプレイをします。"
        ]
    }, {
        texts: [
            "シンミドウは、仲間と同じ方向を向きながら創意工夫をし、成長します。",
            "一体感と士気を高める為にオープンな心を大切にし、誠実な言動をします。"
        ]
    }, {
        texts: [
            "シンミドウは、全ての人に対して分け隔てない応対をします。",
            "ヒトとヒトとを比べることは無意味であり、様々な意見や考えを大切にします。"
        ]
    }, {
        texts: [
            "シンミドウは、感情や上下に関係なく、仲間といい雰囲気づくりをします。",
            "ポジティブな言葉と行動により、仲間やお客様との信頼を築きます。"
        ]
    }, {
        texts: [
            "シンミドウは、言葉や形で分かりやすく伝え、そして実践します。",
            "机上の空論ではなく、実際に有言実行で成果を出します。"
        ]
    }, {
        texts: [
            "シンミドウは、どうすれば出来るかという方法を探すことにこだわります。",
            "無いモノを探すのではなく、有るモノから出来る方法を見出します。"
        ]
    }, {
        texts: [
            "シンミドウは、信じて任せることで相手の能力を引き出します。",
            "相手が答えを見つけることを助け、相手の課題を解決します。"
        ]
    }, {
        texts: [
            "シンミドウは、仲間や関係するヒトを大切にします。",
            "仲間や関係するヒトの成長・成功・幸せを心から喜びあいます。"
        ]
    }, {
        texts: [
            "シンミドウは、常に新しいことを学び続けます。",
            "お互いの学びを仲間と共有することで、シナジーを生み出します。"
        ]
    }, {
        texts: [
            "シンミドウは、当事者意識と自責の念を持ちます。",
            "自分には関係ないではなく、自分には何が出来るかを大切にします。"
        ]
    }, {
        texts: [
            "シンミドウは、常に考えうるベストの提案や支援を行います。",
            "関わる全てのヒトがお客様であることを理解します。"
        ]
    }, {
        texts: [
            "シンミドウは、チームとして成長し永続します。",
            "素晴らしい仲間と共に、お客様・知人や友人・家族に誇れる仕事をします。"
        ]
    }
]

const aboutTexts: AboutTextGroup[] = [
    {
        texts: [
            "世の中がモノであふれているこの時代。",
            "無駄をなくそうという動きが強くなっています。"
        ]
    }, {
        texts: [
            "社会にとって、本当に必要な",
            "モノやコトしか残らない『本物の時代』へ。"
        ]
    }, {
        texts: [
            "私たちはあったらいいなのサプリではなく、",
            "無いと困るモノ・コトを生み出すことに注力し、",
            "再現性を持たせ、地域の企業が成長することで、",
            "地域創生を実現します。"
        ]
    }, {
        texts: [
            "それが私たちの存在価値であり、存在意義です。"
        ]
    }
]

const companyValues: CompanyValue[] = [
    {
        title: "親身",
        description: "常に相手の立場になって考えた上でベストを尽くすこと"
    },
    {
        title: "真實",
        description: "常に自らの経験と責任を根拠に使命感を持って取り組むこと"
    },
    {
        title: "新観",
        description: "常に新しいモノの見方を意識し新たな価値観を創出すること"
    }
]

// Reusable Components
const SectionHeader = ({ title }: { title: string }) => (
    <PageHeader delay={0} duration={0.5} className="text-fourth/10 text-25 sm:text-30 lg:text-96 font-600 text-start">
        {title}
    </PageHeader>
);

const CompanyValueCard = ({ title, description }: CompanyValue) => (
    <ScaleIn className="max-w-90% md:max-w-full flex flex-row mx-auto">
        <div className="px-15 lg:px-20 py-25 lg:py-50 bg-secondary rounded-l-5 lg:rounded-l-8 flex flex-col items-center justify-center">
            {title.split('').map((char, idx) => (
                <FadeIn key={idx} delay={idx * 0.1} duration={0.6} className="text-center text-primary text-25 lg:text-40 font-500 leading-tight">
                    {char}
                </FadeIn>
            ))}
        </div>

        <div className="flex-1 flex items-center justify-center bg-fifth border-fourth border border-l-0 border-fifth rounded-r-5 lg:rounded-r-8 flex flex-col px-30 py-25 h-full align-center">
            <SlideUp delay={0.3} duration={0.8} className="text-black text-center text-12 lg:text-24">
                {description}
            </SlideUp>
        </div>
    </ScaleIn>
);

const ValueStatementCard = ({ texts, index }: { texts: string[]; index: number }) => (
    <SlideUp delay={index * 0.1} duration={0.8} className="flex flex-row items-center gap-20 lg:gap-30 py-20 lg:py-30 border-b border-black">
        <FadeIn delay={0.2} duration={0.6} className="text-20 lg:text-30 text-secondary">
            {index + 1}.
        </FadeIn>
        <div className="flex flex-col gap-8 lg:gap-15 text-black">
            {texts.map((line, i) => (
                <FadeIn key={i} delay={0.4 + (i * 0.1)} duration={0.6} className="text-10 lg:text-20">
                    {line}
                </FadeIn>
            ))}
        </div>
    </SlideUp>
);

const AboutSectionCard = ({ texts, index, isLast }: { texts: string[]; index: number; isLast: boolean }) => (
    <ScaleIn delay={index * 0.2} duration={0.8} className="relative flex flex-col items-center w-full group">
        <div className="flex min-h-140 lg:min-h-200 bg-secondary group-hover:bg-secondary/80 px-20 py-20 lg:px-30 lg:py-25 w-full cursor-pointer transition-colors duration-200 flex flex-col justify-center items-center h-full">
            <div className="text-white text-12 lg:text-20 leading-relaxed transition-colors duration-200 flex flex-col justify-center h-full">
                {texts.map((line, lineIndex) => (
                    <FadeIn key={lineIndex} delay={0.3 + (lineIndex * 0.1)} duration={0.6}>
                        {line}
                    </FadeIn>
                ))}
            </div>
        </div>

        {index !== 0 && (
            <div className="absolute w-0 h-0 left-1/2 -translate-x-1/2 border-l-30 lg:border-l-45 border-transparent border-r-30 lg:border-r-45 border-t-15 lg:border-t-20 border-t-fifth" />
        )}

        {!isLast && (
            <div className="absolute w-0 h-0 -bottom-15 lg:-bottom-20 left-1/2 -translate-x-1/2 border-l-30 lg:border-l-40 border-transparent border-r-30 lg:border-r-40 border-t-15 lg:border-t-20 group-hover:border-t-secondary/80 transition-colors duration-200 border-t-secondary" />
        )}
    </ScaleIn>
);

const CorporateCulture = () => {
    // Memoized components for better performance
    const memoizedCompanyValues = useMemo(() =>
        companyValues.map((value, index) => (
            <CompanyValueCard key={index} {...value} />
        )), []
    );

    const memoizedValueStatements = useMemo(() =>
        companyValuesTexts.map((value, index) => (
            <ValueStatementCard key={index} texts={value.texts} index={index} />
        )), []
    );

    const memoizedAboutCards = useMemo(() =>
        aboutTexts.map((textGroup, index) => (
            <AboutSectionCard
                key={index}
                texts={textGroup.texts}
                index={index}
                isLast={index === aboutTexts.length - 1}
            />
        )), []
    );

    return (
        <Layouts>
            <HeaderSpacing className="relative w-full h-full flex items-center justify-center aspect-[5/2] lg:aspect-[9/2] select-none">
                <BackgroundImage className="w-full h-full object-cover absolute top-0 left-0 pointer-events-none select-none">
                    <img src={corporateCultureImage} className="w-full h-full object-cover" />
                </BackgroundImage>
                <div className="relative z-10 pb-20 sm:pb-30 lg:pb-40">
                    <FadeIn delay={0.5} duration={1} className="text-white text-18 sm:text-20 lg:text-60 font-600 text-center">
                        企業理念
                    </FadeIn>
                </div>
            </HeaderSpacing>

            <ComponentsSpacing className="flex flex-col gap-20 sm:gap-25 lg:gap-60">
                <SectionHeader title="Our Identity" />

                <SlideUp delay={0.3} duration={0.8} className="text-fourth text-15 sm:text-16 lg:text-40 text-center font-600">
                    ３つのシンミで、ひとつのSinmido
                </SlideUp>
                <StaggerContainer className="max-w-90% mx-auto flex flex-col gap-10 lg:gap-20 text-12 lg:text-20 text-black">
                    <StaggerItem>
                        <FadeIn delay={0.2} duration={0.6}>Sinmido の「シンミ」には、3つの意味があります。</FadeIn>
                    </StaggerItem>
                    <StaggerItem>
                        <FadeIn delay={0.3} duration={0.6}>私たちらしさをあらわすキーワードであり、経営理念でもある 3 つのシンミ。</FadeIn>
                    </StaggerItem>
                    <StaggerItem>
                        <FadeIn delay={0.4} duration={0.6}>それを、社員一人ひとりの個性と人間力をもって実現します。</FadeIn>
                    </StaggerItem>
                </StaggerContainer>
                <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-20 lg:gap-50">
                    {memoizedCompanyValues}
                </StaggerContainer>
            </ComponentsSpacing>

            <ComponentsSpacing className="flex flex-col gap-20 sm:gap-25 lg:gap-60 bg-fifth">
                <SectionHeader title="Retono" />
                <SlideUp delay={0.3} duration={0.8} className="text-fourth text-15 sm:text-16 lg:text-40 text-center font-600">
                    シンミドウの価値基準
                </SlideUp>
                <StaggerContainer className="max-w-90% mx-auto flex flex-col gap-10 lg:gap-20 text-black">
                    <StaggerItem>
                        <FadeIn delay={0.2} duration={0.6} className="text-12 lg:text-20">Retono(レトノ)とは、ラテン語で「響く・反響する」を意味する言葉です。</FadeIn>
                    </StaggerItem>
                    <StaggerItem>
                        <FadeIn delay={0.3} duration={0.6} className="text-12 lg:text-20">多くの言語の語源となったラテン語にちなみ、</FadeIn>
                    </StaggerItem>
                    <StaggerItem>
                        <FadeIn delay={0.4} duration={0.6} className="text-12 lg:text-20">Sinmido の根底に響いている「価値の基準」として、12 のレトノを掲げています。</FadeIn>
                    </StaggerItem>
                    <StaggerItem>
                        <FadeIn delay={0.5} duration={0.6} className="text-12 lg:text-20">あらゆる場面において、私たちの思考や判断の基準となっています。</FadeIn>
                    </StaggerItem>
                </StaggerContainer>
                <StaggerContainer className="max-w-90% mx-auto">
                    {memoizedValueStatements}
                </StaggerContainer>
            </ComponentsSpacing>

            <ComponentsSpacing className="flex flex-col gap-20 sm:gap-25 lg:gap-60 bg-primary">
                <SectionHeader title="Our Vision" />
                <SlideUp delay={0.3} duration={0.8} className="text-fourth text-15 sm:text-16 lg:text-40 text-center font-600">
                    採用・育成と業界特化でワクワクする地域をつくる
                </SlideUp>
                <StaggerContainer className="max-w-90% mx-auto flex flex-col gap-10 lg:gap-20 text-black">
                    <StaggerItem>
                        <FadeIn delay={0.2} duration={0.6} className="text-12 lg:text-20">ヒトと組織の可能性を、拡げ、高める。</FadeIn>
                    </StaggerItem>
                    <StaggerItem>
                        <FadeIn delay={0.3} duration={0.6} className="text-12 lg:text-20">そして、そこに再現性を持たせること。</FadeIn>
                    </StaggerItem>
                    <StaggerItem>
                        <FadeIn delay={0.4} duration={0.6} className="text-12 lg:text-20">それが私たちのビジョンです。</FadeIn>
                    </StaggerItem>
                    <StaggerItem>
                        <FadeIn delay={0.5} duration={0.6} className="text-12 lg:text-20">私たちがいることで、学生や、組織にいるヒトの可能性が拡がる。</FadeIn>
                    </StaggerItem>
                    <StaggerItem>
                        <FadeIn delay={0.6} duration={0.6} className="text-12 lg:text-20">私たちが関わることで、組織の強みや、成長の可能性が高まる。</FadeIn>
                    </StaggerItem>
                    <StaggerItem>
                        <FadeIn delay={0.7} duration={0.6} className="text-12 lg:text-20">そういう存在であることを目指しています。</FadeIn>
                    </StaggerItem>
                    <StaggerItem>
                        <FadeIn delay={0.8} duration={0.6} className="text-12 lg:text-20">それを具体的に行う手段が、</FadeIn>
                    </StaggerItem>
                    <StaggerItem>
                        <FadeIn delay={0.9} duration={0.6} className="text-12 lg:text-20">採用・育成の支援や、地域や業界に特化した支援であり、</FadeIn>
                    </StaggerItem>
                    <StaggerItem>
                        <FadeIn delay={1.0} duration={0.6} className="text-12 lg:text-20">そこに再現性を持たせることが、</FadeIn>
                    </StaggerItem>
                    <StaggerItem>
                        <FadeIn delay={1.1} duration={0.6} className="text-12 lg:text-20">私たちの存在価値であり存在意義であると考えています。</FadeIn>
                    </StaggerItem>
                </StaggerContainer>
            </ComponentsSpacing>

            <ComponentsSpacing className="flex flex-col gap-20 sm:gap-25 lg:gap-60 bg-fifth">
                <SectionHeader title="About Sinmido" />
                <SlideUp delay={0.3} duration={0.8} className="max-w-200 md:max-w-100% mx-auto text-fourth text-15 sm:text-16 lg:text-40 text-center font-600">
                    地域を、社会を、企業を、未来を豊かにする。
                </SlideUp>
                <StaggerContainer className="w-full sm:max-w-95% lg:max-w-900 mx-auto flex flex-col items-center gap-15 lg:gap-20">
                    {memoizedAboutCards}
                </StaggerContainer>
            </ComponentsSpacing>
        </Layouts>
    );
};

export default CorporateCulture;