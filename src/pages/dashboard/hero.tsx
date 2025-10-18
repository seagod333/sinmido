import { GlobalSpacing } from '../../components/layouts/layouts';
import heroVideo from "../../assets/video/名称未設定のデザイン.mp4";
import heroVideoThumb from "../../assets/video/名称未設定のデザイン-thumb.png";
// import leadsLocal from '../../assets/image/dashboard/leads-local.png';
import news1 from '../../assets/image/dashboard/news-1.png';
import news2 from '../../assets/image/dashboard/news-2.png';
import news3 from '../../assets/image/dashboard/news-3.png';
import news4 from '../../assets/image/dashboard/news-4.png';
import news5 from '../../assets/image/dashboard/news-5.png';
import news6 from '../../assets/image/dashboard/news-6.png';
import news7 from '../../assets/image/dashboard/news-7.png';
import news8 from '../../assets/image/dashboard/news-8.png';
import news9 from '../../assets/image/dashboard/news-9.png';
import news10 from '../../assets/image/dashboard/news-10.png';
import news11 from '../../assets/image/dashboard/news-11.png';
import news12 from '../../assets/image/dashboard/news-12.png';
import './hero.scss';

const heroNews = [
    {
        center: false,
        reactAnimation: false,
        size: { w: 3, h: 2, response: { w: 2, h: 1.5 } },
        video: heroVideo,
        videoThumb: heroVideoThumb,
    },
    {
        center: false,
        reactAnimation: true,
        size: { w: 1, h: 1, response: { w: 1, h: 1 } },
        img: news1,
        headerTitle: "#ENTRY",
        bodyTitle: {
            title: ["2025.9.24", "START!!"],
            desc: ["2025年9月24日", "海外大選考エントリー開始"]
        },
        color: 'textSecondary',
        reverseColor: 'textThird'
    },
    {
        center: true,
        reactAnimation1: true,
        size: { w: 1, h: 1, response: { w: 1, h: 1 } },
        img: news2,
        bodyTitle: {
            subTitle: [
                "Sinmido",
                "採用公式",
                "Instagram"
            ]
        },
        color: 'textPrimary',
    },
    {
        center: false,
        reactAnimation: false,
        size: { w: 1, h: 1, response: { w: 1, h: 1 } },
        img: news3,
        headerTitle: "#PHILOSOPHY",
        footerTitle: "企業理念",
        color: 'textPrimary',
    },
    {
        center: true,
        reactAnimation: true,
        size: { w: 1, h: 1, response: { w: 1, h: 1 } },
        img: news4,
        bodyTitle: {
            desc: ["#Morning with Sinmido"],
            subTitle: ["社員訪問案内"]
        },
        color: 'textSecondary',
    },
    {
        center: true,
        reactAnimation: true,
        size: { w: 1, h: 1, response: { w: 1, h: 1 } },
        img: news5,
        bodyTitle: {
            desc: ["#About Sinmido"],
            subTitle: ["企業情報"]
        },
        color: 'textSecondary',
    },
    {
        center: true,
        reactAnimation: false,
        size: { w: 1, h: 1, response: { w: 1, h: 1 } },
        img: news6,
        bodyTitle: {
            subTitle: ["募集要項"]
        },
        color: 'textPrimary',
    },
    {
        center: false,
        reactAnimation: false,
        size: { w: 1, h: 2, response: { w: 2, h: 1 } },
        title: "NEWS",
        items: [
            {
                subTitle: "2025.10.9",
                title: "対談2-3：常務×中途1年目"
            }, {
                subTitle: "2025.10.9",
                title: "対談2-3：常務×中途1年目"
            }, {
                subTitle: "2025.10.9",
                title: "対談2-3：常務×中途1年目"
            }, {
                subTitle: "2025.10.9",
                title: "対談2-3：常務×中途1年目"
            }
        ],
        color: 'textPrimary',
    },
    {
        center: true,
        reactAnimation: false,
        size: { w: 1, h: 1, response: { w: 1, h: 1 } },
        img: news7,
        bodyTitle: {
            subTitle: ["インタビュー"]
        },
        color: 'textPrimary',
    },
    {
        center: true,
        reactAnimation: false,
        size: { w: 1, h: 1, response: { w: 1, h: 1 } },
        img: news8,
        bodyTitle: {
            subTitle: ["ホワイトペーパー"]
        },
        color: 'textPrimary',
    },
    {
        center: true,
        reactAnimation: false,
        size: { w: 1, h: 1, response: { w: 1, h: 1 } },
        img: news9,
    },
    {
        center: true,
        reactAnimation: false,
        size: { w: 1, h: 1, response: { w: 1, h: 1 } },
        img: news10,
        bodyTitle: {
            subTitle: ["仕事内容"]
        },
        color: 'textPrimary',
    },
    {
        center: true,
        reactAnimation: false,
        size: { w: 1, h: 1, response: { w: 1, h: 1 } },
        img: news11,
        bodyTitle: {
            subTitle: ["働く環境・制度"]
        },
        color: 'textPrimary',
    },
    {
        center: true,
        reactAnimation: false,
        size: { w: 1, h: 1, response: { w: 1, h: 1 } },
        img: news12,
        bodyTitle: {
            subTitle: ["コラム"]
        },
        color: 'textPrimary',
    }
]

const Hero = () => {
    return (
        <GlobalSpacing>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-20 lg:gap-40">
                {heroNews.map((item, index) => (
                    <div key={index}
                        className={`${item?.color ? `text-${item.color}` : ``} ${item?.reverseColor ? `hover:text-${item.reverseColor}` : ``} rounded-xl overflow-hidden cursor-pointer aspect-[${item.size.response.w}/${item.size.response.h}] lg:aspect-[${item.size.w}/${item.size.h}] col-span-${item.size.response.w} row-span-${item.size.response.h} lg:col-span-${item.size.w} lg:row-span-${item.size.h} ${item.reactAnimation ? 'react-animation' : item.reactAnimation1 ? 'react-animation-1' : ''} ${item?.reverseColor ? `bg-${item?.reverseColor} hover:bg-${item.color}` : ``} ${!item?.img ? `aspect-auto` : ''}`}
                    >
                        {item.img ? (
                            <div className={`relative w-full h-full px-15 py-15 lg:px-30 lg:py-25 overflow-hidden flex flex-col justify-between zoom-on-hover ${item.center ? 'items-center' : 'items-start'} ${item.reactAnimation ? 'react-animation-content' : item.reactAnimation1 ? 'react-animation-content-1' : ''}`}>
                                {!item?.reverseColor && (
                                    <img src={item.img}
                                        alt={`News item ${index + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                )}

                                <span className="relative z-10 text-10 sm:text-12 lg:text-15 font-600">
                                    {item?.headerTitle}
                                </span>


                                {/* Body Title */}
                                {item.bodyTitle && (
                                    <div className={`relative z-10 ${item.center ? 'text-center' : ''}`}>
                                        {item.bodyTitle.title && (
                                            <div className="space-y-2">
                                                {item.bodyTitle.title.map((title, idx) => (
                                                    <div key={idx} className="text-15 sm:text-20 lg:text-40 font-600">
                                                        {title}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {item.bodyTitle.desc && (
                                            <div className="space-y-1 mt-2">
                                                {item.bodyTitle.desc.map((desc, idx) => (
                                                    <div key={idx} className="text-10 sm:text-12 lg:text-15 font-400">
                                                        {desc}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {item.bodyTitle.subTitle && (
                                            <div className="space-y-1">
                                                {item.bodyTitle.subTitle.map((subTitle, idx) => (
                                                    <div key={idx} className="text-15 sm:text-20 lg:text-30 font-500">
                                                        {subTitle}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}

                                <span className="relative z-10 text-10 sm:text-15 lg:text-25 font-500">
                                    {item?.footerTitle}
                                </span>
                            </div>
                        ) : item.video ? (
                            <div className={`relative w-full h-full overflow-hidden flex flex-col`}>
                                <video src={item.video} poster={item.videoThumb} autoPlay muted loop
                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-fill scale-x-[113%] scale-y-[105%]"
                                />
                            </div>
                        ) : (
                            <div className={`text-background w-full h-full overflow-hidden flex flex-col gap-10 sm:gap-20 lg:gap-30`}>
                                <h3 className="text-20 sm:text-25 lg:text-35 font-600">
                                    {item.title}
                                </h3>

                                {item.items && (
                                    <div className="flex-1 flex flex-col gap-10 lg:gap-30">
                                        {item.items.map((newsItem, idx) => (
                                            <div key={idx} className="flex flex-col gap-5 lg:gap-10">
                                                <div className="text-10 lg:text-18 font-400">
                                                    {newsItem.subTitle}
                                                </div>
                                                <div className="text-15 lg:text-25 font-500">
                                                    {newsItem.title}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </GlobalSpacing>
    )
}

export default Hero;