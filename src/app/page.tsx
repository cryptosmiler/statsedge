import { FC } from "react";
import Image from "next/image";
import Header from "@/components/header";
import CounterStrike2 from "@/assets/img/counter-strike2.svg";
import Valorant from "@/assets/img/valorant.svg";
import RocketLeague from "@/assets/img/rocket-league.svg";
import Dota2 from "@/assets/img/dota2.svg";
import CallOfDuty from "@/assets/img/call-of-duty.svg";
import LeagueOfLegends from "@/assets/img/league-of-legends-gray.svg";
import HistoricalStats from "@/assets/img/historical-stats.webp";
import LiveGameScore from "@/assets/img/live-game-score.webp";
import Separator from "@/assets/img/Group 6954.svg";
import LeftFrame from "@/assets/img/dfs-optimizer.webp";
import RightFrame from "@/assets/img/dfs-projections.webp";
import Plus from "@/assets/img/plus-icon.svg";
import Minus from "@/assets/img/minus-icon.svg";
import Logo from "@/assets/img/Logo.svg";
import Twitter from "@/assets/img/twitter.svg";
import Instagram from "@/assets/img/instagram.svg";
import Discord from "@/assets/img/discord.svg";
import Facebook from "@/assets/img/facebook.svg";
import FantasyTools from "@/assets/img/fantasy-tools.webp";

const Home: FC = () => {
  return (
    <>
      <main className="background-img w-full">
        <Header />

        <div className="w-full main-bg min-h-screen">
          <div className="bg-black bg-opacity-90 h-[calc(100vh-100px)] w-full z-10">
            {/* ----- Begin Hero ----- */}
            <div className="p-[20px] lg:px-[200px] flex flex-col gap-8 lg:gap-4 w-full bg-[#0B0C0D] lg:bg-transparent">
              <div className="w-[100px] h-[8px] bg-[#FF5C00] mt-[200px]"></div>
              <div className="flex justify-between items-center">
                <div className="text-[48px] lg:text-[90px] text-[#EAEEF7] font-extrabold leading-none tracking-tighter">
                  <div>YOUR ULTIMATE</div>
                  <div>DESTINATION FOR</div>
                  <div>PRO ESPORTS STATS</div>
                </div>
              </div>

              <div className="text-[18px] font-extrabold text-[#464F61] tracking-tighter leading-none">
                We provide you with the most comprehensive and up to date stats
                for professional <br className="hidden lg:block" /> esports
                players in popular games like CS2, Dota2 and League of Legends
              </div>

              <div className="flex flex-col justify-center lg:justify-normal lg:flex lg:flex-row gap-6 items-center">
                <button className="w-full lg:w-fit px-[30px] py-[12px] bg-[#4FD5FF] text-[16px] rounded-[8px] cursor-pointer">
                  TRY IT FOR FREE
                </button>
                <div className="flex flex-col lg:text-start text-center">
                  <div className="text-[#EAEEF7] text-[30px]">+200.000</div>
                  <div className="text-[#464F61] text-[18px] tracking-tighter">
                    MATCHES ANALYZED IN 5 DAYS
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-12 lg:flex justify-between mt-20">
                <Image
                  src={LeagueOfLegends}
                  alt="LeagueOfLegends"
                  height={41}
                />
                <Image src={Dota2} alt="Dota2" height={21} />
                <Image src={Valorant} alt="Valorant" height={24} />
                <Image src={RocketLeague} alt="RocketLeague" height={35} />
                <Image src={CallOfDuty} alt="CallOfDuty" height={27} />
                <Image src={CounterStrike2} alt="CounterStrike2" height={35} />
              </div>
            </div>
            {/* ----- End Hero ----- */}

            {/* ----- Begin HistoricalStats ----- */}
            <div className="lg:px-[250px] py-[200px] flex flex-col lg:flex lg:flex-row justify-between items-center bg-[#0B0C0D] border-b border-[#272A2E] w-full">
              <div className="w-full lg:w-auto p-[30px] lg:p-0">
                <div className="flex flex-col">
                  <div className="w-[86px] h-[4px] bg-[#4FD5FF]"></div>

                  <div className="text-[#EAEEF7] text-[45px]">
                    HISTORICAL STATS
                  </div>
                  <div className="text-[#464F61] font-semibold text-[18px]">
                    From the names of the matches to the weapons{" "}
                    <br className="hidden lg:block" /> used to commit each
                    murder.
                  </div>
                </div>
              </div>
              <div className="p-[30px] lg:p-0">
                <Image src={HistoricalStats} alt="HistoricalStats" />
              </div>
            </div>
            {/* ----- End HistoricalStats ----- */}

            {/* ----- Begin LiveGameScore ----- */}
            <div className="lg:px-[250px] py-[100px] flex flex-col lg:flex lg:flex-row justify-between items-center bg-[#0B0C0D] border-b border-b-[#272A2E] w-full">
              <div className="lg:hidden flex w-full p-[30px]">
                <div className="flex flex-col lg:hidden">
                  <div className="w-[86px] h-[4px] bg-[#4FD5FF]"></div>

                  <div className="text-[#EAEEF7] text-[45px]">
                    LIVE GAME SCORES
                  </div>
                  <div className="text-[#464F61] font-semibold text-[18px]">
                    From first seasons to live games - always{" "}
                    <br className="hidden lg:block" /> up-to-date information
                  </div>
                </div>
              </div>
              <div className="p-[30px] lg:p-0">
                <Image src={LiveGameScore} alt="Vector" />
              </div>
              <div className="hidden lg:flex flex-col absolute right-[450px] mb-12">
                <div className="w-[86px] h-[4px] bg-[#4FD5FF]"></div>

                <div className="text-[#EAEEF7] text-[45px]">
                  LIVE GAME SCORES
                </div>
                <div className="text-[#464F61] font-semibold text-[18px]">
                  From first seasons to live games - always{" "}
                  <br className="hidden lg:block" /> up-to-date information
                </div>
              </div>
            </div>
            {/* ----- End LiveGameScore ----- */}

            {/* ----- Begin FANTASYTOOLS ----- */}
            <div className="lg:px-[250px] py-[100px] flex flex-col lg:flex lg:flex-row justify-between items-center bg-[#0B0C0D] border-b-[#272A2E] w-full">
              <div className="lg:hidden flex w-full p-[30px]">
                <div className="flex flex-col">
                  <div className="w-[86px] h-[4px] bg-[#4FD5FF]"></div>

                  <div className="text-[#EAEEF7] text-[45px] w-full">
                    FANTASY TOOLS
                  </div>
                  <div className="text-[#464F61] font-semibold text-[18px]">
                    Calendar of all upcoming matches and information{" "}
                    <br className="hidden lg:block" />
                    about them, as well as data on past matches.
                  </div>
                </div>
              </div>
              <div className="lg:flex flex-col hidden">
                <div className="w-[86px] h-[4px] bg-[#4FD5FF]"></div>

                <div className="text-[#EAEEF7] text-[45px] w-full">
                  FANTASY TOOLS
                </div>
                <div className="text-[#464F61] font-semibold text-[18px]">
                  Calendar of all upcoming matches and information{" "}
                  <br className="hidden lg:block" />
                  about them, as well as data on past matches.
                </div>
              </div>
              <div className="flex flex-col gap-2 p-[30px]">
                <Image src={FantasyTools} alt="MidNiko" />
              </div>
            </div>
            {/* ----- End FANTASYTOOLS ----- */}

            <Image
              src={Separator}
              alt="Separator"
              className="bg-[#0B0C0D] w-[120%]"
            />

            {/* ----- Begin Frames ----- */}

            <div className="flex flex-col lg:flex lg:flex-row gap-6 bg-[#0B0C0D] p-[30px] lg:px-[200px] justify-center w-full">
              <div className="flex flex-col gap-6">
                <Image src={LeftFrame} alt="LeftFrame" width={800} />
                <div className="flex flex-col gap-1">
                  <div className="text-[32px] text-[#EAEEF7]">
                    DFS OPTIMIZER
                  </div>
                  <div className="text-[16px] text-[#464F61]">
                    From the names of the matches to the weapons used to commit
                    each murder.
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <Image src={RightFrame} alt="RightFrame" width={800} />
                <div className="flex flex-col gap-1">
                  <div className="text-[32px] text-[#EAEEF7]">
                    DFS PROJECTIONS
                  </div>
                  <div className="text-[16px] text-[#464F61]">
                    From the names of the matches to the weapons used to commit
                    each murder.
                  </div>
                </div>
              </div>
            </div>

            {/* ----- End Frames ----- */}

            <div className="px-[30px] lg:px-[200px] py-[100px] bg-[#0B0C0D]">
              <div className="hidden lg:flex flex-col p-8 gap-4 getstarted-bg-desktop justify-center rounded-[8px]">
                <div className="text-[#EAEEF7] font-bold text-[32px]">
                  GET STARTED TODAY
                </div>
                <div className="text-[#464F61] font-semibold text-[18px]">
                  Sign up today and unlock the power of esports data!
                </div>
                <button className="bg-[#FF5C00] text-[#FFE0CE] text-[16px] font-bold px-[30px] py-[12px] w-[235px] rounded-[8px] cursor-pointer">
                  JOIN NOW
                </button>
              </div>

              <div className="lg:hidden flex flex-col p-8 gap-4 getstarted-bg-mobile justify-center rounded-[8px]">
                <div className="text-[#EAEEF7] font-bold text-[32px]">
                  GET STARTED TODAY
                </div>
                <div className="text-[#464F61] font-semibold text-[18px]">
                  Sign up today and unlock the power of esports data!
                </div>
                <button className="bg-[#FF5C00] text-[#FFE0CE] text-[16px] font-bold px-[30px] py-[12px] w-[235px] rounded-[8px] cursor-pointer">
                  JOIN NOW
                </button>
              </div>
            </div>

            {/* ----- Begin FAQ ----- */}

            <div className="flex lg:flex-row flex-col px-[30px] lg:px-[200px] py-[100px] bg-[#0B0C0D] gap-8 w-full">
              <div className="flex flex-col w-full">
                <div className="text-[#EAEEF7] font-bold text-[45px]">
                  Frequently asked questions
                </div>
                <div className="text-[#464F61] font-semibold text-[18px]">
                  Calendar of all upcoming matches and information about them,
                  as well as data on past matches.
                </div>
              </div>

              <div className="flex flex-col w-full gap-4">
                <div className="text-[#464F61] justify-between bg-[#131519] text-[22px] font-bold p-6 rounded-lg items-center w-full flex">
                  <div>How do I withdraw funds?</div>
                  <Image src={Plus} alt="PlusIcon" />
                </div>
                <div className="flex flex-col gap-4 bg-[#131519] p-6 rounded-lg items-center">
                  <div className="text-[#EAEEF7] justify-between text-[22px] font-bold  w-full flex">
                    <div>Why did my withdrawal request fail?</div>
                    <Image src={Minus} alt="MinusIcon" />
                  </div>
                  <div className="text-[#EAEEF7] text-[18px]">
                    You can request a withdrawal to any bank account, PayPal
                    account, or debit card that you have previously used to
                    deposit funds into your PrizePicks account. Withdrawals must
                    be for $10 or more to be processed.
                  </div>
                </div>
                <div className="text-[#464F61] justify-between bg-[#131519] text-[22px] font-bold p-6 rounded-lg items-center w-full flex">
                  <div>How do I withdraw funds?</div>
                  <Image src={Plus} alt="PlusIcon" />
                </div>{" "}
                <div className="text-[#464F61] justify-between bg-[#131519] text-[22px] font-bold p-6 rounded-lg items-center w-full flex">
                  <div>How do I withdraw funds?</div>
                  <Image src={Plus} alt="PlusIcon" />
                </div>{" "}
                <div className="text-[#464F61] justify-between bg-[#131519] text-[22px] font-bold p-6 rounded-lg items-center w-full flex">
                  <div>How do I withdraw funds?</div>
                  <Image src={Plus} alt="PlusIcon" />
                </div>{" "}
                <div className="text-[#464F61] justify-between bg-[#131519] text-[22px] font-bold p-6 rounded-lg items-center w-full flex">
                  <div>How do I withdraw funds?</div>
                  <Image src={Plus} alt="PlusIcon" />
                </div>{" "}
                <div className="text-[#464F61] justify-between bg-[#131519] text-[22px] font-bold p-6 rounded-lg items-center w-full flex">
                  <div>How do I withdraw funds?</div>
                  <Image src={Plus} alt="PlusIcon" />
                </div>
              </div>
            </div>

            {/* ----- End FAQ ----- */}

            {/* ----- Begin Footer ----- */}

            <div className="flex flex-col footer-bg w-full px-[20px] lg:px-[100px]">
              <div className="w-full py-[50px] border-b border-[#31353E]">
                <Image src={Logo} alt="logo" />
              </div>

              <div className="flex flex-col lg:flex-row justify-between my-12 w-full gap-24">
                <div className="flex flex-col w-full">
                  <div className="text-[26px] font-extrabold text-[#EAEEF7] tracking-tighter">
                    YOUR ULTIMATE DESTINATION FOR PRO ESPORTS STATS
                  </div>
                  <div className="text-[18px] font-extrabold text-[#464F61]">
                    We provide you with the most comprehensive and up to date
                    stats for professional <br /> esports players in popular
                    games like CS2, Dota2 and League of Legends
                  </div>

                  <div className="flex gap-6 items-center">
                    <button className="px-[30px] py-[12px] bg-[#4FD5FF] text-[16px] rounded-[8px] cursor-pointer">
                      TRY IT FOR FREE
                    </button>
                    <div className="flex flex-col">
                      <div className="text-[#EAEEF7] text-[30px]">+200.000</div>
                      <div className="text-[#464F61] text-[18px] tracking-tighter">
                        MATCHES ANALYZED IN 5 DAYS
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-evenly gap-4 w-full">
                  <div className="flex flex-col gap-6">
                    <div className="text-[26px] font-extrabold text-[#EAEEF7] tracking-tighter">
                      COMPANY
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-[#464F61] text-[18px] cursor-pointer">
                        AWARDS
                      </div>
                      <div className="text-[#464F61] text-[18px] cursor-pointer">
                        CAREERS
                      </div>
                      <div className="text-[#464F61] text-[18px] cursor-pointer">
                        PRESS
                      </div>
                      <div className="text-[#464F61] text-[18px] cursor-pointer">
                        MERCH
                      </div>
                      <div className="text-[#464F61] text-[18px] cursor-pointer">
                        STORE
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="text-[26px] font-extrabold text-[#EAEEF7] tracking-tighter">
                      RESOURCES
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-[#464F61] text-[18px] cursor-pointer">
                        TERMS OF SERVICES
                      </div>
                      <div className="text-[#464F61] text-[18px] cursor-pointer">
                        PRIVACY POLICY
                      </div>
                      <div className="text-[#464F61] text-[18px] cursor-pointer">
                        REFUND POLICY
                      </div>
                      <div className="text-[#464F61] text-[18px] cursor-pointer">
                        SITEMAP
                      </div>
                      <div className="text-[#464F61] text-[18px] cursor-pointer">
                        OUR HUB
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="text-[26px] font-extrabold text-[#EAEEF7] tracking-tighter">
                      CONTACT US
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-[#464F61] text-[18px] cursor-pointer">
                        SUPPORT@SE.COM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col gap-8 lg:gap-0 justify-between bg-[#4FD5FF] lg:px-[100px] px-[20px] py-[20px] w-full">
              <div className="text-[18px] text-[#0B0C0D] w-full">
                © 2023 Statsedge Inc. All rights reserved
              </div>
              <div className="flex gap-6 w-full lg:justify-end">
                <Image src={Twitter} alt="Twitter" className="cursor-pointer" />
                <Image
                  src={Instagram}
                  alt="Instagram"
                  className="cursor-pointer"
                />
                <Image src={Discord} alt="Discord" className="cursor-pointer" />
                <Image
                  src={Facebook}
                  alt="Facebook"
                  className="cursor-pointer"
                />
              </div>
            </div>

            {/* ----- End Footer ----- */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
