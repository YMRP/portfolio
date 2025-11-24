import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";

function Skills() {
  return (
    <section
      className="min-w-full text-white items-center flex flex-col gap-10  py-20 bg-black"
      id="skils"
    >
      <h2 className="text-5xl font-bold">My Skills</h2>
      <div className="flex gap-3 max-sm:grid max-sm:grid-cols-3 max-sm:gap-7">
        <FaHtml5 size={50} className="hover:text-orange-400 duration-200" />
        <FaCss3Alt size={50} className="hover:text-blue-400 duration-200"/>
        <FaJsSquare  size={50} className="hover:text-yellow-400 duration-200" />
        <BiLogoTypescript size={50} className="hover:text-cyan-600 duration-200" />
        <FaReact size={50} className="hover:text-blue-500 duration-200"/>
        <RiTailwindCssFill size={50} className="hover:text-blue-300 duration-200"/>
        <FaJava size={50} className="hover:text-red-500 duration-200" />
        <SiMysql size={50} className="hover:text-blue-400 duration-200" />
        <SiExpress size={50} className="hover:text-orange-400 duration-200" />
        <FaGithub size={50} className="hover:text-gray-500 duration-200"/>
        <BiLogoSpringBoot size={50} className="hover:text-lime-400 duration-200"/>
      </div>
    </section>
  );
}

export default Skills;
