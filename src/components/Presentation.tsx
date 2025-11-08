import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import cv from '../assets/YOSTIN_CV_2025.pdf'  
function Presentation() {
  return (
    <div className="text-white flex flex-col gap-6 min-h-screen items-center justify-center ">
        <h1 className="text-6xl font-black text-center max-sm:text-5xl">Hi, my name is Yostin.</h1>
      <h1 className="text-6xl font-black max-sm:text-5xl text-center mb-5">Welcome to my website</h1>
      <div className="flex gap-5 ">
     
        <a href="https://www.linkedin.com/in/yostin-ramos-a54b88324/"> <FaLinkedin  size={30} className="hover:text-blue-400 duration-200"/></a>
        <a href="https://www.instagram.com/yostin_sw/"> <FaInstagramSquare size={30} className="hover:text-pink-400 duration-200"/> </a>
        <a href="https://web.facebook.com/yostin.ramos.3"><FaFacebookSquare  size={30} className="hover:text-blue-700 duration-200"/> </a>
        <a href={cv} download='YOSTIN_CV_2025.pdf' className="p-1 border-2 hover:border-amber-400 duration-200"> Download my CV</a>

      </div>
    </div>
  );
}

export default Presentation;
