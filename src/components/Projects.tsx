import Project from "./Project";
import { FaReact } from "react-icons/fa";

import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";

import { RiTailwindCssFill } from "react-icons/ri";

import tshirtImg from '../assets/tshirt.png'
function Projects() {
  return (
    <section className="px-4 py-10 bg-gray-900 text-white" id="projects">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">My Projects</h1>

      <div className="flex flex-col gap-10 max-w-5xl mx-auto">

        <Project title="T-SHIRT STORE" description="T-shirt web store with express and typescript, using login authentication and CRUD operations with shirts models with sequelize ORM" img={tshirtImg} alt="bienes raices" href="https://tshirt-ymrp-store.netlify.app/" code="https://github.com/YMRP/tshirt-store-frontend" tools={[<FaReact size={30}/>, <RiTailwindCssFill size={30}/>, <SiMysql size={30}/>, <SiExpress size={30}/>]}/>

      </div>
    </section>
  );
}

export default Projects;
