import type { ReactNode } from "react";

type projectProps = {
  img: string;
  alt: string;
  title: string;
  description: string;
  href: string;
  code?: string
  tools?: ReactNode[];
};

function Project({ img, alt, title, description, href, tools, code }: projectProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-800 p-6 rounded-xl shadow-lg">
      <img
        src={img}
        alt={alt}
        className="w-full md:w-1/2 rounded-lg object-cover"
      />
      <div className="w-full md:w-1/2 text-left flex flex-col gap-1">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-300 mb-2">{description}</p>
        <div className="flex items-center gap-2 mb-4 ">{tools}</div>
        <div className="flex gap-3">
          <a
            href={href}
            className="cursor-pointer border-2 px-2 py-1 text-green-400 hover:underline"
            target="_blank"
          >
            view
          </a>
          <a
            href={code}
            className="cursor-pointer border-2 px-2 py-1 text-blue-400 hover:underline"
                        target="_blank"

          >
            code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
