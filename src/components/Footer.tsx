import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bottom-0 bg-black p-10 text-white flex items-center gap-5">
        <p>This page was made by Yostin Ramos, using</p>
        <RiTailwindCssFill size={30}/>
        <FaReact size={30}/>

    </footer>
  )
}

export default Footer
