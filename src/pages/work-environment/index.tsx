import { ComponentsSpacing, HeaderSpacing, Layouts } from "../../components/layouts/layouts";
import { BackgroundImage, PageHeader, SlideUp } from "../../components/animation";
import backgroundImg from "../../assets/image/environment/background.png";
import introImg1 from "../../assets/image/environment/intro-1.png";
import introImg2 from "../../assets/image/environment/intro-2.png";
import introImg3 from "../../assets/image/environment/intro-3.png";
import introImg4 from "../../assets/image/environment/intro-4.png";
import introImg5 from "../../assets/image/environment/intro-5.png";
import introImg6 from "../../assets/image/environment/intro-6.png";
import employeeImg1 from "../../assets/image/environment/employee-1.png";
import employeeImg2 from "../../assets/image/environment/employee-2.png";
import employeeImg3 from "../../assets/image/environment/employee-3.png";
import employeeImg4 from "../../assets/image/environment/employee-4.png";
import employeeImg5 from "../../assets/image/environment/employee-5.png";
import employeeImg6 from "../../assets/image/environment/employee-6.png";
import trainingBgImg from "../../assets/image/environment/training-bg.png";
import trainingViewImg from "../../assets/image/environment/training-view.png";
import workStyle from "../../assets/image/environment/work-style.png";

const introData = [
    {
        img: introImg1,
    }, {
        img: introImg2,
    }, {
        img: introImg3,
    }, {
        img: introImg4,
    }, {
        img: introImg5,
    }, {
        img: introImg6,
    }
]

const employeeDatas = [
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

const EmployeeCard = ({ data, index }: { data: any, index: number }) => {
    return (
        <SlideUp delay={index * 0.1} duration={0.7}
            className="bg-white border border-nineteenth rounded-10 overflow-hidden py-8 lg:py-15"
        >
            <div className="flex flex-col">
                <div className="px-12 lg:px-25">
                    <h3 className="text-black text-15 sm:text-20 lg:text-32 font-600 text-center">
                        {data.title}
                    </h3>
                </div>

                <img src={data.img} alt={data.title}
                    className="w-full h-full object-cover aspect-[5/3] px-25 lg:px-45 py-5 lg:py-30"
                />
            </div>

            <div className="px-25 lg:px-10 py-25 lg:py-25">
                <ul className="space-y-2">
                    {data.desc.map((item: string, key: number) => (
                        <li key={key} className="text-black text-10 lg:text-16 font-500">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </SlideUp>
    )
}

const WorkEnvironment = () => {
    return (
        <Layouts>
            <HeaderSpacing className="relative w-full h-full flex items-center justify-center aspect-[5/2] select-none">
                <BackgroundImage className="w-full h-full absolute top-0 left-0 pointer-events-none select-none">
                    <img src={backgroundImg} className="w-full h-full object-cover" />
                </BackgroundImage>

                <PageHeader className="relative flex flex-col z-10 pb-20 sm:pb-30 lg:pb-40">
                    <div className="hidden lg:block max-w-1150 text-white text-18 sm:text-20 lg:text-60 font-500 text-center">
                        働く環境・制度
                    </div>
                </PageHeader>
            </HeaderSpacing>

            <ComponentsSpacing className="flex flex-col gap-30 sm:gap-40 lg:gap-90">
                <ComponentsHeader title="オフィス紹介" />

                <div className="grid grid-cols-1 sx:grid-cols-2 lg:grid-cols-3">
                    {introData.map((data: any, key: number) => (
                        <img key={key} src={data.img} className="w-full aspect-square" />
                    ))}
                </div>
            </ComponentsSpacing>

            <ComponentsSpacing className="flex flex-col gap-30 sm:gap-40 xl:gap-90 bg-fifth overflow-hidden">
                <ComponentsHeader title="働き方" />

                <div className="w-full overflow-x-auto">
                    <img src={workStyle} className="min-w-600" />
                </div>
            </ComponentsSpacing>

            <ComponentsSpacing className="flex flex-col gap-30 sm:gap-40 lg:gap-90">
                <ComponentsHeader title="福利厚生" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sx:gap-15 lg:gap-40 xl2:gap-65">
                    {employeeDatas.map((data: any, index: number) => (
                        <EmployeeCard key={index} data={data} index={index} />
                    ))}
                </div>
            </ComponentsSpacing>

            <ComponentsSpacing className="relative flex flex-col gap-30 sm:gap-40 lg:gap-150 overflow-hidden">
                <img src={trainingBgImg} className="absolute top-0 left-0 w-full h-full object-cover z-0" />
                <img src={trainingViewImg} className="absolute hidden xl:block w-70% aspect-[9/4] top-5% left-10% object-cover z-5" style={{ transform: "rotate(10deg)" }} />

                <ComponentsHeader title="研修制度" className="z-10" />

                <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-45 items-end z-10">
                    <div className="text-primary">
                        <div className="bg-twentyth max-w-80% lg:max-w-100% m-auto flex flex-col gap-30 lg:gap-50 px-20 lg:px-35 py-15 lg:py-70">
                            <div className="text-20 lg:text-25 font-500 text-center">
                                新入社員研修
                            </div>

                            <div className="text-10 lg:text-20 font-400">
                                新入社員研修は、新入社員が企業や業務環境に迅速に適応し、社会人としての基礎を築くことを目的としたプログラムです。シンミドウでは、以下のような内容に重点を置いています。
                            </div>

                            <div className="flex flex-col gap-15 lg:gap-30">
                                <div className="text-10 lg:text-20 font-400">
                                    1.社会人としてのマインドチェンジ 学生から社会人への意識の切り替えを支援し、プロフェッショナルとしての自覚を養います。
                                </div>

                                <div className="text-10 lg:text-20 font-400">
                                    2.ビジネスマナーの習得 社会人として必要な礼儀作法やコミュニケーションスキル（敬語、名刺交換、電話対応など）を学びます。
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-primary">
                        <div className="bg-twentyfirst max-w-90% lg:max-w-100% m-auto flex flex-col gap-30 lg:gap-50 px-20 lg:px-35 py-15 lg:py-70">
                            <div className="text-20 lg:text-25 font-500 text-center">
                                内定者研修
                            </div>

                            <div className="text-10 lg:text-20 font-400">
                                内定者研修は、内定者が入社前に自社や事業の理解を深め、入社後の適応をスムーズにすること を目的とした取り組みです。
                            </div>

                            <div className="flex flex-col gap-15 lg:gap-30">
                                <div className="text-10 lg:text-20 font-400">
                                    1.自社・事業理解の促進　企業理念や事業内容、業界の特性について学び、自社への理解と共感を深めます。
                                </div>

                                <div className="text-10 lg:text-20 font-400">
                                    2.不安の払拭　社会人になることや新しい環境に対する不安を軽減するため、研修や交流機会を通じて安心感を醸成します。
                                </div>

                                <div className="text-10 lg:text-20 font-400">
                                    3.早期馴染みの促進　同期や先輩社員との関係構築を図り、入社後の人間関係や職場環境への適応をサポートします。
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-primary">
                        <div className="bg-twentysecond flex flex-col gap-30 lg:gap-50 px-20 lg:px-35 py-15 lg:py-70">
                            <div className="text-20 lg:text-25 font-500 text-center">
                                内定者研修
                            </div>

                            <div className="text-10 lg:text-20 font-400">
                                OJTは、職場における実践的な訓練です。研修で学んだ知識やスキルを、実際の業務を通して実践的に習得する機会を提供します。単に業務をこなすだけでなく、先輩社員による指導やフィードバックを通じて、より深い理解とスキル向上を目指します。効果的なOJTのためには、明確な目標設定、定期的な進捗確認、そして適切な指導体制の構築が不可欠です。
                            </div>

                            <div className="flex flex-col gap-15 lg:gap-30">
                                <div className="text-10 lg:text-20 font-400">
                                    1.目標設定　具体的な目標を設定することで、研修内容と業務の繋がりを明確にし、学習意欲を高めます。
                                </div>

                                <div className="text-10 lg:text-20 font-400">
                                    2.進捗確認　定期的な面談を通して、業務の進捗状況や課題を把握し、適切なサポートを提供します。
                                </div>

                                <div className="text-10 lg:text-20 font-400">
                                    3.指導体制　経験豊富で指導能力の高い先輩社員をメンターとして配置することで、効果的なOJTを実現できます
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ComponentsSpacing>
        </Layouts>
    )
}

export default WorkEnvironment;