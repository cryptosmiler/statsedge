import { FC } from "react";
import Image from "next/image";
import Frame3 from "@/assets/img/Frame 3.svg";
import Frame4 from "@/assets/img/Frame 4.svg";
import Frame41 from "@/assets/img/Frame 41.svg";
import LeagueOfLegends from "@/assets/img/league-of-legends-white.svg";
import Line2 from "@/assets/img/Line 2.svg";
import Subtract from "@/assets/img/Subtract.svg";
import Header from "@/components/header";
import "../../app/globals.css";

const Matches: FC = () => {
  return (
    <>
      <Header />
      <main className="w-full background-img">
        <div className="w-full main-bg h-[calc(100vh-100px)]">
          <div className="bg-black bg-opacity-90 h-[calc(100vh-100px)]">
            <div className="px-[100px] py-[60px]">
              <div className="flex">
                <div className="flex text-sm gap-4 font-semibold">
                  <div className="text-[#464F61]">MYEDGE</div>
                  <div className="text-[#464F61]">/</div>
                  <div className="text-[#464F61]">MATCHES</div>
                  <div className="text-[#464F61]">/</div>
                  <div className="text-[#fff] font-medium">
                    REBELS VS RIDERS
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-[45px] text-[#EAEEF7] font-semibold">
                  UPCOMING LEAGUE OF LEGENDS MATCHES
                </div>
                <div className="flex bg-[#131519] rounded-[8px] font-semibold">
                  <div className="px-2 py-1">
                    <div className="flex text-sm">
                      <div className="bg-[#4FD5FF] text-[#214D5B] px-[17px] py-[8px] rounded">
                        UPCOMING
                      </div>
                      <div className="text-[#214D5B] px-[17px] py-[8px] rounded">
                        FINISHED
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-[70px]">
                <input type="checkbox" className="bg-[#4FD5FF]" />
                <div className="text-[#fff] text-lg font-semibold">
                  TUESDAY, DECEMBER 5 2024
                </div>
              </div>

              <div className="flex flex-col mt-[25px] font-semibold gap-3">
                <div className="bg-[#000] flex p-[20px] items-center rounded-lg bg-gradient-to-r from-[#212728] to-[#131519]">
                  <Image src={LeagueOfLegends} alt="Vector" />
                  <div className="px-2 py-1 text-[#EAEEF7] bg-[#22262E] ml-[80px] rounded-lg">
                    B03
                  </div>
                  <Image src={Line2} alt="Line" className="ml-[70px]" />
                  <Image src={Frame3} alt="Frame3" className="ml-[70px]" />
                  <div className="text-[#EAEEF7] ml-[20px]">FNATIC</div>
                  <Image src={Subtract} alt="Subtract" className="ml-[45px]" />
                  <Image src={Frame4} alt="Frame4" className="ml-[45px]" />
                  <div className="text-[#EAEEF7] ml-[20px]">TEAM VITALITY</div>
                  <Image src={Frame41} alt="Frame41" className="ml-[35px]" />
                  <div className="text-[#464F61] ml-[10px]">
                    ESL Chalenger League Season 44 Europe
                  </div>
                  <Image src={Line2} alt="Line" className="ml-[210px]" />
                  <div className="text-[#4FD5FF] ml-[210px]">22:45 PM</div>
                </div>

                <div className="bg-[#000] flex p-[20px] items-center rounded-lg bg-gradient-to-r from-[#212728] to-[#131519]">
                  <Image src={LeagueOfLegends} alt="Vector" />
                  <div className="px-2 py-1 text-[#EAEEF7] bg-[#22262E] ml-[80px] rounded-lg">
                    B03
                  </div>
                  <Image src={Line2} alt="Line" className="ml-[70px]" />
                  <Image src={Frame3} alt="Frame3" className="ml-[70px]" />
                  <div className="text-[#EAEEF7] ml-[20px]">FNATIC</div>
                  <Image src={Subtract} alt="Subtract" className="ml-[45px]" />
                  <Image src={Frame4} alt="Frame4" className="ml-[45px]" />
                  <div className="text-[#EAEEF7] ml-[20px]">TEAM VITALITY</div>
                  <Image src={Frame41} alt="Frame41" className="ml-[35px]" />
                  <div className="text-[#464F61] ml-[10px]">
                    ESL Chalenger League Season 44 Europe
                  </div>
                  <Image src={Line2} alt="Line" className="ml-[210px]" />
                  <div className="text-[#4FD5FF] ml-[210px]">22:45 PM</div>
                </div>

                <div className="bg-[#000] flex p-[20px] items-center rounded-lg bg-gradient-to-r from-[#212728] to-[#131519]">
                  <Image src={LeagueOfLegends} alt="Vector" />
                  <div className="px-2 py-1 text-[#EAEEF7] bg-[#22262E] ml-[80px] rounded-lg">
                    B03
                  </div>
                  <Image src={Line2} alt="Line" className="ml-[70px]" />
                  <Image src={Frame3} alt="Frame3" className="ml-[70px]" />
                  <div className="text-[#EAEEF7] ml-[20px]">FNATIC</div>
                  <Image src={Subtract} alt="Subtract" className="ml-[45px]" />
                  <Image src={Frame4} alt="Frame4" className="ml-[45px]" />
                  <div className="text-[#EAEEF7] ml-[20px]">TEAM VITALITY</div>
                  <Image src={Frame41} alt="Frame41" className="ml-[35px]" />
                  <div className="text-[#464F61] ml-[10px]">
                    ESL Chalenger League Season 44 Europe
                  </div>
                  <Image src={Line2} alt="Line" className="ml-[210px]" />
                  <div className="text-[#4FD5FF] ml-[210px]">22:45 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Matches;
