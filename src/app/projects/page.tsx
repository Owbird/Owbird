import NavBar from "@/components/NavBar";
import ProjectPlatformsBadge from "@/components/project/ProjectPlatformsBadge";
import projects from "@/data/projects.json";
import clsx from "clsx";
import { Metadata } from "next";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Projects | Owbird",
  description: "My projects",
};

export default function ProjectsPage() {
  return (
    <div className="ml-4 mr-4">
      <div className="flex justify-end mb-8">
        <NavBar />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {projects.map(({ id, name, platforms, short_description }, index) => (
          <Link
            key={id}
            href={`/projects/${id}`}
            className={clsx(
              "mr-2 animate__animated border border-white p-4 rounded-md flex flex-col justify-between",
              index % 2 === 0
                ? "animate__lightSpeedInRight"
                : "animate__lightSpeedInLeft",
            )}
          >
            <ProjectPlatformsBadge platforms={platforms} />
            <div className="flex gap-2 items-center font-bold text-xl mr-2 hover:text-green-500">
              {name}

              <span>
                <FaLink size={15} />
              </span>
            </div>
            <p className="text-gray-300">{short_description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
