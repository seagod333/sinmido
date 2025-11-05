import React, { Fragment, memo } from "react";
import { Layouts } from "../components/layouts/layouts";
import { ComponentsSpacing, HeaderSpacing } from "../components/common/index";
import { BackgroundImage, PageHeader, SlideUp, FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "../components/animation";

import backgroundImg from "../assets/image/environment/background.png";
import introImg1 from "../assets/image/environment/intro-1.png";
import introImg2 from "../assets/image/environment/intro-2.png";
import introImg3 from "../assets/image/environment/intro-3.png";
import introImg4 from "../assets/image/environment/intro-4.png";
import introImg5 from "../assets/image/environment/intro-5.png";
import introImg6 from "../assets/image/environment/intro-6.png";
import employeeImg1 from "../assets/image/environment/employee-1.png";
import employeeImg2 from "../assets/image/environment/employee-2.png";
import employeeImg3 from "../assets/image/environment/employee-3.png";
import employeeImg4 from "../assets/image/environment/employee-4.png";
import employeeImg5 from "../assets/image/environment/employee-5.png";
import employeeImg6 from "../assets/image/environment/employee-6.png";
import trainingBgImg from "../assets/image/environment/training-bg.png";
import trainingViewImg from "../assets/image/environment/training-view.png";
import workStyle from "../assets/image/environment/work-style.png";
import itemImg1 from "../assets/image/environment/item-1.png";
import itemImg2 from "../assets/image/environment/item-2.png";
import itemImg3 from "../assets/image/environment/item-3.png";
import itemImg4 from "../assets/image/environment/item-4.png";
import itemImg5 from "../assets/image/environment/item-5.png";
import activityImg1 from "../assets/image/environment/activity-1.png";
import activityImg2 from "../assets/image/environment/activity-2.png";
import activityImg3 from "../assets/image/environment/activity-3.png";
import teamBg from "../assets/image/environment/team-project-bg.png";
import teamImg1 from "../assets/image/environment/team-project-1.png";
import teamImg2 from "../assets/image/environment/team-project-2.png";

interface IntroData {
    img: string;
    title: string;
    desc: string;
}

interface EmployeeData {
    img: string;
    title: string;
    desc: string[];
}

interface TrainingProgram {
    id: number;
    title: string;
    description: string;
    points: string[];
    bgColor: string;
    maxWidth: string;
}

interface BenefitItem {
    img: string;
    title: string;
    desc: string;
}

interface ActivityData {
    id: number;
    img: string;
    title: string;
    desc: string;
    imageOrder: 'left' | 'right';
}

interface ProjectCaseStudy {
    issue: string;
    solution: string;
    result: string;
}

interface ProjectData {
    id: number;
    title: string;
    description: string;
    img: string;
    caseStudySubtitle: string[];
    companyName: string;
    companyDescription: string;
    caseStudy: ProjectCaseStudy;
}

const introData: IntroData[] = [
    {
        img: introImg1,
        title: "Entrance",
        desc: "エントランス 1"
    }, {
        img: introImg2,
        title: "Office",
        desc: "オフィス"
    }, {
        img: introImg3,
        title: "Meeting room",
        desc: "会議室 1"
    }, {
        img: introImg4,
        title: "Entrance",
        desc: "エントランス 2"
    }, {
        img: introImg5,
        title: "Event space",
        desc: "イベントスペース"
    }, {
        img: introImg6,
        title: "Meeting room",
        desc: ""
    }
];

const employeeDatas: EmployeeData[] = [
    {
        img: employeeImg1,
        title: "～休日・休暇制度～",
        desc: [
            "・ 週休2日制（一部土曜出勤日あり）",
            "・ 祝祭日休暇",
            "・ ゴールデンウィーク休暇（7日間）",
            "・ 夏季休暇（8日間）",
            "・ 年末年始休暇（8日間）",
            "・ 5年勤続休暇（5日間）",
            "・ 慶弔休暇",
            "・ 有給休暇",
            "・ 産前産後休暇",
            "・ 育児休暇"
        ]
    }, {
        img: employeeImg2,
        title: "～手当・補助制度～",
        desc: [
            "・ 通勤交通費（全額支給）",
            "・ エコ通勤手当（徒歩・自転車通勤者に月額5,000円支給）",
            "・ 住宅手当（一人暮らしの社員対象）",
            "・ 引越支援金（一人暮らしの社員対象）",
            "・ 役職手当"
        ]
    }, {
        img: employeeImg3,
        title: "～健康・保険制度～",
        desc: [
            "・ 健康診断（年1回、会社全額負担）",
            "・ 社会保険完備（健康保険、厚生年金、雇用保険、労災保険）",
            "・ 退職金制度"
        ]
    }, {
        img: employeeImg4,
        title: "～キャリア支援制度～",
        desc: [
            "・ スキルアップ支援制度（外部セミナーやワークショップの受講料を全額会社負担）",
            "・ 独立支援制度（独立希望者への支援金制度あり）",
            "・ 期間限定出向制度（関連会社への出向による知見拡大）",
            "・ 退職後の復職制度（退職から3年以内であれば、同条件での復職が可能）",
            "・ 副業可（自社の事業領域以外であれば副業が可能）"
        ]
    }, {
        img: employeeImg5,
        title: "～社内イベント制度～",
        desc: [
            "・ 社員旅行（会社全額負担、国内外への旅行を実施）",
            "・ 社内懇親会（年4回、会社全額負担）",
            "・ 部門合宿（1泊2日の合宿で目標設定やディスカッションを実施）"
        ]
    }, {
        img: employeeImg6,
        title: "～オフィス環境制度～",
        desc: [
            "・ 図書制度（業務に関連する書籍の購入支援）",
            "・ カフェ制度（社内での飲食スペースの提供）",
            "・ 社用PC貸与（業務用のパソコンを貸与）",
            "・ ブルックリン調のオフィス（遊び心満載のデザイン）"
        ]
    }
];

const trainingPrograms: TrainingProgram[] = [
    {
        id: 1,
        title: "新入社員研修",
        description: "新入社員研修は、新入社員が企業や業務環境に迅速に適応し、社会人としての基礎を築くことを目的としたプログラムです。シンミドウでは、以下のような内容に重点を置いています。",
        points: [
            "1.社会人としてのマインドチェンジ 学生から社会人への意識の切り替えを支援し、プロフェッショナルとしての自覚を養います。",
            "2.ビジネスマナーの習得 社会人として必要な礼儀作法やコミュニケーションスキル（敬語、名刺交換、電話対応など）を学びます。"
        ],
        bgColor: "bg-twentyth",
        maxWidth: "max-w-80% lg:max-w-100%"
    },
    {
        id: 2,
        title: "内定者研修",
        description: "内定者研修は、内定者が入社前に自社や事業の理解を深め、入社後の適応をスムーズにすること を目的とした取り組みです。",
        points: [
            "1.自社・事業理解の促進　企業理念や事業内容、業界の特性について学び、自社への理解と共感を深めます。",
            "2.不安の払拭　社会人になることや新しい環境に対する不安を軽減するため、研修や交流機会を通じて安心感を醸成します。",
            "3.早期馴染みの促進　同期や先輩社員との関係構築を図り、入社後の人間関係や職場環境への適応をサポートします。"
        ],
        bgColor: "bg-twentyfirst",
        maxWidth: "max-w-90% lg:max-w-100%"
    },
    {
        id: 3,
        title: "内定者研修",
        description: "OJTは、職場における実践的な訓練です。研修で学んだ知識やスキルを、実際の業務を通して実践的に習得する機会を提供します。単に業務をこなすだけでなく、先輩社員による指導やフィードバックを通じて、より深い理解とスキル向上を目指します。効果的なOJTのためには、明確な目標設定、定期的な進捗確認、そして適切な指導体制の構築が不可欠です。",
        points: [
            "1.目標設定　具体的な目標を設定することで、研修内容と業務の繋がりを明確にし、学習意欲を高めます。",
            "2.進捗確認　定期的な面談を通して、業務の進捗状況や課題を把握し、適切なサポートを提供します。",
            "3.指導体制　経験豊富で指導能力の高い先輩社員をメンターとして配置することで、効果的なOJTを実現できます"
        ],
        bgColor: "bg-twentysecond",
        maxWidth: "max-w-100%"
    }
];

const benefitItems: BenefitItem[] = [
    {
        img: itemImg1,
        title: "期間限定出向制度",
        desc: "社員の知見を拡げる為に、期間限定で関連会社への出向が可能です。"
    },
    {
        img: itemImg2,
        title: "スキルUP制度",
        desc: "外部セミナーやワークショップなど、一定の要件を満たしたていたら、授業料を全額会社が負担いたします。"
    },
    {
        img: itemImg3,
        title: "独立支援",
        desc: "独立したい社員を応援しています。独立の際は一部の顧客を継続支援することも可能です。年数、ポジションにより変動しますが、支援金制度もあります。"
    },
    {
        img: itemImg4,
        title: "退職から3年間復職可能",
        desc: "退職から3年以内であれば、最低でも同条件で復職が可能です。"
    },
    {
        img: itemImg5,
        title: "副業OK！",
        desc: "自社の事業領域以外であれば副業が可能。"
    }
];

const activityData: ActivityData[] = [
    {
        id: 1,
        img: activityImg1,
        title: "部門合宿",
        desc: "部署ごとで目標を定めて1泊2日の合宿を行っています。普段とは違った環境の中で会議やディスカッションを行うので、新しい観点からアイディアがでてくるのが新鮮です。今年は長野県の廃校宿泊施設や新潟県のヴィラで宿泊。仕事だけでなく、スポーツレクやBBQなどのアクティビティを通して年次関係なく密なコミュニケーションが取れる機会となります。",
        imageOrder: 'left'
    },
    {
        id: 2,
        img: activityImg2,
        title: "社員旅行",
        desc: "コロナ禍で今年は実現できませんでしたが、毎年全社員で旅行に行き交流を深めています。コロナ以前は、国内だけでなく、2年に1回海外旅行に行っていました。例えばグアム、台湾、香港、上海など、社員の希望により場所が決定します。普段一緒に仕事をしているメンバーの意外な一面がみれて、より仲が深まります。",
        imageOrder: 'right'
    },
    {
        id: 3,
        img: activityImg3,
        title: "社内サークル",
        desc: "シンミドウスタッフの間で、趣味を楽しむ場があります。例えば筋トレ器具や卓球台は社内交流の場になっていますし、音楽が好きなスタッフはバンドを組んで放課後練習をしたりしています。興味のあることは自由に取り入れることができる社風です。",
        imageOrder: 'left'
    }
];

const projectData: ProjectData[] = [
    {
        id: 1,
        title: "採用コンサルティング",
        description: "組織の要である「ヒト」について、採用から育成までを行います。クライアント企業が「未来の優秀人材」と出会えるための採用戦略を練り上げ、そして育成までのサポートをします。採用広告の取材から制作までの惹きつけ工程と、採用ターゲットの設定から選考内容の作り込みまでの見極め工程での支援を行います。また採用した人材を育成する為の育成プログラムの作成や研修も実施します。",
        img: teamImg1,
        caseStudySubtitle: ["事業拡大に伴う様々な課題を、品質管理・採用の強化で解決"],
        companyName: "株式会社八天堂 様",
        companyDescription: "昭和8年に広島県三原市で和菓子屋として創業。現在は冷やして食べる絶品くりーむパンを柱として「八天堂にしかできない、つくれない」をモットーに製造・販売しているスイーツ専門店。スイーツパンの手土産ジャンルを生み出したことで人気を博し、日本全国各地だけでなく海外にも進出している。また、カフェとアトリエを融合させた「八天堂カフェリエ」では参加体験型店舗を展開。",
        caseStudy: {
            issue: "事業拡大の中での品質レベル維持\n 製造数が増える中で、高い品質レベルを維持する必要があった。また、事業拡大していく上で、中核と なる人材が不足していた。",
            solution: "生産管理体制と品質管理体制を整備することで、国際規格のISO9001を取得。新卒採用を毎年行い、教育体制も充実させることで、中核人材を自社で育成した。",
            result: "スイーツパンという新しいカテゴリーを創り出し、唯一無二のブランドを構築。地域や業界から目標とされる「人づくり」を実践する、人材育成企業になった。"
        }
    },
    {
        id: 2,
        title: "経営コンサルティング",
        description: "経営戦略の観点から、経営層への助言を通じた支援を行います。またクライアント企業の人事制度（給与制度・評価制度）など、社内でのルール構築と運用サポートを行い、組織改善を促すコンサルティングをします。また特許を取得した独自の広告システムや、情報発信に必要なツール（コンセプトブック、パンフレット、DVD）の企画・制作により、企業ブランディングも行います。",
        img: teamImg2,
        caseStudySubtitle: ["ブランドガイドラインなど会社の世界観の確立を行い", "一貫したブランディング・採用活動を行う"],
        companyName: "株式会社URBAN LiKE 様",
        companyDescription: "平成20年に創業以来、住宅ブランドであるアーバンホームは高い顧客満足度を獲得しています。「理想以上の暮らしを舞台に人々に素敵なドラマをつくる」という理念のもと、住宅事業のほか、不動産・福祉関連施設・コンテナハウス・オフィスリノベーション・DXソリューションといった事業を展開しています。福岡県南部・熊本県北部エリアで商圏販売棟数ナンバーワンの住宅会社です。",
        caseStudy: {
            issue: "企業としてぶれないブランドを確立させ、事業拡大において優秀な人材を採用しなければいけない。",
            solution: "世界観・ブランドガイドラインを作成し、3か月に1回監査の仕組みを導入。\nビジョンの打ち出しや人柄での惹きつけなど、世界観に合わせ一貫性のある採用活動をお濃い、パンフレットや合同説明会のツールなども作成。",
            result: "採用は自走できる体制が整い、毎年継続的に採用できるようになった。\nブランディングもルール等が決まって確立した。"
        }
    }
];

const ComponentsHeader = memo(({ title, className = "" }: { title: string, className?: string }) => {
    return (
        <SlideUp delay={0} duration={0.7} className={`text-sixth text-18 sm:text-20 lg:text-50 font-600 text-center ${className}`}>
            {title}
        </SlideUp>
    );
});

const EmployeeCard = memo(({ data, index }: { data: EmployeeData, index: number }) => {
    return (
        <ScaleIn delay={index * 0.1} duration={0.8} className="bg-white border border-nineteenth rounded-10 overflow-hidden py-8 lg:py-15">
            <div className="flex flex-col">
                <div className="px-12 lg:px-25">
                    <FadeIn delay={0.2} duration={0.6} className="text-black text-15 sm:text-20 lg:text-32 font-600 text-center">
                        {data.title}
                    </FadeIn>
                </div>

                <FadeIn delay={0.3} duration={0.6} className="w-full">
                    <img src={data.img} alt={data.title}
                        className="w-full h-full object-cover aspect-[5/3] px-25 lg:px-45 py-5 lg:py-30"
                    />
                </FadeIn>
            </div>

            <div className="px-25 lg:px-10 py-25 lg:py-25">
                <ul className="space-y-2">
                    {data.desc.map((item: string, key: number) => (
                        <FadeIn key={key} delay={0.4 + (key * 0.05)} duration={0.6} className="text-black text-10 lg:text-16 font-500">
                            {item}
                        </FadeIn>
                    ))}
                </ul>
            </div>
        </ScaleIn>
    );
});

const TrainingProgramCard = memo(({ program }: { program: TrainingProgram }) => (
    <ScaleIn delay={program.id * 0.2} duration={0.8} className="text-primary">
        <div className={`${program.bgColor} ${program.maxWidth} m-auto flex flex-col gap-30 lg:gap-50 px-20 lg:px-35 py-15 lg:py-70`}>
            <FadeIn delay={0.2} duration={0.6} className="text-20 lg:text-25 font-500 text-center">
                {program.title}
            </FadeIn>

            <FadeIn delay={0.3} duration={0.6} className="text-10 lg:text-20 font-400">
                {program.description}
            </FadeIn>

            <div className="flex flex-col gap-15 lg:gap-30">
                {program.points.map((point, index) => (
                    <FadeIn key={index} delay={0.4 + (index * 0.1)} duration={0.6} className="text-10 lg:text-20 font-400">
                        {point}
                    </FadeIn>
                ))}
            </div>
        </div>
    </ScaleIn>
));

const BenefitCard = memo(({ data, index }: { data: BenefitItem, index: number }) => {
    return (
        <ScaleIn delay={index * 0.1} duration={0.8} className="bg-white border-b border-black overflow-hidden flex flex-col">
            <FadeIn delay={0.2} duration={0.6} className="w-full">
                <img src={data.img} alt={data.title}
                    className="w-full h-full object-cover aspect-[3/2]"
                />
            </FadeIn>

            <div className="flex flex-col gap-5 py-20 lg:py-25">
                <FadeIn delay={0.3} duration={0.6} className="text-black text-15 sm:text-20 lg:text-34 font-400 leading-relaxed">
                    {data.title}
                </FadeIn>

                <FadeIn delay={0.4} duration={0.6} className="text-black text-15 sm:text-20 lg:text-34 font-400 leading-relaxed">
                    {data.desc}
                </FadeIn>
            </div>
        </ScaleIn>
    );
});

const ActivityCard = memo(({ data }: { data: ActivityData }) => {
    const isImageRight = data.imageOrder === 'right';

    return (
        <ScaleIn delay={data.id * 0.2} duration={0.8} className="grid grid-cols-1 lg:grid-cols-2 sm:gap-10 lg:gap-100">
            <div className={`${isImageRight ? 'lg:order-2' : ''}`}>
                <FadeIn delay={0.2} duration={0.6} className="w-full">
                    <img src={data.img} alt={data.title} className="w-full h-full object-cover aspect-[8/5]" />
                </FadeIn>
            </div>

            <div className={`${isImageRight ? 'lg:order-1' : ''} flex flex-col justify-center lg:border-y lg:border-black`}>
                <FadeIn delay={0.3} duration={0.6} className="text-black text-15 sm:text-20 lg:text-40 font-400 leading-relaxed py-10 sm:py-30 lg:py-60 border-b lg:border-b-0 border-black">
                    {data.title}
                </FadeIn>

                <FadeIn delay={0.4} duration={0.6} className="text-black text-10 sx:text-12 lg:text-26 font-400 leading-relaxed pt-10 sm:pt-0 pb-10 sm:pb-30 lg:pb-60 border-b lg:border-b-0 border-black">
                    {data.desc}
                </FadeIn>
            </div>
        </ScaleIn>
    );
});

const ProjectCard = memo(({ data }: { data: ProjectData }) => {
    return (
        <div className="flex flex-col gap-30 sm:gap-40 lg:gap-90 pt-20 sm:pt-30 lg:pt-50">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 sm:gap-30 lg:gap-60">
                <div className="col-span-2 relative flex flex-col justify-between gap-10 sm:gap-20 lg:gap-30">
                    <div className="absolute top-0 left-0 w-85% h-1 bg-black/50 z-1" />

                    <FadeIn delay={0.2} duration={0.6} className="absolute top-0 left-0 translate-y-[-40%] z-2">
                        <span className="text-twentyfifth italic text-70 sm:text-100 lg:text-150 font-400">
                            {data.id}
                        </span>
                    </FadeIn>

                    <FadeIn delay={0.3} duration={0.6} className="text-black text-18 sm:text-24 lg:text-50 font-500 z-3 pt-40 sm:pt-60 lg:pt-90">
                        {data.title}
                    </FadeIn>

                    <FadeIn delay={0.5} duration={0.6} className="flex flex-col justify-center lg:order-1 z-3">
                        <p className="text-black text-10 sm:text-12 lg:text-20 font-400 leading-relaxed">
                            {data.description}
                        </p>
                    </FadeIn>
                </div>

                <div className="col-span-3 flex flex-col justify-center">
                    <FadeIn delay={0.4} duration={0.6} className="w-full">
                        <img src={data.img} alt={data.title} className="w-full object-cover aspect-[7/4]" />
                    </FadeIn>
                </div>
            </div>

            <div className="flex flex-col gap-20 sm:gap-30 lg:gap-50 pt-20 sm:pt-30 lg:pt-50 px-20 sm:px-30 lg:px-50">
                <FadeIn delay={0.6} duration={0.6} className="text-twentyfifth flex gap-10 lg:gap-30 items-center">
                    <span className="text-40 sm:text-50 lg:text-100 font-400">WORKS</span>
                    <span className="text-15 sm:text-20 lg:text-40 font-400">事例</span>
                </FadeIn>

                <div className="flex flex-col gap-5 sm:gap-10 lg:gap-15">
                    <FadeIn delay={0.7} duration={0.6} className="text-black text-12 sm:text-14 lg:text-40 font-400 leading-relaxed">
                        {data.caseStudySubtitle.map((subtitle, index) => (
                            <Fragment key={index}>
                                {subtitle}{index < data.caseStudySubtitle.length - 1 && <br />}
                            </Fragment>
                        ))}
                    </FadeIn>

                    <FadeIn delay={0.8} duration={0.6} className="text-black text-12 sm:text-14 lg:text-30 font-400 leading-relaxed">
                        {data.companyName}
                    </FadeIn>

                    <FadeIn delay={0.9} duration={0.6} className="text-black text-10 sm:text-12 lg:text-26 font-400 leading-relaxed">
                        {data.companyDescription}
                    </FadeIn>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-130">
                <div className="flex flex-col gap-20 lg:gap-30 py-30 sm:py-40 lg:py-70 border-y-1 border-x-0 border-dashed border-black">
                    <FadeIn delay={1.0} duration={0.6} className="text-black whitespace-nowrap">
                        <span className="text-twentyfifth text-25 sm:text-30 lg:text-50">—</span> <span className="text-20 sm:text-26 lg:text-40 font-500">ISSUE</span> <span className="text-12 sm:text-14 lg:text-26 font-400">課題</span>
                    </FadeIn>

                    <FadeIn delay={1.1} duration={0.6} className="text-black text-10 sm:text-12 lg:text-30 font-400 leading-relaxed">
                        {data.caseStudy.issue}
                    </FadeIn>
                </div>

                <div className="relative flex flex-col gap-20 lg:gap-30 py-30 sm:py-40 lg:py-70 border-y-1 border-x-0 border-dashed border-black">
                    <FadeIn delay={1.2} duration={0.6} className="hidden lg:block absolute lg:-left-65 top-1/2 translate-x-[-50%] -translate-y-1/2">
                        <span className="text-black text-20 sm:text-24 lg:text-30 font-600">
                            &gt;&gt;
                        </span>
                    </FadeIn>

                    <FadeIn delay={1.2} duration={0.6} className="block lg:hidden absolute -top-65 left-1/2 translate-y-[-50%] -translate-x-1/2">
                        <span className="text-black text-20 sm:text-24 lg:text-30 font-600">
                            &gt;&gt;
                        </span>
                    </FadeIn>

                    <FadeIn delay={1.0} duration={0.6} className="text-black whitespace-nowrap">
                        <span className="text-twentyfifth text-25 sm:text-30 lg:text-50">—</span> <span className="text-20 sm:text-26 lg:text-40 font-500">SOLUTION</span> <span className="text-12 sm:text-14 lg:text-26 font-400">解決策</span>
                    </FadeIn>

                    <FadeIn delay={1.1} duration={0.6} className="text-black text-10 sm:text-12 lg:text-30 font-400 leading-relaxed">
                        {data.caseStudy.solution}
                    </FadeIn>
                </div>

                <div className="relative flex flex-col gap-20 lg:gap-30 py-30 sm:py-40 lg:py-70 border-y-1 border-x-0 border-dashed border-black">
                    <FadeIn delay={1.2} duration={0.6} className="hidden lg:block absolute lg:-left-65 top-1/2 translate-x-[-50%] -translate-y-1/2">
                        <span className="text-black text-20 sm:text-24 lg:text-30 font-600">
                            &gt;&gt;
                        </span>
                    </FadeIn>

                    <FadeIn delay={1.2} duration={0.6} className="block lg:hidden absolute -top-65 left-1/2 translate-y-[-50%] -translate-x-1/2">
                        <span className="text-black text-20 sm:text-24 lg:text-30 font-600">
                            &gt;&gt;
                        </span>
                    </FadeIn>

                    <FadeIn delay={1.0} duration={0.6} className="text-black whitespace-nowrap">
                        <span className="text-twentyfifth text-25 sm:text-30 lg:text-50">—</span> <span className="text-20 sm:text-26 lg:text-40 font-500">RESULT</span> <span className="text-12 sm:text-14 lg:text-26 font-400">結果</span>
                    </FadeIn>

                    <FadeIn delay={1.1} duration={0.6} className="text-black text-10 sm:text-12 lg:text-30 font-400 leading-relaxed">
                        {data.caseStudy.result}
                    </FadeIn>
                </div>
            </div>
        </div>
    );
});

const WorkEnvironment = memo(() => {
    return (
        <Layouts>
            <HeaderSpacing className="relative w-full h-full flex items-center justify-center aspect-[5/2] select-none">
                <BackgroundImage className="w-full h-full absolute top-0 left-0 pointer-events-none select-none">
                    <img src={backgroundImg} className="w-full h-full object-cover" />
                </BackgroundImage>

                <PageHeader delay={0.5} duration={1} className="relative flex flex-col z-10 pb-20 sm:pb-30 lg:pb-40">
                    <FadeIn delay={0.7} duration={0.8} className="hidden lg:block max-w-1150 text-white text-18 sm:text-20 lg:text-60 font-500 text-center">
                        働く環境・制度
                    </FadeIn>
                </PageHeader>
            </HeaderSpacing>

            <ComponentsSpacing className="flex flex-col gap-30 sm:gap-40 lg:gap-90">
                <ComponentsHeader title="オフィス紹介" />

                <StaggerContainer className="grid grid-cols-1 sx:grid-cols-2 lg:grid-cols-3">
                    {introData.map((data: any, key: number) => (
                        <FadeIn key={key} delay={key * 0.1} duration={0.6} className="relative w-full cursor-pointer group">
                            <img src={data.img} className="w-full aspect-square" />

                            <div className="opacity-100 group-hover:opacity-75 transition-opacity duration-300 absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-5 lg:gap-15 bg-secondary/60">
                                <FadeIn delay={0.2} duration={0.6} className="text-white text-18 sm:text-20 lg:text-50 font-500 text-center">
                                    {data.title}
                                </FadeIn>

                                <FadeIn delay={0.3} duration={0.6} className="text-white text-10 sm:text-12 lg:text-40 font-500 text-center">
                                    {data.desc}
                                </FadeIn>
                            </div>
                        </FadeIn>
                    ))}
                </StaggerContainer>
            </ComponentsSpacing>

            <ComponentsSpacing className="flex flex-col gap-30 sm:gap-40 xl:gap-90 bg-fifth overflow-hidden">
                <ComponentsHeader title="働き方" />

                <FadeIn delay={0.3} duration={0.8} className="flex flex-col items-center justify-center w-full overflow-x-auto">
                    <img src={workStyle} className="min-w-600 w-full" />
                </FadeIn>
            </ComponentsSpacing>

            <ComponentsSpacing className="flex flex-col gap-10 sm:gap-30 lg:gap-40">
                <ComponentsHeader title="" /> {/* 社員支援制度 */}

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30 sx:gap-40 lg:gap-60">
                    {benefitItems.map((data: BenefitItem, index: number) => (
                        <BenefitCard key={index} data={data} index={index} />
                    ))}
                </StaggerContainer>
            </ComponentsSpacing>

            <ComponentsSpacing className="flex flex-col gap-30 sm:gap-40 lg:gap-90">
                <ComponentsHeader title="社内活動" />

                <StaggerContainer className="flex flex-col gap-40 lg:gap-80">
                    {activityData.map((data: ActivityData, index: number) => (
                        <ActivityCard key={index} data={data} />
                    ))}
                </StaggerContainer>
            </ComponentsSpacing>

            <ComponentsSpacing className="flex flex-col gap-30 sm:gap-40 lg:gap-90">
                <ComponentsHeader title="福利厚生" />

                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sx:gap-15 lg:gap-40 xl2:gap-65">
                    {employeeDatas.map((data: any, index: number) => (
                        <EmployeeCard key={index} data={data} index={index} />
                    ))}
                </StaggerContainer>
            </ComponentsSpacing>

            {/* チーム・プロジェクトについて section */}
            <ComponentsSpacing className="relative flex flex-col gap-30 sm:gap-40 lg:gap-90 overflow-hidden">
                <ComponentsHeader title="チーム・プロジェクトについて" className="z-10" />

                {/* Task Force Section */}
                <ScaleIn delay={0.2} duration={0.8} className="grid grid-cols-1 lg:grid-cols-5 gap-30 sm:gap-40 lg:gap-60 z-10">
                    <FadeIn delay={0.3} duration={0.6} className="col-span-2 flex flex-col items-center justify-center">
                        <img src={teamBg} alt="タスクフォース型チームづくり" className="aspect-square w-full h-full object-cover" />
                    </FadeIn>

                    <FadeIn delay={0.4} duration={0.6} className="col-span-3 flex flex-col justify-center gap-20 sm:gap-30 lg:gap-40">
                        <FadeIn delay={0.5} duration={0.6} className="text-black text-15 sm:text-20 lg:text-36 font-400 leading-relaxed">
                            「タスクフォース型」で、<br />
                            各々のスキルと個性を生かした<br />
                            チームづくり
                        </FadeIn>

                        <FadeIn delay={0.6} duration={0.6} className="text-black text-10 sm:text-12 lg:text-26 font-400 leading-relaxed">
                            部門を超えてスタッフ各々の得意分野や特性を最大限に生かすことで、クライアントの経営課題の解決へと導きます。
                            <br />
                            コンサルタント、デザイナー、マーケターなど、それぞれの分野で高度な能力を持ったメンバーが一連をつなぎチーム力を強化するとともに、迅速かつ丁寧なサポートをするのがシンミドウの特徴です。
                        </FadeIn>
                    </FadeIn>
                </ScaleIn>

                {/* Projects Section */}
                <div className="flex flex-col gap-30 sm:gap-40 lg:gap-90">
                    {projectData.map((project) => (
                        <ProjectCard key={project.id} data={project} />
                    ))}
                </div>
            </ComponentsSpacing>

            <ComponentsSpacing className="relative flex flex-col gap-30 sm:gap-40 lg:gap-150 overflow-hidden">
                <FadeIn delay={0.2} duration={0.8} className="absolute top-0 left-0 w-full h-full object-cover z-0">
                    <img src={trainingBgImg} className="w-full h-full object-cover" />
                </FadeIn>
                <FadeIn delay={0.4} duration={0.8} className="absolute hidden xl:block w-70% aspect-[9/4] top-5% left-10% object-cover z-5" style={{ transform: "rotate(10deg)" }}>
                    <img src={trainingViewImg} className="w-full h-full object-cover" />
                </FadeIn>

                <ComponentsHeader title="研修制度" className="z-10" />

                <StaggerContainer className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-45 items-end z-10">
                    {trainingPrograms.map((program) => (
                        <StaggerItem key={program.id}>
                            <TrainingProgramCard program={program} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </ComponentsSpacing>
        </Layouts>
    );
});

export default WorkEnvironment;