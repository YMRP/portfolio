import { Link } from "react-scroll"

type navElementProps = {
    id : string
    text: string
}

export default function NavElement({text, id}: navElementProps)  {
  return (
    <Link
      to={id}
      smooth={true}
      duration={500}
      offset={-80} // opcional: para compensar header fijo
      className=" font-light cursor-pointer text-white hover:text-black  hover:bg-white block transition duration-400 rounded p-1"
    >
      {text}
    </Link>
  )
}

