import { GlobalSpacing } from '../../components/layouts/layouts';
import recruit1 from '../../assets/image/dashboard/recruit-1.png';
import recruit2 from '../../assets/image/dashboard/recruit-2.png';

const recruitData = [
    {
        description: "2027年度入社採用情報",
        headerTitle: ['RECRUIT', 'INFO'],
        gridSize: {
            w: 1,
            h: 1,
        },
        responseSize: {
            w: 2,
            h: 1
        }
    },
    {
        title: ['募集内容'],
        image: recruit1,
        gridSize: {
            w: 1,
            h: 1
        },
        responseSize: {
            w: 1,
            h: 1
        }
    },
    {
        title1: ["パート・アルバイト", "業務委託", "", "正社員"],
        image: recruit2,
        gridSize: {
            w: 1,
            h: 1
        },
        responseSize: {
            w: 1,
            h: 1
        }
    },
]

const Recruit = () => {
    return (
        <GlobalSpacing>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 gap-20 lg:gap-25 mb-50 lg:mb-100">
                {recruitData.map((item: any, index) => (
                    <div key={index}
                        className={`relative rounded-xl overflow-hidden cursor-pointer aspect-[${item.responseSize?.w}/${item.responseSize?.h}] lg:aspect-[${item.gridSize?.w}/${item.gridSize?.h}] col-span-${item.responseSize?.w} row-span-${item.responseSize?.h} lg:col-span-${item.gridSize?.w} lg:row-span-${item.gridSize?.h} zoom-on-hover`}
                    >
                        {/* Image Section - Absolute positioned */}
                        {item.image && (
                            <div className="absolute inset-0">
                                <img src={item.image} className="w-full h-full object-cover" />
                            </div>
                        )}

                        {/* Content Section - Overlay on image */}
                        {(item.description || item.title || item.title1) && (
                            <div className={`relative z-10 w-full h-full flex flex-col justify-center ${item.image ? 'items-center' : 'items-start'} gap-18 lg:gap-30`}>
                                {/* Description - shown first */}
                                {item.description && (
                                    <div className="text-white text-18 lg:text-25 font-300">
                                        {item.description}
                                    </div>
                                )}
                                {/* Title - shown second */}
                                {item.title && (
                                    <h2 className="font-bold text-white text-20 lg:text-30 font-300">
                                        {Array.isArray(item.title)
                                            ? item.title.map((text: string, i: number) => (
                                                <div key={i}>
                                                    {text ? text : <br />}
                                                </div>
                                            ))
                                            : item.title
                                        }
                                    </h2>
                                )}

                                {/* Title - shown second */}
                                {!!item?.title1 && (
                                    <h2 className="font-bold text-white text-14 lg:text-30 font-300">
                                        {Array.isArray(item?.title1)
                                            ? item.title1.map((text: string, i: number) => (
                                                <div key={i}>
                                                    {text ? text : <br />}
                                                </div>
                                            ))
                                            : item.title1
                                        }
                                    </h2>
                                )}

                                {item.headerTitle && (
                                    <h2 className="font-bold text-white text-50 lg:text-80 font-400 !leading-none">
                                        {item.headerTitle.map((text: string, i: number) => (
                                            <span key={i}>
                                                {text}
                                                {i < item.headerTitle.length - 1 && <br />}
                                            </span>
                                        ))}
                                    </h2>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </GlobalSpacing >
    )
}

export default Recruit;