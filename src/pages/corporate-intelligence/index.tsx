import React from "react";
import CountUp from "react-countup";
import {
  SlideUp,
  BackgroundImage,
  PageHeader,
  ScaleUp,
  CounterAnimation
} from "../../components/animation/index";
import { ComponentsSpacing, HeaderSpacing, Layouts } from "../../components/layouts/layouts";
import signImg from "../../assets/image/corporate-intelligence/sign.png";

import ceoImage from "../../assets/image/corporate-intelligence/ceo.png";
import corporateIntelligenceImage from "../../assets/image/corporate-intelligence/background.png";
import statisticImg1 from "../../assets/image/corporate-intelligence/statistic-1.png";
import statisticImg2 from "../../assets/image/corporate-intelligence/statistic-2.png";
import statisticImg3 from "../../assets/image/corporate-intelligence/statistic-3.png";
import statisticImg4 from "../../assets/image/corporate-intelligence/statistic-4.png";
import statisticImg5 from "../../assets/image/corporate-intelligence/statistic-5.png";

const companyProfile = [
  {
    headerTitle: "会社名",
    title: ["株式会社シンミドウ"],
    desc: []
  }, {
    headerTitle: "代表者",
    title: ["代表取締役　笹田 知弘"],
    desc: []
  }, {
    headerTitle: "設立",
    title: [
      "2008年1月28日",
      "（2001年 前身となる有限会社笹田経営を創業）"
    ],
    desc: []
  }, {
    headerTitle: "資本金",
    title: ["10,000,000円"],
    desc: []
  }, {
    headerTitle: "企業理念",
    title: [],
    desc: [
      "• 親身とは、常に相手の立場になって考えた上でベストを尽くすことである。",
      "• 真實とは、常に自らの経験と責任を根拠に使命感を持って取り組むことである。",
      "• 新観とは、常に新しいモノの見方を意識し新たな価値観を創出することである。"
    ]
  }, {
    headerTitle: "企業理念",
    title: [],
    desc: [
      "採用・育成事業新卒／中途採用支援、インターンシップ支援、人材紹介、ブランディング・ツール制作、埼玉新卒・転職ナビ運営、埼玉県特化合同就職イベント運営DX/DA事業工務店ブランディング、WEBマーケティング支援、工務店採用支援、施工写真資産化システム、各種販促物および動画制作地域創生事業地方自治体委託事業、地方自治体連携事業、地域企業連携事業、地域創生研究開発事業"
    ]
  }, {
    headerTitle: "許認可等",
    title: [],
    desc: [
      "• 有料職業紹介事業許可 許可番号 11- ュ-300934",
      "• プライバシーマーク取得 登録番号 第10840433(08)号",
      "• 経済産業省　地域未来牽引企業",
      "• 経済産業省　健康経営優良法人",
      "• 経済産業省　事業継続力強化計画",
      "• 経済産業省　ビジネスモデル特許を4件取得（採用、検索最適化、研修、内定辞退防止）",
      "• 厚生労働省　女性活躍推進法に基づく「えるぼし」",
      "• 埼玉県　多様な働き方実践企業認定取得　第31171号",
      "• さいたま市　SDGs認証企業　他"
    ]
  }, {
    headerTitle: "連絡先",
    title: [],
    desc: [
      "• TEL：048-657-4343",
      "• FAX：048-657-4848"
    ]
  }, {
    headerTitle: "所在地",
    title: [],
    desc: [
      "• 〒330-0854",
      "　埼玉県さいたま市大宮区桜木町4-244-1 都築ビル",
      "• Google Map"
    ]
  }
]

const statisticData = [
  {
    image: statisticImg1,
    title: "平均取得日数",
    desc: 12.7
  }, {
    image: statisticImg2,
    title: "平均勤続勤務年数",
    desc: 5.8,
  }, {
    image: statisticImg3,
    title: "平均勤続勤務年数",
    percentage1: 70,
    percentage2: 30,
  }, {
    image: statisticImg4,
    title: "平均勤続勤務年数",
    desc: 100,
  }, {
    image: statisticImg5,
    title: "平均勤続勤務年数",
    desc: 25,
  }
]

const ceoMessage = [
  "私たちシンミドウは、経営理念である「三つのシンミ」親身とは、常に相手の立場になって考えた上で ベストを尽くすことである。",
  "真實とは、常に自らの経験と責任を根拠に 使命感をもって取り組むことである。",
  "新観とは、  新たな価値観を創出することである。",
  "を大切にしている会社です。",
  "この「三つのシンミ」を常に大切にしながら、私たちシンミドウが目指しているのは、「地域から、職場から、日本を元気にしていく。」",
  "ということです。",
  "自分が住む地域のことを好きになり、そしてもっと良くしたいと思ったら、その結果として地域を良く出来るはず。",
  "自分が働く職場のことを好きになり、そしてもっと良くしたいと思ったら、その結果として職場を良く出来るはず。",
  "そういう考えで、地域や中小企業にある身近な課題や問題を解決することに、私たちは日々本気で取り組んでいます。",
  "シンミドウが行う業務内容は、人材の採用や育成、組織のDX化やマーケティング支援ですが、その業務の目的は何か？",
  "と聞かれたら、それは地域と職場をもっと良くすることなのです。",
  "自分がいる地域のことをもっと良くしたいと思う人を、地域に一人でも増やしたい。",
  "自分が働く職場のことをもっと良くしたいと思う人を、職場に一人でも増やしたい。",
  "私たちシンミドウは、地域から、職場から、日本を元気にしていくために、",
  "高い志を持ち、真摯に誠実に、本気で取り組んでいきます"
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

const CorporateIntelligence = () => {
  return (
    <Layouts>
      <HeaderSpacing className="relative w-full h-full flex items-center justify-center aspect-[2/1] lg:aspect-[7/2] select-none">
        <BackgroundImage className="w-full h-full absolute top-0 left-0 pointer-events-none select-none">
          <img src={corporateIntelligenceImage}
            className="w-full h-full object-cover"
            alt="Corporate Culture"
          />
        </BackgroundImage>

        <PageHeader className="relative z-10 pb-20 sm:pb-30 lg:pb-40">
          <span className="text-white text-18 sm:text-20 lg:text-60 font-600 text-center">
            企業情報
          </span>
        </PageHeader>
      </HeaderSpacing>

      <ComponentsSpacing className="flex flex-col gap-30 sm:gap-50 lg:gap-100 bg-primary">
        <ComponentsHeader title="会社概要" />

        <div className="w-full max-w-1200 mx-auto">
          <div className="flex flex-col gap-12 lg:gap-15">
            {companyProfile.map((item, index) => (
              <SlideUp
                key={index}
                className="flex flex-col lg:flex-row"
                duration={0.5}
                amount={0.2}
              >
                <div className="w-full lg:w-30% bg-secondary p-10 lg:p-20 flex items-center justify-center">
                  <h3 className="text-white text-12 lg:text-26 font-500 text-center">
                    {item.headerTitle}
                  </h3>
                </div>

                {/* Right Column - Content */}
                <div className="w-full lg:w-70% bg-primary border border-seventh flex flex-col justify-center">
                  {item.title.length > 0 && (
                    <div className="p-10 lg:p-20">
                      {item.title.map((title, titleIndex) => (
                        <div key={titleIndex} className="text-10 lg:text-26 text-seventh text-center">
                          {title}
                        </div>
                      ))}
                    </div>
                  )}

                  {item.desc.length > 0 && (
                    <div className="px-20 lg:px-30 py-25 lg:py-55">
                      {item.desc.map((desc, descIndex) => (
                        <React.Fragment key={descIndex}>
                          <div className="text-10 lg:text-20 text-seventh">
                            {desc}
                          </div>

                          {desc === "• Google Map" && (
                            <div className="mt-20 lg:mt-45">
                              <div className="w-full aspect-square">
                                <iframe
                                  title="Google Map - 〒330-0854 埼玉県さいたま市大宮区桜木町4-244-1 都築ビル"
                                  src="https://www.google.com/maps?q=%E5%9F%BC%E7%8E%89%E7%9C%8C%E3%81%95%E3%81%84%E3%81%9F%E3%81%BE%E5%B8%82%E5%A4%A7%E5%AE%AE%E5%8C%BA%E6%A1%9C%E6%9C%A8%E7%94%BA4-244-1%20%E9%83%BD%E7%AF%89%E3%83%93%E3%83%AB&output=embed"
                                  className="w-full h-full border-0"
                                  loading="lazy"
                                  referrerPolicy="no-referrer-when-downgrade"
                                  allowFullScreen
                                />
                              </div>
                            </div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              </SlideUp>
            ))}
          </div>
        </div>
      </ComponentsSpacing>

      <ComponentsSpacing className="flex flex-col gap-30 sm:gap-50 lg:gap-120 bg-fifth">
        <ComponentsHeader title="代表挨拶" />

        <div className="w-full max-w-1200 mx-auto mb-30 lg:mb-100">
          <div className="relative w-full group">
            <div className="w-full relative">
              <ScaleUp className="w-full h-auto" duration={0.7} amount={0.6}>
                <img src={ceoImage} className="w-full h-auto object-cover" alt="CEO" />
              </ScaleUp>

              <SlideUp
                className="absolute bottom-0 w-full flex items-center justify-center lg:group-hover:hidden transition-all duration-200"
                duration={0.7}
                delay={0.4}
                amount={0.6}
              >
                <div className="relative translate-y-1/2 bg-secondary px-2vw py-[1.5vw]">
                  <SlideUp className="text-white text-10 md:text-15 lg:text-[1.5vw]"
                    duration={0.6}
                    delay={0.55}
                  >
                    地域から、職場から、日本を元気にしていく。
                  </SlideUp>
                </div>
              </SlideUp>
            </div>

            <div className="lg:absolute lg:top-0 lg:left-0 w-full h-full lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200 pt-35 md:pt-50 lg:pt-0">
              <div className="relative min-h-full bg-tenth/90 flex flex-col justify-center pt-30 sx:pt-40 lg:pt-[3.5vw] px-25 sx:px-30 lg:px-[3vw] pb-15 sx:pb-20 md:pb-0">
                {ceoMessage.map((message, index) => (
                  <p key={index}
                    className="text-white text-8 sm:text-10 md:text-15 lg:text-[0.95vw] xl:text-[1.04vw] lg:leading-[2rem] xl:leading-[2.4rem] font-500"
                    style={{ maxWidth: '100%', wordBreak: 'break-word' }}
                  >
                    {message}
                  </p>
                ))}

                <div className="relative flex justify-end md:bottom-20 lg:bottom-[2vw] xl:bottom-[1vw]">
                  <img src={signImg} className="w-50% min-w-120 lg:w-auto md:h-80 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ComponentsSpacing>

      <div className="flex flex-col gap-40 sm:gap-50 lg:gap-100">
        <ComponentsHeader title="数字でみる" className="pt-40 sm:pt-50 lg:pt-120" />

        <div className="flex flex-col px-20 sm:px-75 lg:px-170 py-20 py-30 sm:py-75 lg:py-130 bg-secondary">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-40">
            {statisticData.map((stat, idx) => (
              <CounterAnimation key={idx}
                className={`relative w-full aspect-square ${idx === 4 ? 'lg:col-start-3' : ''}`}
                duration={0.6}
                delay={idx * 0.1}
                amount={0.3}
              >
                <img src={stat.image} className="w-full h-auto object-cover select-none" alt={stat.title} />

                <div className="absolute top-5% left-0 w-full flex items-center justify-center px-10">
                  <span className="text-black text-20 lg:text-40 font-600 text-center">
                    {stat.title}
                  </span>
                </div>

                {idx === 0 && (
                  <div className="absolute bottom-2% left-0 w-full flex items-center justify-center px-10">
                    <span className="text-secondary text-40 lg:text-80 font-600 text-center">
                      <span className="montserrat font-900 leading-none">
                        <CountUp
                          end={stat.desc || 0}
                          duration={2.5}
                          decimals={1}
                          useEasing={true}
                        />
                      </span>
                      <span className="leading-none">日</span>
                    </span>
                  </div>
                )}

                {idx === 1 && (
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center px-10">
                    <span className="text-secondary text-35 lg:text-65 font-600 text-center pt-20 lg:pt-30">
                      <span className="montserrat font-900 leading-none">
                        <CountUp
                          end={stat.desc || 0}
                          duration={2.5}
                          decimals={1}
                          useEasing={true}
                        />
                      </span>
                      <span className="text-25 lg:text-50 font-500 leading-none">時間</span>
                    </span>
                  </div>
                )}

                {idx === 2 && (
                  <div className="absolute left-1/2 top-2/3 transform -translate-x-1/2 -translate-y-2/3 w-full">
                    <div className="grid grid-cols-2 gap-10% pt-40% px-12%">
                      <div className="flex flex-col">
                        <span className="text-eighth text-20 lg:text-30 font-500">男性</span>
                        <span className="text-eighth text-30 lg:text-40 pl-20%">
                          <span className="montserrat font-700">
                            <CountUp
                              end={stat.percentage1 || 0}
                              duration={2.5}
                              useEasing={true}
                            />
                          </span>
                          <span className="montserrat font-600">%</span>
                        </span>
                      </div>

                      <div className="flex flex-col">
                        <span className="text-ninth text-20 lg:text-30 font-500">女性</span>
                        <span className="text-ninth text-30 lg:text-40 pl-20%">
                          <span className="montserrat font-700">
                            <CountUp
                              end={stat.percentage2 || 0}
                              duration={2.5}
                              useEasing={true}
                            />
                          </span>
                          <span className="montserrat font-600">%</span>
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {idx === 3 && (
                  <div className="absolute bottom-2% left-0 w-full flex items-center justify-center px-10">
                    <span className="text-secondary text-40 lg:text-80 font-600 text-center">
                      <span className="montserrat font-900 leading-none">
                        <CountUp
                          end={stat.desc || 0}
                          duration={2.5}
                          useEasing={true}
                        />
                      </span>
                      <span className="leading-none">％</span>
                    </span>
                  </div>
                )}

                {idx === 4 && (
                  <div className="absolute bottom-2% left-0 w-full flex items-center justify-center px-10">
                    <span className="text-secondary text-40 lg:text-80 font-600 text-center">
                      <span className="montserrat font-900 text-eighth leading-none">
                        <CountUp
                          end={stat.desc || 0}
                          duration={2.5}
                          useEasing={true}
                        />
                      </span>
                      <span className="leading-none">時間</span>
                    </span>
                  </div>
                )}
              </CounterAnimation>
            ))}
          </div>
        </div>
      </div>
    </Layouts>
  )
}

export default CorporateIntelligence;