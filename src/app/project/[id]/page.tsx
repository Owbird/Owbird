import BackToTop from "@/components/home/BackToTop";
import Footer from "@/components/home/Footer";
import NavBar from "@/components/home/NavBar";
import Hero from "@/components/project/Hero";
import Main from "@/components/project/Main";
import { ITag } from "@/data/models/Proj";
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
    title: `OWBIRD | ${id}`,
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

  return (
    <Fragment>
      <NavBar />

      <Hero id={proj?.id!} image={proj?.image!} />

      <Main proj={proj!} readMe={readMe} releases={releases} />

      <Footer />
      <BackToTop />
    </Fragment>
  );
};

export default ProjectDetails;
