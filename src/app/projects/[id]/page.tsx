import NavBar from "@/components/NavBar";
import WhiteButton from "@/components/WhiteButton";
import ProjectPlatformsBadge from "@/components/project/ProjectPlatformsBadge";
import projects from "@/data/projects.json";
import { generate_metadata } from "@/utils/generate_metadata";
import clsx from "clsx";
import { Metadata } from "next";

interface IPageProps {
  params: {
    id: string;
  };
}

interface IMetaProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return projects.map((proj) => {
    return { id: proj.id };
  });
}

export async function generateMetadata({
  params,
}: IMetaProps): Promise<Metadata> {
  const id = params.id;
  const proj = projects.find((p) => p.id === id);

  return generate_metadata({
    title: `Owbird | ${id}`,
    desc: proj?.short_description!,
    image: proj?.image!,
  });
}

const ProjectDetails = async ({ params }: IPageProps) => {
  const id = params.id;

  const proj = projects.find((p) => p.id === id);

  if (!proj) return "Oops!";

  const { name, url, github, platforms, content } = proj;

  const { title, body, features } = content;

  const projectLinks = [
    { label: "Code", href: github },
    { label: "Website", href: url },
  ];

  return (
    <div className="mt-4 ml-4 mr-4">
      <div className="flex justify-end mb-8">
        <NavBar />
      </div>

      <div>
        <div className="flex flex-col">
          <ProjectPlatformsBadge platforms={platforms} />
          <h1 className="font-bold text-4xl mr-2">{name}</h1>
        </div>
        <div className="flex mt-4 mb-4">
          {projectLinks.map(({ label, href }) => (
            <div key={href} className="mr-2">
              <WhiteButton label={label} href={href} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="animate__animated animate__flipInX mt-8 font-bold text-2xl">
          {title}
        </h2>

        <p className="animate__animated animate__zoomIn mb-4">{body}</p>

        <h2 className="font-bold text-2xl mb-4">Features</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {features.map(({ title, items }, index) => (
            <div
              key={title}
              className={clsx(
                "animate__animated",
                index % 2 === 0
                  ? "animate__lightSpeedInRight"
                  : "animate__lightSpeedInLeft",
              )}
            >
              <p className="font-bold">{title}</p>
              <ul>
                {items.map((item) => (
                  <li
                    key={item}
                    className="border border-green-700 rounded-md text-center w-40 mb-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
