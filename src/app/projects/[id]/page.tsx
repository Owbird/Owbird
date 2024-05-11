import projects from "@/data/projects.json";
import { generate_metadata } from "@/utils/generate_metadata";
import { Metadata } from "next";
import { FC, Fragment } from "react";

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

const ProjectDetails: FC<IPageProps> = async ({ params }) => {
  const id = params.id;

  const readmeRes = await fetch(
    `https://raw.githubusercontent.com/Owbird/${id}/main/README.md`,
    {
      cache: "no-cache",
    },
  );

  const readMe = await readmeRes.text();

  const releasesRes = await fetch(
    `https://api.github.com/repos/Owbird/${id}/tags`,
    {
      cache: "no-cache",
    },
  );

  const releases = (await releasesRes.json()) as ITag[];

  const proj = projects.find((p) => p.id === id);

  return <Fragment></Fragment>;
};

export default ProjectDetails;