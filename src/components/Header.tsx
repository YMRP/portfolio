import NavElement from "./NavElement";


export default function Header() {
  return (
    <header className="bg-black flex items-center justify-evenly p-5 max-sm:flex-col max-sm:gap-10">
      <h1 className="font-black text-4xl text-white titillium-web-regular ">
        YM|<span className="text-2xl">WEB DEVELOPMENT</span>
      </h1>

      <nav className="flex gap-5">
       
        <NavElement id="projects" text="PROJECTS" />
        <NavElement id="skils" text="SKILLS" />
        <NavElement id="about" text="ABOUT ME" />
        <NavElement id="contact" text="CONTACT ME" />
      </nav>
    </header>
  );
}
