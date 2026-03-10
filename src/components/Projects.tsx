import Project from "./Project";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { SiSpringboot } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

import coffee from '../assets/cafe.jpg'
import cajapic from "../assets/cajapic.png";
import tshirtImg from "../assets/tshirt.png";
import notes from "../assets/gestornotas.jpg";

function Projects() {
  return (
    <section
      className="px-4 py-10 bg-black  border-y  text-white  "
      id="projects"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
        My Projects.
      </h1>

      <div className="flex flex-col gap-10 max-w-5xl mx-auto">
        <Project
          title="T-SHIRT STORE"
          description="T-shirt web store with express and typescript, using login authentication and CRUD operations with shirts models with sequelize ORM"
          img={tshirtImg}
          alt="bienes raices"
          href="https://tshirt-ymrp-store.netlify.app/"
          code="https://github.com/YMRP/tshirt-store-frontend"
          tools={[
            <FaReact size={30} />,
            <RiTailwindCssFill size={30} />,
            <SiMysql size={30} />,
            <SiExpress size={30} />,
            <BiLogoTypescript size={30} />,
          ]}
        />
        <Project
          title="DOCUMENT MANAGEMENT SYSTEM"
          alt=""
          description="Designed and developed a responsive internal web system that enables employees to access, upload, and manage confidential documents efficiently through a secure, user-friendly interface.
Collaborated closely with backend developer to integrate robust and encrypted APIs"
          href="https://caja-tlajomulco.netlify.app"
          img={cajapic}
          tools={[
            <FaReact size={30} />,
            <RiTailwindCssFill size={30} />,
            <BiLogoTypescript size={30} />,
            <FaGithub size={30} />,
          ]}
          code="https://github.com/YMRP/proyecto-caja"
        />

        <Project
          alt="Gestor notas"
          description="A note management application developed with Spring Boot, Hibernate, MySQL, and JWT for authentication. It implements an MVC architecture using Controllers, Repositories, and Models, enabling comprehensive note management (CRUD) in a secure and organized manner. The application is Docker-ready for deployment, facilitating portability and scalability."
          href="https://gestor-de-notas.netlify.app"
          img={notes}
          title="NOTES MANAGEMENT SYSTEM"
          code="https://github.com/YMRP/gestor-notas-front"
          tools={[
            <FaReact size={30} />,
            <SiMysql size={30} />,
            <BiLogoTypescript size={30} />,
            <SiSpringboot size={30} />,
            <FaDocker size={30} />,
            <FaJava size={30} />,
          ]}
        />

        <Project
          alt="Blog cafe"
          description="A website developed with HTML and CSS featuring a coffee blog designed to demonstrate principles of responsive design. The site adapts its structure and visual elements to different screen sizes, such as computers, tablets and mobile phones. Includes typical sections of a blog header, articles, images and navigation bar organized with a clean and modern design. " href="https://blogcafeymrp.netlify.app" img={coffee} title="COFFEE BLOG" tools={[<FaCss3Alt size={30}/>, <FaHtml5 size={30}/>]} code="https://github.com/YMRP/blogCafe"/>
      </div>
    </section>
  );
}

export default Projects;
