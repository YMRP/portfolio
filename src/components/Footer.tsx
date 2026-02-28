import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bottom-0 bg-black p-10 text-white flex flex-1  items-center gap-5 w-full">
        <p>Made with: </p>
        <RiTailwindCssFill size={30}/>
        <FaReact size={30}/>

    </footer>
  )
}

export default Footer
