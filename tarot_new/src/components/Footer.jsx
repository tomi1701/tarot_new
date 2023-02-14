import styles from "../style";
import { logo, telegram, whatsapp, instagram } from "../assets";
// import { footerLinks, socialMedia } from "../constants";
import ReactWhatsapp from 'react-whatsapp';

const Footer = () => (
  <div>
    <hr />
    <p className="font-poppins font-normal text-center text-[13px] leading-[27px]">
    
        Copyright Ⓒ 2023. All Rights Reserved.
      </p>
  {/* <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}> */}
    {/* <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]"> */}
    {/* <hr/>
    <hr/>
    <hr/>
    <hr/> */}
  
      {/* <p className="font-poppins font-normal text-center text-[13px] leading-[27px]">
        
        Copyright Ⓒ 2023. All Rights Reserved.
      </p> */}
      {/* <div className="inline-flex gap-10">
        <div className="inline-flex">
          
          <ReactWhatsapp number="6591420302" message="Hello World!!!">
            <img src={whatsapp} alt="billing" className=" relative z-[5]" />
          </ReactWhatsapp>
        </div>
        <div className="inline-flex">
          
          <a href='https://t.me/testtest1234512' target="_blank">
            <img src={telegram} alt="billing" className=" relative z-[5]" />
          </a>
        </div>
        <div className="inline-flex">
          <a href="https://www.instagram.com/aaobateinkarein/" target="_blank">
          <img src={instagram} alt="billing" className=" relative z-[5]" />

          </a>        
        </div>
      </div> */}
    {/* </div> */}

  {/* </section> */}
  </div>
);

export default Footer;