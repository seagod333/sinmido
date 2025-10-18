import instagramIcon from "../../assets/image/icons/instagram.png";
import linkedinIcon from "../../assets/image/icons/linkedin.png";

const Footer = () => {
  return (
    <div className=" md:hidden grid grid-cols-3">
      <div className="sm:px-15 sm:py-15 px-10 py-10 bg-white flex flex-col justify-center">
        <div className="text-10 sm:text-12 text-center">
          2027年度新卒採用
        </div>

        <div className="text-12 sm:text-16 text-center">
          MY PAGE
        </div>
      </div>

      <div className="bg-textSecondary text-white text-center">
        <div className="text-10 px-10 py-5 sm:px-15 sm:py-10 border-b border-white">
          企業文化
        </div>

        <div className="text-10 px-10 py-5 sm:px-15 sm:py-10 border-b border-white">
          仕事内容
        </div>

        <div className="text-10 px-10 py-5 sm:px-15 sm:py-10 border-b border-white">
          募集要項
        </div>

        <div className="text-10 px-10 py-5 sm:px-15 sm:py-10">
          インタビュー
        </div>
      </div>

      <div className="bg-black flex flex-row">
        <div className="flex-1 flex flex-col items-center justify-center border-r border-white">
          <div className="p-5 sm:p-7 border border-white rounded-full cursor-pointer">
            <img src={instagramIcon} alt="instagram" className="sm:w-16 sm:h-16 w-12 h-12" />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="p-5 sm:p-7 border border-white rounded-full cursor-pointer">
            <img src={linkedinIcon} alt="linkedin" className="sm:w-16 sm:h-16 w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;