import { useEffect } from "react";
import TeamPerson from "../Components/TeamPerson";
import Navbar from "../Components/Navbar";

const AboutUs = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="inset-0 bg-cover bg-top text-center bg-[url('Background.svg')] bg-repeat ">
    <Navbar /> 
    <div className="w-full relative h-[1734px] flex flex-col items-center justify-start p-[30px]  pt-[100px] box-border gap-[65px] text-center  text-white  font-head">
      <p className="m-0 w-[430px] relative font-bold flex items-center justify-center text-center text-[36px] text-white font-head [text-shadow:-2px_4px_0px_#2f6d8c] ">
        The Team
      </p>
      <div className="self-stretch flex flex-col items-center justify-start gap-[30px] text-lg font-head">
        <b className="self-stretch relative leading-[120%]">{`IIAM is an intelligent patient referral management system. Founded in October 2022 by a team of physicians, computer scientists, and engineers, the IIAM team set out with the mission of streamlining the new patient referral process and ensuring patients are able to receive the highest quality care in a timely manner.
`}</b>
        
      </div>
      
      <div className=" rounded-xl [background:linear-gradient(99.95deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(40px)] box-border flex flex-row items-center justify-center pt-[25px] px-[35px] pb-[35px] relative max-w-[70%] text-left text-[24px]  font-head border-[1px] border-solid border-white mq450:pt-[49px] mq450:pb-[50px] mq450:box-border mq950:pl-[37px] mq950:pr-[37px] mq950:box-border">
          <div className="h-[420px] w-[1000px] relative rounded-xl  box-border hidden max-w-full z-[0] border-[1px] border-solid border-white" />
          <img
            className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover mix-blend-overlay z-[1]"
            src="/rectangle@2x.png"
          />
          <div className=" flex flex-row items-center justify-center p-[50px] gap-[60px]">
          <div className="h-[168.6px] flex flex-col items-start justify-start gap-[37px]">
            <div className="w-[443.4px] h-[65.8px] flex flex-col items-start justify-start gap-[15px]">
              <b className="w-60 relative leading-[32px] inline-block text-[30px] [text-shadow:-2px_4px_0px_#2f6d8c]">
                Our Goals
              </b>
              <b className="w-[443.4px] relative text-[20px] leading-[120%] inline-block">
                Make Patient Referrals Easier for Physicians! Nearly 1 in 3 new patient referrals to specialty physicians are never completed. Oftentimes, this is a result of incomplete medical records, delays in scheduling, and overall lack of transparency. 
              </b>
            </div>
            
          </div>
          <div className="h-[168.6px] flex flex-col items-start justify-start gap-[37px]">
            <div className="w-[443.4px] h-[65.8px] flex flex-col items-start justify-start gap-[15px]">
              <b className="w-[243px] relative leading-[32px] text-[30px] inline-block [text-shadow:-2px_4px_0px_#2f6d8c]">
                Our Vision
              </b>
              <b className="w-[443.4px] relative text-[20px] leading-[120%] inline-block">
              IIAM is a cloud-based file exchange platform with AI-generated analytics that streamlines the new patient referral process, reduces delays in patient care, and optimizes subspecialty practices. 

              </b>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center ">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[170px]">
          <TeamPerson Image="/person-1@2x.png" Name="Max Jiam" Position="Co-Founder & Co-CTO" />
          <TeamPerson Image="/person-1@2x.png" Name="Nicole Jiam" Position="Co-Founder & CEO"/>
          <TeamPerson Image="/person-1@2x.png" Name="Kevin Xin" Position="Co-Founder & Co-CTO"/>
          <TeamPerson Image="/person-1@2x.png" Name="Max Jiam" Position="Co-Founder & Co-CTO"/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;

<div className="self-stretch rounded-xl [background:linear-gradient(99.95deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(40px)] box-border flex flex-row items-center justify-center pt-[75px] px-[75px] pb-[77px] relative max-w-full text-left text-[24px] text-gray-300 font-bahnschrift border-[1px] border-solid border-white mq450:pt-[49px] mq450:pb-[50px] mq450:box-border mq950:pl-[37px] mq950:pr-[37px] mq950:box-border">
          <div className="h-[420px] w-[1000px] relative rounded-xl [background:linear-gradient(99.95deg,_rgba(255,_255,_255,_0.4),_rgba(255,_255,_255,_0.1))] shadow-[0px_4px_24px_-1px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(40px)] box-border hidden max-w-full z-[0] border-[1px] border-solid border-white" />
          <img
            className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl max-w-full overflow-hidden max-h-full object-cover mix-blend-overlay z-[1]"
            alt=""
            src="/rectangle@2x.png"
          />
          <div className="self-stretch flex flex-row items-center justify-center p-[50px] gap-[50px]">
          <div className="h-[168.6px] flex flex-col items-start justify-start gap-[37px]">
            <div className="w-[443.4px] h-[65.8px] flex flex-col items-start justify-start gap-[2px]">
              <b className="w-60 relative leading-[32px] inline-block">
                Our Goals
              </b>
              <b className="w-[443.4px] relative text-11xl leading-[120%] inline-block">
                Heading 3
              </b>
            </div>
            <div className="w-[443.4px] flex-1 relative leading-[150%] font-head text-black inline-block">
              Text 1
            </div>
          </div>
          <div className="h-[168.6px] flex flex-col items-start justify-start gap-[37px]">
            <div className="w-[443.4px] h-[65.8px] flex flex-col items-start justify-start gap-[2px]">
              <b className="w-[243px] relative leading-[32px] inline-block">
                Our Vision
              </b>
              <b className="w-[443.4px] relative text-11xl leading-[120%] inline-block">
                Heading 4
              </b>
            </div>
            <div className="w-[443.4px] flex-1 relative leading-[150%] font-head text-black inline-block">
              Text 2
            </div>
          </div>
        </div>
  </div>