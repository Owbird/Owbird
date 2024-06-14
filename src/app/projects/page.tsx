import NavBar from "@/components/NavBar";
import ProjectPlatformsBadge from "@/components/project/ProjectPlatformsBadge";
import projects from "@/data/projects.json";
import clsx from "clsx";
import { Metadata } from "next";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import WhiteButton from "@/components/WhiteButton";

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
        {projects.map(
          ({ id, name, platforms, short_description, url, github }, index) => (
            <div
              key={id}
              className={clsx(
                "mr-2 animate__animated border border-white p-4 rounded-md flex flex-col justify-between",
                index % 2 === 0
                  ? "animate__lightSpeedInRight"
                  : "animate__lightSpeedInLeft",
              )}
            >
              <ProjectPlatformsBadge platforms={platforms} />
              <div className=" font-bold text-xl mr-2 hover:text-green-500">
                {name}
              </div>
              <p className="text-gray-300">{short_description}</p>

              <div className="flex mt-4 mb-4">
                <div className="mr-2">
                  <WhiteButton label={"Github"} href={github} />
                </div>
                {github !== url && (
                  <div className="mr-2">
                    <WhiteButton label={"Website"} href={url} />
                  </div>
                )}
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
