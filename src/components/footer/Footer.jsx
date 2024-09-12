import "./Footer.scss";
import { CgMail } from "react-icons/cg";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";


const Footer = () => {
  return (
   <div className="footer py-10">


    <div className="footer__top flex container mx-auto px-5  bg-black mt-4 rounded-[20px] py-9 dark:bg-white dark:text-black  "> 
      <div> 
        <p className="text-5xl font-[900] w-[700px] text-white dark:text-black">STAY UPTO DATE ABOUT OUR LATEST OFFERS </p>
      </div>
      <div>
        <div className="p-2 bg-white w-96 flex items-center rounded-[60px] py-1 px-5 dark:bg-black dark:text-white">
        <CgMail className="text-5xl dark:text-white" />
        <input type="text" className=" w-72 text-zinc-500 text-[17px] py-2 px-10  dark:bg-black dark:text-white" placeholder="
 Enter your email address"/>
        </div>
        <button  className="hero__btn w-96 py-2 mt-3 px-10 rounded-[60px] text-xl   bg-white dark:bg-black dark:text-white">Subscribe to Newsletter</button>
      </div> 
    </div>
<div className="bg-[#F0F0F0] dark:bg-black py-[50px]">

    <div className="footer__bottom container mx-auto px-5 mt-5">

      <div className="footer__card">
      <p className="dark:text-white text-5xl font-[900] navbar__logo">
                SHOP.CO
              </p>
              <p className="w-[310px] my-5">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>

              <div className="flex">
             <button className=""> 
               <AiFillTwitterCircle className="text-3xl mx-2" />   
              </button> 
              <button className=""> 
                <FaFacebook  className="text-3xl mx-2"/>     
              </button>   
              <button className="">     
                    <BsInstagram className="text-3xl mx-2" />   
              </button> 
              <button className="">     
              <FaGithub className="text-3xl mx-2" />
              </button> 
       
        
              </div>
      </div>
    </div>
    </div>
<div className="hr"></div>

   </div>
  );
};

export default Footer;
