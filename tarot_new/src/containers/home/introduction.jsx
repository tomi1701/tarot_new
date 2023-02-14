import styles from "../../style";
import { moon } from "../../assets";
// import GetStarted from "./GetStarted";
import BackgroundAnimation from './backgroundanimation'
import GetStarted from "../../components/GetStarted";
import ReactWhatsapp from 'react-whatsapp';


const Hero = () => {
  return (
    <div >
      
    {/* <BackgroundAnimation/> */}
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"> */}
          {/* <img src={discount} alt="discount" className="w-[32px] h-[32px]" /> */}
        {/* </div> */}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="max-w-[500px] text-center text-[#BCAA99] flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
            Tarot reading <br className="sm:block hidden" />{" "}
            {/* <span className="text-gradient">with Pooja</span>{" "} */}
          </h1>
        </div>

        <h1 className="max-w-[500px] text-center text-[#88665D] font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100.8px] leading-[75px] w-full">
          {/* with Pooja */}
          <span >with Pooja</span>{" "}
        </h1>
        
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-center`}>
        NAMASTE! POOJA HERE!!

        NAMASTE! POOJA HERE!! I have started or must Confess was pushed by the
        Universe to start AAOBATEINKAREIN. (By a few Tower Moments in my
        Personal Life) and use all my Talents, Power, Blessings ,Gut Instincts
        and Channel them all together and start AAOBATEINKAREIN.
        For myself and millions of people in the world, who are on their
        Spiritual Journey, Spiritual Awakening, or just leading a Life
        Searching for Answers.

        Need for a Non-Judgemental place to Talk, Share, and Grow together. Hi
        and Welcome to AAOBATEINKAREIN!
        Would you believe ,if I say you were meant to be here?
        You are meant to be a part of the journey.
        Aaobateinkarein is a place where we all can Chat and Connect.
        Aaobateinkarein values Human Beings &Human Emotions.
        Chat about positive things, chat about how to face Life with Strength
        and Gush, and also take along others who will meet and join us in this
        path.
        21st dec 2020 we have all entered the air signs,for the next 250 + years.
        The signs of Freedom, Flow and Speed. We have entered Aquarius.
        Wow!
        It is time to form a Community, a community that is
        Unique, Beautiful, Positive, Strong and Passionate about life.
        In my understanding, spiritual journey does not mean we all have to
        sit like Hermits or Sages on mountain tops,
        and if that is your wish you are most welcome to do that,it means
        living the full 3D life with 5D consciousness
        </p>
        
      </div>

      <div  className="ss:flex hidden mt-32 md:mr-0 mr-0">
        <a href="https://www.instagram.com/aaobateinkarein/" target="_blank"><GetStarted /></a>
      </div>


      

      
      

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        
        <img src={moon} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 yellow__gradient" />
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" /> */}
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>

{/* <div className="flex gap-x-10">
      {/* <div  className="ss:flex hidden  md:mr-0 mr-0">
        <a href="https://www.instagram.com/aaobateinkarein/" target="_blank"><GetStarted /></a>
      </div>
      <div  className="ss:flex hidden  md:mr-0 mr-0">
        <a href="https://www.instagram.com/aaobateinkarein/" target="_blank"><GetStarted /></a>
      </div>
      <div  className="ss:flex hidden  md:mr-0 mr-0">
        <a href="https://www.instagram.com/aaobateinkarein/" target="_blank"><GetStarted /></a>
      </div>
      <div  className="ss:flex hidden  md:mr-0 mr-0">
        <a href="https://www.instagram.com/aaobateinkarein/" target="_blank"><GetStarted /></a>
      </div>
      <div  className="ss:flex hidden  md:mr-0 mr-0">
        <a href="https://www.instagram.com/aaobateinkarein/" target="_blank"><GetStarted /></a>
      </div> */}
{/* </div>  */}
    </div>
  );
};

export default Hero;