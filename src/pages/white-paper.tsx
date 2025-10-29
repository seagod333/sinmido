import React, { memo } from "react";
import { Link } from "gatsby";
import { BackgroundImage, FadeIn, HeaderSpacing, Layouts, SlideUp, StaggerContainer } from "../components";
import whitePaperBackgroundImg from "../assets/image/white-paper/background.png";
import itemImg1 from "../assets/image/white-paper/item-1.png";
import itemImg2 from "../assets/image/white-paper/item-2.png";
import itemImg3 from "../assets/image/white-paper/item-3.png";
import itemImg4 from "../assets/image/white-paper/item-4.png";
import itemImg5 from "../assets/image/white-paper/item-5.png";
import itemImg6 from "../assets/image/white-paper/item-6.png";
import itemImg7 from "../assets/image/white-paper/item-7.png";
import itemImg8 from "../assets/image/white-paper/item-8.png";
import itemImg9 from "../assets/image/white-paper/item-9.png";
import buttonIcon from "../assets/image/white-paper/button-icon.png";

// Types
interface NavItem {
    id: string;
    label: string;
    link: string;
}

interface ContentCard {
    id: string;
    category: string;
    thumbnailUrl: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
}

interface SectionData {
    heading: string;
    cards: ContentCard[];
}

// Constants
const PAGE_TITLE = "ホワイトペーパー";
const BUTTON_DOWNLOAD_TEXT = "この資料を選択する";

// Mock Data
const navItems: NavItem[] = [
    { id: 'recruitment', label: '採用', link: '/recruitment' },
    { id: 'case-studies', label: '導入事例集', link: '/case-studies' },
    { id: 'product-brochure', label: '製品パンフレット', link: '/product-brochure' },
    { id: 'marketing', label: 'マーケティング', link: '/marketing' },
];

const contentCards: ContentCard[] = [
    {
        id: 'recruitment-1',
        category: 'recruitment',
        thumbnailUrl: itemImg1,
        title: '内定辞退を防ぐ施策3選（内定承諾～入社編）',
        description: '内定承諾後から入社までの期間は、企業にとって最も重要な「内定者フォロー期間」です。この期間の対応次第で、優秀な人材の確保が決まります。本資料では、シンミドウが厳選した、内定辞退を効果的に防ぐ3つの実践的施策を詳しく解説しています。',
        buttonText: BUTTON_DOWNLOAD_TEXT,
        buttonLink: '/download/recruitment-1'
    },
    {
        id: 'recruitment-2',
        category: 'recruitment',
        thumbnailUrl: itemImg2,
        title: 'インスタグラム広告 成功 & 失敗事例3選',
        description: '内定通知から内定承諾までの期間は、企業にとって最も重要な「内定者の意思決定期間」です。この期間の対応次第で、優秀な人材の獲得が決まります。本資料では、シンミドウが厳選した、内定承諾率を効果的に向上させる3つの実践的施策を詳しく解説しています。',
        buttonText: BUTTON_DOWNLOAD_TEXT,
        buttonLink: '/download/recruitment-2'
    },
    {
        id: 'case-study-1',
        category: 'case-studies',
        thumbnailUrl: itemImg3,
        title: 'Instagram 広告成功＆失敗事例 3選',
        description: 'nstagramの広告を打って集客をしたい！そう考えたことのある企業様は多いと思います。しかしながら、ただ広告を出すだけでは期待した効果は得られないかもしれません。本書では、実際の企業様の実例をもとに、押さえておきたい成功＆失敗事例をご紹介しています。',
        buttonText: BUTTON_DOWNLOAD_TEXT,
        buttonLink: '/download/case-study-1'
    },
    {
        id: 'case-study-2',
        category: 'case-studies',
        thumbnailUrl: itemImg4,
        title: '企業のブランディングを成功させる2大原則とは？',
        description: 'ブランディングが大切なのは知っているけどなかなか踏み切れない。そんな工務店様にお届けする本資料は、ブランディングを成功させるために絶対外せない2大原則をOK事例/NG事例を用いてわかりやすく解説します。',
        buttonText: BUTTON_DOWNLOAD_TEXT,
        buttonLink: '/download/case-study-2'
    },
    {
        id: 'product-1',
        category: 'product-brochure',
        thumbnailUrl: itemImg5,
        title: '【シンミミドウ】公式パンフレット',
        description: '株式会社シンミミドウの事業内容やサービスに関する情報を網羅した公式パンフレットです。当社の強みやお客様への提供価値、そしてこれまでの実績について、分かりやすくご紹介しています。\nシンミミドウの取り組みにご興味をお持ちの方、具体的なサービス内容について詳しく知りたい方は、ぜひダウンロードしてご覧ください。',
        buttonText: BUTTON_DOWNLOAD_TEXT,
        buttonLink: '/download/product-1'
    },
    {
        id: 'product-2',
        category: 'product-brochure',
        thumbnailUrl: itemImg6,
        title: '一気に多媒体に自動掲載ができるシステム！『採用DXTaskaru』求人運用のコツ',
        description: '求人を出したのに応募が全く来ない、、、こんな悩みを抱えていませんか？そんな企業様必見のノウハウが詰まった資料です！採用に時間をかけたくないご担当者様へ。\n求人ページ掲載の問題や悩みを解決しましょう♪',
        buttonText: BUTTON_DOWNLOAD_TEXT,
        buttonLink: '/download/product-2'
    },
    {
        id: 'marketing-1',
        category: 'marketing',
        thumbnailUrl: itemImg7,
        title: '独自ノウハウ公開！Instagram運用の極意',
        description: 'Instagramを活用した集客はもはや常識。50社超の工務店様のInstagramを運用支援したシンミドウだからできた、独自ノウハウが詰まった資料の無料お試し版です。',
        buttonText: BUTTON_DOWNLOAD_TEXT,
        buttonLink: '/download/marketing-1'
    },
    {
        id: 'marketing-2',
        category: 'marketing',
        thumbnailUrl: itemImg8,
        title: '感動してもらえるプレゼンへ！ご提案資料簡単作成フォーマット',
        description: '提案書は間取り図のみ！そんなことになっていませんか？簡単なフォーマットに、どのようなプランを、どのような想いで作ったのかを書き込んだ資料を作るだけで、お客様の納得度も、満足感も、格段に向上させることができます。マネするだけでプラン修正の回数が一気に減らせる、便利なフォーマットです。',
        buttonText: BUTTON_DOWNLOAD_TEXT,
        buttonLink: '/download/marketing-2'
    },
    {
        id: 'marketing-3',
        category: 'marketing',
        thumbnailUrl: itemImg9,
        title: '大満足ボリューム！素材・状況別お家のお手入れマニュアル',
        description: 'お家のお手入れマニュアルの完全版！お家における、全13か所のお手入れ方法を、素材・構造・状況別に記載しています。さらに、害虫や災害への対策についても書かれた、お家を守るための必須本です。一家に一冊置いておきたい、心強い主婦の味方です。',
        buttonText: BUTTON_DOWNLOAD_TEXT,
        buttonLink: '/download/marketing-3'
    }
];

const sectionsData: SectionData[] = [
    {
        heading: '採用',
        cards: contentCards.filter(card => card.category === 'recruitment')
    },
    {
        heading: '導入事例集',
        cards: contentCards.filter(card => card.category === 'case-studies')
    },
    {
        heading: '製品パンフレット',
        cards: contentCards.filter(card => card.category === 'product-brochure')
    },
    {
        heading: 'マーケティング',
        cards: contentCards.filter(card => card.category === 'marketing')
    }
];

// Memoized Components
const SectionHeader = memo(({ title, className = "" }: { title: string, className?: string }) => (
    <SlideUp delay={0} duration={0.7}
        className={`text-sixth text-15 sm:text-20 lg:text-40 font-600 text-center ${className}`}
    >
        {title}
    </SlideUp>
));

const NavItem = memo(({ item }: { item: NavItem }) => (
    <Link key={item.id} to="/" className="text-black hover:text-secondary transition-colors duration-200">
        <span className="text-15 sx:text-24 lg:text-40 font-500">
            {item.label}
        </span>
    </Link>
));

const ContentCard = memo(({ card }: { card: ContentCard }) => (
    <div className="flex flex-col gap-35 lg:gap-35 px-30 lg:px-40 py-20 lg:py-25 pb-30 lg:pb-40 bg-twentyth rounded-10 overflow-hidden">
        {/* Card Image */}
        <FadeIn delay={0.2} duration={0.6}>
            <div className="aspect-[5/3] overflow-hidden p-5">
                <img src={card.thumbnailUrl} className="w-full h-full rounded-5 object-contain" alt={card.title} />
            </div>
        </FadeIn>

        {/* Card Content */}
        <FadeIn delay={0.3} duration={0.6}>
            <h3 className="text-primary text-12 sx:text-16 lg:text-24 font-500">
                {card.title}
            </h3>
        </FadeIn>

        <FadeIn delay={0.4} duration={0.6}>
            <p className="flex-1 text-primary text-10 sx:text-12 lg:text-20 font-500 leading-relaxed">
                {card.description}
            </p>
        </FadeIn>

        <FadeIn delay={0.5} duration={0.6}>
            <div className="flex items-center justify-center">
                <Link to="/" className="flex items-center justify-center gap-10 px-10 sx:px-25 py-10 sx:py-20 bg-primary rounded-5 hover:bg-primary/90 transition-colors duration-200">
                    <img src={buttonIcon} className="w-18 h-18" alt="Download" />
                    <div className="text-16 text-twentyth">
                        {card.buttonText}
                    </div>
                </Link>
            </div>
        </FadeIn>
    </div>
));

const ContentSection = memo(({ section }: { section: SectionData }) => (
    <div className="flex flex-col gap-25 lg:gap-55">
        {/* Section Heading */}
        <FadeIn delay={0.2} duration={0.6}>
            <h2 className="text-30 lg:text-60 font-500">
                {section.heading}
            </h2>
        </FadeIn>

        {/* Content Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-25 lg:gap-45">
            {section.cards.map((card) => (
                <ContentCard key={card.id} card={card} />
            ))}
        </StaggerContainer>
    </div>
));

const WhitePaper = () => {
    return (
        <Layouts>
            <HeaderSpacing className="relative w-full h-full flex items-center justify-center aspect-[2/1] lg:aspect-[19/6] select-none overflow-hidden">
                <BackgroundImage className="w-full h-full object-cover absolute top-0 left-0 pointer-events-none select-none">
                    <img src={whitePaperBackgroundImg} className="w-full h-full object-cover" alt="White Paper Background" />
                </BackgroundImage>
                <div className="relative z-10 pb-20 sm:pb-30 lg:pb-40">
                    <FadeIn delay={0.5} duration={1} className="text-white text-18 sm:text-20 lg:text-60 font-600 text-center">
                        {PAGE_TITLE}
                    </FadeIn>
                </div>
            </HeaderSpacing>

            {/* Navigation Menu */}
            <div className="bg-white lg:bg-fifth px-20 py-45 lg:py-65">
                <StaggerContainer className="flex flex-col md:flex-row items-center justify-center gap-20 lg:gap-30">
                    {navItems.map((item, index) => (
                        <NavItem key={index} item={item} />
                    ))}
                </StaggerContainer>
            </div>

            {/* Content Sections */}
            <div className="bg-fifth px-20 lg:px-150 py-45 lg:py-65">
                <div className="flex flex-col gap-25 lg:gap-55">
                    {sectionsData.map((section) => (
                        <ContentSection key={section.heading} section={section} />
                    ))}
                </div>
            </div>
        </Layouts>
    )
}

export default WhitePaper;