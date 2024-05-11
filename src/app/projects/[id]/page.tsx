import NavBar from "@/components/NavBar";
import WhiteButton from "@/components/WhiteButton";
import ProjectPlatformsBadge from "@/components/project/ProjectPlatformsBadge";
import projects from "@/data/projects.json";
import { generate_metadata } from "@/utils/generate_metadata";
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

  const { name, url, github, platforms } = proj;

  const projectLinks = [
    { label: "Code", href: github },
    { label: "Website", href: url },
  ];

  const contentRes = await fetch(
    `https://${process.env.VERCEL_URL}/assets/project-contents/${id}.html`,
    {
      cache: "no-cache",
    },
  );

  const content = await contentRes.text();

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
      <div className="mt-8" dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
};

export default ProjectDetails;
