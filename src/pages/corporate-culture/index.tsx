import { ComponentsSpacing, HeaderSpacing, Layouts } from "../../components/layouts/layouts";
import corporateCultureImage from "../../assets/image/corporate-culture/background.png";

const texts = [
    [
        "シンミドウは、情報を共有し、プロとして気持ちのいい仕事をします。",
        "もしも何かが起こった時は、すぐに仲間と共有しチームプレイをします。"
    ], [
        "シンミドウは、仲間と同じ方向を向きながら創意工夫をし、成長します。",
        "一体感と士気を高める為にオープンな心を大切にし、誠実な言動をします。"
    ], [
        "シンミドウは、全ての人に対して分け隔てない応対をします。",
        "ヒトとヒトとを比べることは無意味であり、様々な意見や考えを大切にします。"
    ], [
        "シンミドウは、感情や上下に関係なく、仲間といい雰囲気づくりをします。",
        "ポジティブな言葉と行動により、仲間やお客様との信頼を築きます。"
    ], [
        "シンミドウは、言葉や形で分かりやすく伝え、そして実践します。",
        "机上の空論ではなく、実際に有言実行で成果を出します。"
    ], [
        "シンミドウは、どうすれば出来るかという方法を探すことにこだわります。",
        "無いモノを探すのではなく、有るモノから出来る方法を見出します。"
    ], [
        "シンミドウは、信じて任せることで相手の能力を引き出します。",
        "相手が答えを見つけることを助け、相手の課題を解決します。"
    ], [
        "シンミドウは、仲間や関係するヒトを大切にします。",
        "仲間や関係するヒトの成長・成功・幸せを心から喜びあいます。"
    ], [
        "シンミドウは、常に新しいことを学び続けます。",
        "お互いの学びを仲間と共有することで、シナジーを生み出します。"
    ], [
        "シンミドウは、当事者意識と自責の念を持ちます。",
        "自分には関係ないではなく、自分には何が出来るかを大切にします。"
    ], [
        "シンミドウは、常に考えうるベストの提案や支援を行います。",
        "関わる全てのヒトがお客様であることを理解します。"
    ], [
        "シンミドウは、チームとして成長し永続します。",
        "素晴らしい仲間と共に、お客様・知人や友人・家族に誇れる仕事をします。"
    ]
]

const aboutTexts = [
    [
        "世の中がモノであふれているこの時代。",
        "無駄をなくそうという動きが強くなっています。"
    ], [
        "社会にとって、本当に必要な",
        "モノやコトしか残らない『本物の時代』へ。"
    ], [
        "私たちはあったらいいなのサプリではなく、",
        "無いと困るモノ・コトを生み出すことに注力し、",
        "再現性を持たせ、地域の企業が成長することで、",
        "地域創生を実現します。"
    ], [
        "それが私たちの存在価値であり、存在意義です。"
    ]
]

const ComponentsHeader = ({ title }: { title: string }) => {
    return (
        <div className="text-fourth/10 text-25 sm:text-30 lg:text-96 font-600 text-start">
            {title}
        </div>
    )
}

const ComponentsItem = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className="max-w-90% md:max-w-full flex flex-row mx-auto">
            <div className="px-15 lg:px-20 py-25 lg:py-50 bg-secondary rounded-l-5 lg:rounded-l-8 flex flex-col items-center justify-center">
                {title.split('').map((char, idx) => (
                    <div key={idx} className="text-center text-primary text-25 lg:text-40 font-500 leading-tight">
                        {char}
                    </div>
                ))}
            </div>

            <div className="flex-1 flex items-center justify-center bg-fifth border-fourth border border-l-0 border-fifth rounded-r-5 lg:rounded-r-8 flex flex-col px-30 py-25 h-full align-center">
                <div className="text-black text-center text-12 lg:text-24">
                    {description}
                </div>
            </div>
        </div>
    )
}

const CorporateCulture = () => {
    return (
        <Layouts>
            <HeaderSpacing className="relative w-full h-full flex items-center justify-center h-160 sm:h-180 lg:h-400 select-none">
                <img src={corporateCultureImage}
                    className="w-full h-full object-cover absolute top-0 left-0 pointer-events-none select-none"
                    alt="Corporate Culture"
                />

                <div className="relative z-10 pb-20 sm:pb-30 lg:pb-40">
                    <span className="text-white text-18 sm:text-20 lg:text-60 font-600 text-center">
                        企業理念
                    </span>
                </div>
            </HeaderSpacing>

            <ComponentsSpacing className="flex flex-col gap-20 sm:gap-25 lg:gap-60">
                <ComponentsHeader title="Our Identity" />

                <div className="text-fourth text-15 sm:text-16 lg:text-40 text-center font-600">
                    ３つのシンミで、ひとつのSinmido
                </div>

                <div className="max-w-90% mx-auto flex flex-col gap-10 lg:gap-20 text-12 lg:text-20 text-black">
                    <div className="">
                        Sinmido の「シンミ」には、3つの意味があります。
                    </div>

                    <div className="">
                        私たちらしさをあらわすキーワードであり、経営理念でもある 3 つのシンミ。
                    </div>

                    <div className="">
                        それを、社員一人ひとりの個性と人間力をもって実現します。
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-20 lg:gap-50">
                    <ComponentsItem title="親身" description="常に相手の立場になって考えた上でベストを尽くすこと" />
                    <ComponentsItem title="真實" description="常に自らの経験と責任を根拠に使命感を持って取り組むこと" />
                    <ComponentsItem title="新観" description="常に新しいモノの見方を意識し新たな価値観を創出すること" />
                </div>
            </ComponentsSpacing>

            <ComponentsSpacing className="flex flex-col gap-20 sm:gap-25 lg:gap-60 bg-fifth">
                <ComponentsHeader title="Retono" />

                <div className="text-fourth text-15 sm:text-16 lg:text-40 text-center font-600">
                    シンミドウの価値基準
                </div>

                <div className="max-w-90% mx-auto flex flex-col gap-10 lg:gap-20 text-black">
                    <div className="text-12 lg:text-20">
                        Retono(レトノ)とは、ラテン語で「響く・反響する」を意味する言葉です。
                    </div>

                    <div className="text-12 lg:text-20">
                        多くの言語の語源となったラテン語にちなみ、
                    </div>

                    <div className="text-12 lg:text-20">
                        Sinmido の根底に響いている「価値の基準」として、12 のレトノを掲げています。
                    </div>

                    <div className="text-12 lg:text-20">
                        あらゆる場面において、私たちの思考や判断の基準となっています。
                    </div>
                </div>

                <div className="max-w-90% mx-auto">
                    {texts.map((text: string[], index: number) => (
                        <div key={index} className="flex flex-row items-center gap-20 lg:gap-30 py-20 lg:py-30 border-b border-black">
                            <div className="text-20 lg:text-30 text-secondary">
                                {index + 1}.
                            </div>

                            <div className="flex flex-col gap-8 lg:gap-15 text-black">
                                {text.map((line, i) => (
                                    <div key={i} className="text-10 lg:text-20">
                                        {line}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </ComponentsSpacing>

            <ComponentsSpacing className="flex flex-col gap-20 sm:gap-25 lg:gap-60 bg-primary">
                <ComponentsHeader title="Our Vision" />

                <div className="text-fourth text-15 sm:text-16 lg:text-40 text-center font-600">
                    採用・育成と業界特化でワクワクする地域をつくる
                </div>

                <div className="max-w-90% mx-auto flex flex-col gap-10 lg:gap-20 text-black">
                    <div className="text-12 lg:text-20">
                        ヒトと組織の可能性を、拡げ、高める。
                    </div>

                    <div className="text-12 lg:text-20">
                        そして、そこに再現性を持たせること。
                    </div>

                    <div className="text-12 lg:text-20">
                        それが私たちのビジョンです。
                    </div>

                    <div className="text-12 lg:text-20">
                        私たちがいることで、学生や、組織にいるヒトの可能性が拡がる。
                    </div>

                    <div className="text-12 lg:text-20">
                        私たちが関わることで、組織の強みや、成長の可能性が高まる。
                    </div>

                    <div className="text-12 lg:text-20">
                        そういう存在であることを目指しています。
                    </div>

                    <div className="text-12 lg:text-20">
                        それを具体的に行う手段が、
                    </div>

                    <div className="text-12 lg:text-20">
                        採用・育成の支援や、地域や業界に特化した支援であり、
                    </div>

                    <div className="text-12 lg:text-20">
                        そこに再現性を持たせることが、
                    </div>

                    <div className="text-12 lg:text-20">
                        私たちの存在価値であり存在意義であると考えています。
                    </div>
                </div>
            </ComponentsSpacing>


            <ComponentsSpacing className="flex flex-col gap-20 sm:gap-25 lg:gap-60 bg-fifth">
                <ComponentsHeader title="About Sinmido" />

                <div className="max-w-200 md:max-w-100% mx-auto text-fourth text-15 sm:text-16 lg:text-40 text-center font-600">
                    地域を、社会を、企業を、未来を豊かにする。
                </div>

                <div className="w-full sm:max-w-95% lg:max-w-900 mx-auto flex flex-col items-center gap-15 lg:gap-20">
                    {aboutTexts.map((textGroup, index) => (
                        <div key={index} className="relative flex flex-col items-center w-full group">
                            <div className="flex min-h-140 lg:min-h-200 bg-secondary group-hover:bg-secondary/80 px-20 py-20 lg:px-30 lg:py-25 w-full cursor-pointer transition-colors duration-200 flex flex-col justify-center items-center h-full"
                            >
                                <div className="text-white text-12 lg:text-20 leading-relaxed transition-colors duration-200 flex flex-col justify-center h-full">
                                    {textGroup.map((line, lineIndex) => (
                                        <div key={lineIndex}>
                                            {line}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {index !== 0 && (
                                <div className="absolute w-0 h-0 left-1/2 -translate-x-1/2 border-l-30 lg:border-l-45 border-transparent border-r-30 lg:border-r-45  border-t-15 lg:border-t-20 border-t-fifth" />
                            )}

                            {index < aboutTexts.length - 1 && (
                                <div className="absolute w-0 h-0 -bottom-15 lg:-bottom-20 left-1/2 -translate-x-1/2 border-l-30 lg:border-l-40 border-transparent border-r-30 lg:border-r-40 border-t-15 lg:border-t-20 group-hover:border-t-secondary/80 group-hover:border-t transition-colors duration-200 border-t-secondary" />
                            )}
                        </div>
                    ))}
                </div>
            </ComponentsSpacing>
        </Layouts>
    )
}

export default CorporateCulture;