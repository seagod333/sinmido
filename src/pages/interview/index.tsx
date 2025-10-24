import { memo } from "react";
import { Link } from "react-router-dom";
import { Layouts } from "../../components/layouts/layouts";
import { ComponentsSpacing1, HeaderSpacing } from "../../components/common/index";
import { BackgroundImage, PageHeader, SlideUp, FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "../../components/animation";

import interviewBackgroundImg from "../../assets/image/interview/background.png";
import interviewImg1 from "../../assets/image/interview/interview-1.png";
import interviewImg2 from "../../assets/image/interview/interview-2.png";
import interviewImg3 from "../../assets/image/interview/interview-3.png";
import jobRoleImg1 from "../../assets/image/interview/job-role-1.png";
import jobRoleImg2 from "../../assets/image/interview/job-role-2.png";
import jobRoleImg3 from "../../assets/image/interview/job-role-3.png";
import jobRoleImg4 from "../../assets/image/interview/job-role-4.png";

interface InterviewData {
    id: number;
    image: string;
    name: string;
    nameEn: string;
    department: string;
    joinYear: string;
    quote: string;
    bg: string;
}

interface InterviewCardProps {
    data: InterviewData;
    index: number;
}

interface JobRole {
    id: number;
    image: string;
    title: string;
    desc: string;
    detail: string;
}


// Mock data for interview voices
const interviewData: InterviewData[] = [
    {
        id: 1,
        bg: "bg-twelfth",
        image: interviewImg1,
        name: "辻本 小春",
        nameEn: "TSUJIMOTO KOHARU",
        department: "可のです",
        joinYear: "2022年入社",
        quote: "マーケティング"
    },
    {
        id: 2,
        bg: "bg-eleventh",
        image: interviewImg2,
        name: "仲世古 隆臣",
        nameEn: "NAKASEKO TAKAOMI",
        department: "可のです",
        joinYear: "2024年入社",
        quote: "常務取締役"
    },
    {
        id: 3,
        bg: "bg-thirteenth",
        image: interviewImg3,
        name: "赤井 律子",
        nameEn: "AKAI RITSUKO",
        department: "可のです",
        joinYear: "2024年入社",
        quote: "マーケティング"
    },
];

const jobRolesData: JobRole[] = [
    {
        id: 1,
        image: jobRoleImg1,
        title: "コンサルタント",
        desc: "企業の経営層向けに経営上の課題解決をサポートしたり、人事制度や労務問題についてアドバイスを提供したりします。",
        detail: "(株)シンミドウは、コンサルティング業を中心に、中小企業や地方自治体向けに人材紹介、人材派遣、採用支援、アウトソーシングサービスなどを提供しています。提供している職種には、コンサルタント職種（経営、人事、IT、業務など）、営業、人事、管理職などが含まれると考えられます。",
    },
    {
        id: 2,
        image: jobRoleImg2,
        title: "営業",
        desc: "顧客企業や自治体へのコンサルティング営業を担当します。",
        detail: "(株)シンミドウは、コンサルティング業を中心に、中小企業や地方自治体向けに人材紹介、人材派遣、採用支援、アウトソーシングサービスなどを提供しています。提供している職種には、コンサルタント職種（経営、人事、IT、業務など）、営業、人事、管理職などが含まれると考えられます。",
    },
    {
        id: 3,
        image: jobRoleImg3,
        title: "人事",
        desc: "人事制度の設計や労務管理などの業務に携わります。",
        detail: "(株)シンミドウは、コンサルティング業を中心に、中小企業や地方自治体向けに人材紹介、人材派遣、採用支援、アウトソーシングサービスなどを提供しています。提供している職種には、コンサルタント職種（経営、人事、IT、業務など）、営業、人事、管理職などが含まれると考えられます。",
    },
    {
        id: 4,
        image: jobRoleImg4,
        title: "管理職",
        desc: "チームや組織のマネジメントを行います。",
        detail: "(株)シンミドウは、コンサルティング業を中心に、中小企業や地方自治体向けに人材紹介、人材派遣、採用支援、アウトソーシングサービスなどを提供しています。提供している職種には、コンサルタント職種（経営、人事、IT、業務など）、営業、人事、管理職などが含まれると考えられます。",
    },
];

const InterviewCard = memo(({ data, index }: InterviewCardProps) => {
    return (
        <ScaleIn delay={index * 0.1} duration={0.8} className="w-full">
            <Link to="/interview/details" className="relative bg-white flex flex-col min-h-full max-w-460 m-auto">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                    <FadeIn delay={0.2} duration={0.6} className="w-full">
                        <img src={data.image} alt={data.name}
                            className="w-full rounded-t-lg aspect-[95/100] object-cover"
                        />
                    </FadeIn>
                </div>

                {/* Content */}
                <div className="flex-1 rounded-b-lg border-1 border-t-0 border-secondary">
                    <div className="flex flex-col gap-10 lg:gap-30 px-35 pt-10 lg:pt-35 pb-20 lg:pb-35">
                        <FadeIn delay={0.3} duration={0.6} className="text-14 sm:text-16 text-black">
                            {data.joinYear}
                        </FadeIn>

                        <div className="flex flex-wrap justify-between items-center">
                            <FadeIn delay={0.4} duration={0.6} className="text-18 sx:text-24 lg:text-30 font-600 text-black">
                                {data.name}
                            </FadeIn>

                            <FadeIn delay={0.5} duration={0.6} className="text-10 sx:text-12 lg:text-20 text-eleventh">
                                {data.nameEn}
                            </FadeIn>
                        </div>

                        <FadeIn delay={0.6} duration={0.6} className="text-12 lg:text-18 text-black font-500">
                            {data.department}
                        </FadeIn>
                    </div>
                </div>

                <FadeIn delay={0.7} duration={0.6} className={`absolute top-0 right-0 px-20 py-10 lg:px-45 lg:py-15 ${data.bg} rounded-tr-lg`}>
                    <span className="text-white text-12 lg:text-14">
                        {data.quote}
                    </span>
                </FadeIn>
            </Link>
        </ScaleIn>
    );
});

const JobRoleCard = memo(({ role, index }: { role: JobRole, index: number }) => {
    return (
        <div className="flex flex-col gap-15 lg:gap-50 py-15 lg:py-80 px-15 lg:px-75 bg-white">
            <div className="grid lg:grid-cols-5 gap-15 sx:gap-20 lg:gap-45">
                <div className="lg:col-span-3">
                    <FadeIn delay={0.2} duration={0.6} className="w-full">
                        <img src={role.image} alt={role.title} className="w-full aspect-[6/4] object-cover" />
                    </FadeIn>
                </div>

                <div className="lg:col-span-2 flex flex-col gap-15 sx:gap-20 justify-evenly">
                    <FadeIn delay={0.3} duration={0.6} className="text-20 sx:text-24 lg:text-40 font-500 text-center">
                        {role.title}
                    </FadeIn>

                    <FadeIn delay={0.4} duration={0.6} className="text-12 lg:text-26 font-500 text-center">
                        {role.desc}
                    </FadeIn>
                </div>
            </div>

            <FadeIn delay={0.5} duration={0.6} className="border-t-1 border-black">
                <div />
            </FadeIn>

            <FadeIn delay={0.6} duration={0.6} className="text-10 sx:text-12 lg:text-40 text-black font-500 text-center">
                {role.detail}
            </FadeIn>
        </div>
    );
});

const Interview = memo(() => {
    return (
        <Layouts overflowX>
            <HeaderSpacing className="relative w-full h-full flex items-center justify-center aspect-[2/1] lg:aspect-[3/1] select-none overflow-hidden">
                <BackgroundImage className="w-full h-full absolute top-0 left-0 pointer-events-none select-none">
                    <img src={interviewBackgroundImg}
                        className="w-full h-full object-cover"
                        alt="Corporate Culture"
                    />
                </BackgroundImage>

                <PageHeader delay={0.5} duration={1} className="relative z-10 pb-20 sm:pb-30 lg:pb-40">
                    <FadeIn delay={0.7} duration={0.8} className="text-white text-18 sm:text-20 lg:text-60 font-600 text-center">
                        Interview
                    </FadeIn>
                </PageHeader>
            </HeaderSpacing>

            <ComponentsSpacing1 className="flex flex-col gap-30 sm:gap-50 lg:gap-100 bg-primary overflow-hidden">
                <SlideUp delay={0.3} duration={0.8} className="text-sixth/70 text-20 sm:text-24 lg:text-50 font-600 text-center">
                    シンミドウで働く人たちの声
                </SlideUp>

                {/* Interview Cards Grid */}
                <StaggerContainer className="w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-40 lg:gap-80">
                        {interviewData.map((interview, index) => (
                            <InterviewCard key={interview.id} data={interview} index={index} />
                        ))}
                    </div>
                </StaggerContainer>
            </ComponentsSpacing1>

            <ComponentsSpacing1 className="flex flex-col gap-30 sm:gap-50 lg:gap-100 bg-primary">
                <SlideUp delay={0.3} duration={0.8} className="hidden lg:block text-sixth/70 text-20 sm:text-24 lg:text-50 font-600 text-center">
                    職種紹介
                </SlideUp>

                <div className="w-full flex flex-row gap-10 lg:gap-80">
                    <div className="block w-20 lg:w-84 bg-fourteenth">
                        <FadeIn delay={0.2} duration={0.6} className="w-full h-250 lg:h-500 bg-sixteenth sticky top-75 sm:top-100 lg:top-120">
                            <div />
                        </FadeIn>
                    </div>

                    <div className="flex-1 flex flex-row">
                        <div className="bg-primary pt-30 lg:pt-100">
                            <FadeIn delay={0.3} duration={0.6} className="sticky top-75 sm:top-100 lg:top-120 border-b-33 lg:border-b-90 border-t-33 lg:border-t-90 border-r-20 border-transparent border-r-fourteenth">
                                <div />
                            </FadeIn>
                        </div>

                        <StaggerItem className="flex-1 bg-fourteenth px-13 lg:px-50 py-30 lg:py-60">
                            <div className="grid grid-cols-1 gap-30 sx:gap-40 lg:gap-50">
                                {jobRolesData.map((role, index) => (
                                    <JobRoleCard key={role.id} role={role} index={index} />
                                ))}
                            </div>
                        </StaggerItem>
                    </div>
                </div>
            </ComponentsSpacing1>
        </Layouts>
    );
});

export default Interview;