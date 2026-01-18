import "./style.css";
import projects from "./projects.json";
import description from "./projects-with-descriptions.json";

const socialLinks = [
  { label: "Email", href: "mailto:owbirdphorccuo@gmail.com" },
  { label: "Phone", href: "tel:233265542141" },
  { label: "Github", href: "https://github.com/owbird" },
  { label: "X (Twitter)", href: "https://x.com/_owbird_" },
  { label: "TikTok", href: "https://www.tiktok.com/@owbird.dev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/obed-forkuo/" },
  { label: "Blog", href: "https://blog.owbird.dev/" },
];

const projectsEl = document.querySelector("#projects");

projectsEl.innerHTML = "<ul></ul>";
const projectsList = projectsEl.querySelector("ul");

projects.forEach((project) => {
  const desc = description.find((d) => d.id === project.id);

  projectsList.innerHTML += `
    <li>
      <a href="${project.url}">${project.name}: ${desc?.description ?? ""}</a>
    </li>
  `;
});

const socialsEl = document.querySelector("#socials");

socialsEl.innerHTML = "<ul></ul>";
const socialsList = socialsEl.querySelector("ul");

socialLinks.forEach(({ label, href }) => {
  socialsList.innerHTML += `
    <li>
      <a href="${href}" target="_blank" rel="noopener noreferrer">
        ${label}
      </a>
    </li>
  `;
});

document.querySelector("footer").innerHTML = `
  <p>
    &copy; ${new Date().getFullYear()} Obed Forkuo
  </p>
`;
