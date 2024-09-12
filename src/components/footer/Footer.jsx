import "./Footer.scss";
import { CgMail } from "react-icons/cg";


const Footer = () => {
  return (
   <div className="footer">

    <div className="footer__top flex container mx-auto px-5  bg-black mt-4 rounded-[20px] py-9  "> 
      <div> 
        <p className="text-5xl font-[900] w-[700px] text-white">STAY UPTO DATE ABOUT OUR LATEST OFFERS </p>
      </div>


      <div>
        <div className="p-2 bg-white w-96 flex items-center rounded-[60px] py-1 px-5 gap-1">
        <CgMail className="text-5xl dark:text-black" />
        <input type="text" className=" w-72 text-zinc-500 text-xl py-2 px-10" placeholder="
 Enter your email address"/>
        </div>
        <button  className="hero__btn w-96 py-2 mt-3 px-10 rounded-[60px] text-xl   bg-white">Subscribe to Newsletter</button>
      </div> 


    </div>

   </div>
  );
};

export default Footer;
