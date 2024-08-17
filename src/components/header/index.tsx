import { FC } from "react";
import Image from "next/image";
import Logo from "@/assets/img/Logo.svg";
import Search from "@/assets/img/Search.svg";
import Polygon from "@/assets/img/Polygon 2.svg";
import LeagueOfLegends from "@/assets/img/league-of-legends-white.svg";
import "../../app/globals.css";

const Header: FC = () => {
  //   const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <div className="w-full header-bg fixed flex items-center lg:px-[100px] pl-[20px] pr-[40px] justify-between lg:h-[100px] h-[100px]">
        <div className="lg:hidden flex items-center">
          <Image src={Logo} alt="logo" height={50} />
        </div>

        <div className="hidden lg:flex items-center">
          <Image src={Logo} alt="logo" />
        </div>

        <div className="lg:hidden flex flex-col cursor-pointer gap-2">
          <div className="w-[35px] h-[3px] bg-[#FFFFFF] rounded-[4px]"></div>
          <div className="w-[20px] h-[3px] bg-[#FFFFFF] rounded-[4px]"></div>
        </div>

        {/* {isLogin && ( */}
        {/* <div className="hidden lg:flex">
          <div className="ml-[110px] flex">
            <div className="px-[30px] py-[18px] bg-[#FF5C00] rounded-l">
              <Image src={LeagueOfLegends} alt="Vector" />
            </div>
            <div className="px-[18px] py-[18px] bg-[#464F61] rounded-r flex items-center">
              <Image src={Polygon} alt="Polygon" />
            </div>
          </div>
        </div> */}
        {/* )} */}

        <div className="hidden lg:flex ml-[40px] bg-[#1E222A] p-[10px] gap-2 rounded-md border border-[#464F61]">
          <Image src={Search} alt="Search" />
          <input
            className="bg-[#1E222A] w-[240px]"
            placeholder="Search for player, team ..."
          />
        </div>
        <div className="hidden lg:flex gap-[30px] ml-[100px] text-lg">
          <div className="text-[#464F61] font-semibold">MATCHES</div>
          <div className="text-[#464F61] font-semibold">PROPS</div>
          <div className="flex text-[#464F61] font-semibold gap-2">
            <p>TOOLS</p>
            <Image src={Polygon} alt="Polygon" />
          </div>
          <div className="text-[#464F61] font-semibold">PRICING</div>
          <div className="text-[#464F61] font-semibold">BONUSES</div>
        </div>
        <div className="hidden lg:flex text-[#fff] text-lg ml-[70px] gap-6 font-semibold">
          <div className="px-[30px] py-[12px] border border-[#2E3137] rounded-[8px]">
            SIGN UP
          </div>
          <div className="px-[30px] py-[12px] bg-[#FF5C00] border border-[#FFA370] rounded-[8px]">
            SIGN IN
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
