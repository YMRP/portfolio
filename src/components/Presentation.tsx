import { FaLinkedin, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import cv from "../assets/YOSTIN_CV_2026.pdf";
import { motion } from "framer-motion";

function Presentation() {
  return (
    <div  className="relative min-h-screen w-full bg-[url('/background.svg')] bg-cover bg-center">

      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1, y:0}} transition={{duration:0.8, ease: "easeOut"}} className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-6">

        <h1 className="text-5xl font-bold tracking-tight">
          Hi, I'm Yostin.
        </h1>

        <p className="mt-4 text-xl text-white/70 max-w-xl">
          Full-stack Developer focused on building secure, scalable and modern web applications.
        </p>

        <div className="flex gap-6 mt-8">
          <a
            href="https://www.linkedin.com/in/yostin-ramos-a54b88324/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-200 text-white/70 hover:text-white"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="https://www.instagram.com/yostin_sw/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-200 text-white/70 hover:text-white"
          >
            <FaInstagramSquare size={28} />
          </a>

          <a
            href="https://web.facebook.com/yostin.ramos.3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-200 text-white/70 hover:text-white"
          >
            <FaFacebookSquare size={28} />
          </a>
        </div>

        <a
          href={cv}
          download="YOSTIN_CV_2026"
          className="mt-10 px-6 py-3 border border-white/30 rounded-xl text-white/80 hover:bg-white hover:text-black transition duration-300"
        >
          Download CV
        </a>

      </motion.div>
    </div>
  );
}

export default Presentation;