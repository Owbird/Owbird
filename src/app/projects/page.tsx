import NavBar from "@/components/NavBar";
import ProjectPlatformsBadge from "@/components/project/ProjectPlatformsBadge";
import projects from "@/data/projects.json";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

export default function ProjectsPage() {
  return (
    <div className="ml-4 mr-4">
      <div className="flex justify-end mb-8">
        <NavBar />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {projects.map(({ id, name, platforms, short_description }) => (
          <div key={id} className="border border-white p-4 rounded-md">
            <ProjectPlatformsBadge platforms={platforms} />
            <div className="flex items-center hover:text-green-500">
              <Link
                target="_blank"
                href={`/projects/${id}`}
                className="font-bold text-xl mr-2"
              >
                {name}
              </Link>
              <FaLink />
            </div>
            <p className="text-gray-300">{short_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
