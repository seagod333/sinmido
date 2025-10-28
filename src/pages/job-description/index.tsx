import { memo } from "react";
import { BackgroundImage, FadeIn, HeaderSpacing, Layouts, SlideUp, StaggerContainer, StaggerItem, ScaleIn } from "../../components";
import jobDescriptionImage from "../../assets/image/job-desc/background.png";
import hattendoLogo from "../../assets/image/job-desc/hattendo-logo.png";
import shinshowaLogo from "../../assets/image/job-desc/shinshowa-logo.png";

interface JobDescriptionData {
    id: number;
    title: string;
    description: string;
    content: string[];
}

interface CaseStudyData {
    id: number;
    fileNumber: string;
    companyName: string;
    logo: string;
    description: string;
    issue: string;
    solution: string;
}

const jobDescriptionData: JobDescriptionData[] = [
    {
        id: 1,
        title: "採用・育成",
        description: "地域社会に新しい繋がりや関わりを生み出す。",
        content: [
            "新卒採用には、企業と人材の出逢いを創出するだけでなく、採用活動を通してヒトや企業の考え方や在り方を変える、そんなチカラがあります。",
            "400社以上の採用支援・経営コンサルティング実績を持つシンミドウだからできる、新卒採用ブランディングで御社に合った採用活動をプロデュースします。",
        ]
    },
    {
        id: 2,
        title: "DX/DA",
        description: "デジタル分野で地域企業を多角的にサポート。",
        content: [
            "私たちは長年の住宅業界での経験を通じて、情報格差やノウハウの共有不足などの問題を目の当たりにしてきました。今後は業界全体が情報をフラットかつオープンに共有し、多様な企業と連携できる環境を作ることが重要です。弊社は「新しい価値観の創出」を理念に、業界をつなぐプラットフォームを構築し、関わる人々が幸せになれる方法を提案・実現していきます。"
        ]
    },
    {
        id: 3,
        title: "地域創生",
        description: "地域企業の採用活動と人材育成に、新たな価値を。",
        content: [
            "地方地域において、人口減少・人手不足は深刻な問題です。そうした地域によい雇用を生み出すため、自治体や地域の中核企業を協力した活動を行います。",
            "地域特性を理解し、地域に根差した活動を行うことで、地域に新たな繋がりや関わりを生み出します。"
        ]
    },
]

const caseStudiesData: CaseStudyData[] = [
    {
        id: 1,
        fileNumber: "FILE. 1",
        companyName: "株式会社八天堂様",
        logo: hattendoLogo,
        description: "1933年に広島県三原市で創業した製菓会社。冷やして食べる「クリームパン」を専門とし、「八天堂にしか作れない、他では作れない」をモットーに、お菓子専門店として「スイーツパン土産」というジャンルを確立し、全国で人気を博し海外展開も行っています。また、カフェとアトリエを組み合わせた「八天堂カフェリエ」として、参加体験型店舗を展開しています。",
        issue: "事業拡大の中での品質レベル維持\n生産量の増加に伴い、高い品質を維持する必要があり、事業拡大により中核人材の不足が課題となっていました。",
        solution: "徹底した生産・品質管理と採用・教育に力を入れ、ブランド力と人材育成で独自性のある企業を目指しました。生産・品質管理体制を構築し、国際規格ISO9001を取得。毎年新卒採用を行い、教育制度を充実させて中核人材を社内で育成しています。\nその結果、「スイーツパン」という新カテゴリーを創出し、独自のブランドを構築。地域や業界の目標となる「人づくり」を実践する人材育成企業へと成長しました。"
    },
    {
        id: 2,
        fileNumber: "FILE. 2",
        companyName: "株式会社新昭和 様",
        logo: shinshowaLogo,
        description: "「すべてはお客様のために」をテーマに、創業以来快適な住まいづくり・街づくりを担ってきた住宅会社。 フランチャイズとしてクレバリーホームを全国に展開。社会の持続可能性にも着目し、太陽光発電システムなどの再生可能エネルギーの設計・施工、その他農業や宿泊・飲食など幅広い事業領域を持ち、地域社会を豊かにする取り組みを続けている。",
        issue: "自社サイトへの流入・問い合わせを確立させたい\n広告で自社サイトへの流入を維持していたが、将来的には広告に頼らずにSEO対策などを含めたサイトの強化によってアクセス数を促進する必要がある。",
        solution: "ページ数増加でのSEO対策と、SNS運用による新しい世代へのアプローチで問い合わせ増加\nGiftPhotogramで施工写真を数万枚に及んでアップロードし、WEBサイト内のページ数を増やしサイトの強化を図った。外部からはInstagramの運用代行をし、Z世代へのアプローチ、プレゼントキャンペーンなど行いフォロワー数・閲覧数などを増加させた。"
    }
]

const SectionHeader = memo(({ title, className = "" }: { title: string, className?: string }) => (
    <SlideUp delay={0} duration={0.7}
        className={`text-sixth text-15 sm:text-20 lg:text-40 font-600 text-center ${className}`}
    >
        {title}
    </SlideUp>
));

const JobCard = memo(({ data, index }: { data: JobDescriptionData, index: number }) => (
    <ScaleIn delay={index * 0.1} duration={0.8} className="flex flex-col">
        <div className="bg-secondary px-20 sx:px-40 py-20 sx:py-30 lg:py-40 rounded-t-10">
            <FadeIn delay={0.2} duration={0.6} className="text-primary text-15 sm:text-20 lg:text-64 font-500 text-center">
                {`${index + 1}.${data.title}`}
            </FadeIn>
        </div>

        <div className="flex-1 flex flex-col gap-15 lg:gap-30 bg-fifth px-10 sx:px-15 lg:px-23 py-20 sx:py-30 lg:py-60 rounded-b-10">
            <FadeIn delay={0.3} duration={0.6} className="text-12 sx:text-15 lg:text-22">
                {data.description}
            </FadeIn>

            <div className="flex flex-col">
                {data.content.map((text, textIdx) => (
                    <FadeIn key={textIdx} delay={0.4 + (textIdx * 0.05)} duration={0.6} className="text-12 lg:text-20">
                        {text}
                    </FadeIn>
                ))}
            </div>
        </div>
    </ScaleIn>
));

const CaseStudyCard = memo(({ caseStudy }: { caseStudy: CaseStudyData }) => (
    <ScaleIn delay={caseStudy.id * 0.2} duration={0.8} className="flex flex-col last:border-b-0 border-b border-b-black/50">
        <div className="grid grid-cols-1 sx:grid-cols-7 lg:grid-cols-4 gap-10 sx:gap-15 lg:gap-20">
            <div className="col-span-1 sx:col-span-3 lg:col-span-1">
                <div className="w-full px-10 sx:px-15 lg:x-30 py-10 sx:py-15 lg:py-50">
                    <FadeIn delay={0.2} duration={0.6}>
                        <img src={caseStudy.logo} className="w-full aspect-square object-cover" />
                    </FadeIn>
                </div>

                <FadeIn delay={0.3} duration={0.6} className="block lg:hidden text-16 lg:text-24 font-600 text-center">
                    {caseStudy.companyName}
                </FadeIn>
            </div>

            <div className="col-span-1 sx:col-span-4 lg:col-span-3 flex flex-col justify-center pb-30">
                <FadeIn delay={0.4} duration={0.6} className="hidden lg:block text-24 lg:text-48 font-500 text-end">
                    {caseStudy.fileNumber}
                </FadeIn>

                <div className="flex flex-col gap-10 lg:gap-15">
                    <FadeIn delay={0.5} duration={0.6} className="hidden lg:block text-16 lg:text-24 font-600">
                        {caseStudy.companyName}
                    </FadeIn>
                    <FadeIn delay={0.6} duration={0.6} className="text-12 lg:text-16 leading-relaxed font-500">
                        {caseStudy.description}
                    </FadeIn>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sx:gap-15 lg:gap-20">
            <div className="relative col-span-1 lg:col-span-5">
                <div className="absolute top-0 left-0 w-full h-1 bg-black/50" />

                <div className="flex flex-col gap-20 sx:gap-50 lg:gap-90 py-25 sx:py-50 lg:py-90">
                    <FadeIn delay={0.7} duration={0.6} className="text-16 lg:text-24 font-600 text-center">
                        ISSUE 課題
                    </FadeIn>
                    <FadeIn delay={0.8} duration={0.6} className="text-12 lg:text-18 leading-relaxed font-500">
                        {caseStudy.issue.split('\n').map((line, index) => (
                            <span key={index}>
                                {line}
                                {index < caseStudy.issue.split('\n').length - 1 && <br />}
                            </span>
                        ))}
                    </FadeIn>
                </div>
            </div>

            <div className="relative col-span-1 lg:col-span-7">
                <div className="absolute top-0 right-0 w-full lg:w-70% h-1 bg-black/50" />

                <div className="flex flex-col items-center gap-20 sx:gap-50 lg:gap-90 py-25 sx:py-50 lg:py-90">
                    <FadeIn delay={0.9} duration={0.6} className="max-w-80% text-16 lg:text-24 font-600 text-center">
                        SOLUTION & RESULT ソリューション&結果
                    </FadeIn>
                    <FadeIn delay={1.0} duration={0.6} className="text-12 lg:text-18 leading-relaxed font-500">
                        {caseStudy.solution.split('\n').map((line, index) => (
                            <span key={index}>
                                {line}
                                {index < caseStudy.solution.split('\n').length - 1 && <br />}
                            </span>
                        ))}
                    </FadeIn>
                </div>
            </div>
        </div>
    </ScaleIn>
));

const JobDescription = memo(() => {
    return (
        <Layouts>
            <HeaderSpacing className="relative w-full h-full flex items-center justify-center aspect-[2/1] lg:aspect-[19/6] select-none">
                <BackgroundImage className="w-full h-full object-cover absolute top-0 left-0 pointer-events-none select-none">
                    <img src={jobDescriptionImage} className="w-full h-full object-cover" />
                </BackgroundImage>
                <div className="relative z-10 pb-20 sm:pb-30 lg:pb-40">
                    <FadeIn delay={0.5} duration={1} className="text-white text-18 sm:text-20 lg:text-60 font-600 text-center">
                        仕事内容
                    </FadeIn>
                </div>
            </HeaderSpacing>

            <div className="flex flex-col pt-30 sx:pt-55 lg:pt-100">
                <SectionHeader className="w-full max-w-790 m-auto px-10" title="3つの事業で会社と地域の課題解決を行い、企業成長を伴走サポートしています。" />

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 px-20 sx:px-50 lg:px-108 py-30 sx:py-50 lg:py-110">
                    {jobDescriptionData.map((item, idx) => (
                        <JobCard key={item.id} data={item} index={idx} />
                    ))}
                </StaggerContainer>
            </div>

            {/* Case Studies Section */}
            <div className="bg-fifth px-20 sx:px-50 lg:px-108 py-40 sx:py-50 lg:py-90">
                <div className="w-full max-w-1300 mx-auto flex flex-col gap-20 sx:gap-50 lg:gap-90">
                    <SectionHeader title="シンミドウの創出した事例" />

                    <StaggerContainer className="">
                        {caseStudiesData.map((caseStudy) => (
                            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </Layouts>
    );
});

export default JobDescription;