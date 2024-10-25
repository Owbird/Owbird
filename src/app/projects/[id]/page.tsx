import NavBar from "@/components/NavBar";
import projects from "@/data/projects.json";
import { notFound } from "next/navigation";
import { GoStar, GoEye, GoRepoForked } from "react-icons/go";
import { BiTime, BiTag } from "react-icons/bi";
import { VscCode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { remark } from "remark";
import html from "remark-html";
import { Metadata } from "next";

interface Props {
  params: { id: string; github: string };
}

export const revalidate = 86400;

export const generateMetadata = ({ params }: Props): Metadata => {
  const project = projects.find((project) => project.id === params.id);

  return {
    title: project?.name,
    description: project?.short_description,
  };
};

export async function generateStaticParams() {
  const projectIds = projects.map(({ id }) => ({ id }));

  return projectIds;
}

const ProjectPage = async ({ params }: Props) => {
  const { id } = params;

  const project = projects.find((project) => project.id === id);

  if (!project) return notFound();

  const repo = project.github.replace("https://github.com/", "");

  const headers = {
    Authorization: `Bearer ${process.env.GIT_TOKEN}`,
  };

  const res = await fetch(`https://api.github.com/repos/${repo}`, { headers });

  const repoData = await res.json();

  const [tagsRes, releasesRes, readmeRes] = await Promise.all([
    fetch(`${repoData.tags_url}`, { headers }),
    fetch(`${repoData.releases_url.replaceAll("{/id}", "")}`, { headers }),
    fetch(
      `https://raw.githubusercontent.com/${repoData.full_name}/refs/heads/${repoData.default_branch}/README.md`,
    ),
  ]);

  const tags = await tagsRes.json();
  const releases = await releasesRes.json();

  const readme = await readmeRes.text();

  const processedContent = await remark().use(html).process(readme);

  const contentHtml = processedContent.toString();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-self-end mb-8">
        <NavBar />
      </div>

      <div className=" text-black max-w-4xl p-6 bg-gray-100 rounded-lg shadow-lg border-4 border-green-500">
        <div className="flex gap-2 items-center">
          <h1 className="text-3xl font-bold mb-2">{repoData.name}</h1>
          <Link href={project.github}>
            <FaGithub size={25} />
          </Link>
        </div>
        <p className="text-gray-600 mb-6">{repoData.description}</p>

        <div
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center bg-white p-4 rounded-lg shadow">
            <GoStar size={50} className="text-yellow-400 mr-2" />
            <div>
              <div className="text-2xl font-semibold">
                {repoData.stargazers_count}
              </div>
              <div className="text-sm text-gray-500">Stars</div>
            </div>
          </div>
          <div className="flex items-center bg-white p-4 rounded-lg shadow">
            <GoRepoForked size={50} className="text-blue-500 mr-2" />
            <div>
              <div className="text-2xl font-semibold">
                {repoData.forks_count}
              </div>
              <div className="text-sm text-gray-500">Forks</div>
            </div>
          </div>
          <div className="flex items-center bg-white p-4 rounded-lg shadow">
            <GoEye size={50} className="text-green-500 mr-2" />
            <div>
              <div className="text-2xl font-semibold">
                {repoData.watchers_count}
              </div>
              <div className="text-sm text-gray-500">Watchers</div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center bg-white px-4 py-2 rounded-full shadow">
            <BiTime size={50} className="text-gray-400 mr-2" />
            <span className="text-sm">
              Updated on {formatDate(repoData.updated_at)}
            </span>
          </div>
          <div className="flex items-center bg-white px-4 py-2 rounded-full shadow">
            <VscCode size={30} className="text-purple-500 mr-2" />
            <span className="text-sm">{repoData.language}</span>
          </div>
          <div className="flex items-center bg-white px-4 py-2 rounded-full shadow">
            <BiTag size={30} className="text-purple-500 mr-2" />
            <span className="text-sm">
              {tags.length > 0 ? tags[0].name : "No tags yet"}
            </span>
          </div>
        </div>

        <div className="mt-4">
          {releases.length === 0 && <p> No release yet</p>}

          <h2>Releases</h2>

          {(releases as any[]).map((release) => (
            <Link href={release.html_url} key={release.id}>
              <div className="flex items-center bg-white p-4 rounded-lg shadow">
                <div>
                  <span>{release.tag_name}</span>
                  <div className="text-2xl font-semibold">
                    <p>{release.name || release.body}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    Published on {formatDate(release.published_at)}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
