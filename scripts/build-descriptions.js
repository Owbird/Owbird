import * as fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const rawProjects = JSON.parse(fs.readFileSync("./src/projects.json"));

const getRepoData = async (id) => {
  const headers = {
    Authorization: `Bearer ${process.env.GIT_TOKEN}`,
  };

  const res = await fetch(`https://api.github.com/repos/owbird/${id}`, {
    headers,
  });

  const repoData = await res.json();

  return repoData;
};

const getDescription = async () => {
  const projects = await Promise.all(
    rawProjects.map(async (proj) => {
      const { description } = await getRepoData(proj.id);

      return { description, id: proj.id };
    }),
  );

  return projects;
};

const projectsWithDecriptions = await getDescription();

fs.writeFileSync(
  "./src/projects-with-descriptions.json",
  JSON.stringify(projectsWithDecriptions),
);
