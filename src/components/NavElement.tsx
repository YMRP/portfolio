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
      className="cursor-pointer text-white hover:text-amber-300"
    >
      {text}
    </Link>
  )
}

