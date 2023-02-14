import styles from "../../style";
import { moon, videos } from "../../assets";
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player';
// import GetStarted from "./GetStarted";
// import BackgroundAnimation from './backgroundanimation'

const Hero = () => {
  return (
    <div id="podcasts">
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="max-w-[500px] text-center text-[#F4CE97] flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
            Latest <br className="sm:block hidden" />{" "}
          </h1>
        </div>
        <h1 className="max-w-[500px] text-center text-[#F4CE97] font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100.8px] leading-[75px] w-full">
          <span >Videos</span>{" "}
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center`}>
        Check out my videos and podcasts, press on buttons below 💛
        </p>
                </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <ReactPlayer 
                width="100%"
                height="90%"
                url="https://www.youtube.com/watch?v=KD1C302tHfM&list=PLM1tR_zaHlz3UySMJ4p311DeoRKWMIUGc&ab_channel=AaoBateinKarein"
          />
          <ReactPlayer 
                width="100%"
                height="90%"
                url="https://www.youtube.com/watch?v=ETShBY22q-E&ab_channel=AaoBateinKarein"
          />
          <ReactPlayer 
                width="100%"
                height="90%"
                url="https://www.youtube.com/watch?v=WD1dLuqvVdw&ab_channel=AaoBateinKarein"
          />     
      </div>
      
    </section>
      <div className="flex flex-row-reverse justify-center gap-x-2 ">
          <button  href="https://www.instagram.com/aaobateinkarein/" className = "w-60 h-10 rounded-lg transition ease-in-out delay-150 bg-[#C2B587] text-white font-bold hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#88665D] hover:border-2 hover:border-[#88665D]	duration-300 ">
          See more videos on YouTube
          </button>
          <button  href="https://www.instagram.com/aaobateinkarein/" className = "w-60 h-10 rounded-lg transition ease-in-out delay-150 bg-[#C2B587] text-white font-bold hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#88665D] hover:border-2 hover:border-[#88665D]	duration-300 ">
          View Instagram channel 
          </button>
          <button  href="https://www.instagram.com/aaobateinkarein/" className = "w-60 h-10 rounded-lg transition ease-in-out delay-150 bg-[#C2B587] text-white font-bold hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-[#88665D] hover:border-2 hover:border-[#88665D]	duration-300 ">
          Consultation
          </button>
      </div>
    </div>
  );
};

export default Hero;