import { IProject } from "@/data/models/Proj";
import Image from "next/image";
import { FC } from "react";

interface IProjectProps {
  proj: IProject;
}

const ProjectCard: FC<IProjectProps> = ({ proj }) => {
  return (
    <div className="col-md-4">
      <div className="card card-blog">
        <div className="card-img">
          <a href={`/project/${proj.id}`}>
            <Image
              width={200}
              height={100}
              src={proj.image}
              alt={proj.name}
              className="img-fluid card-img-top"
            />
          </a>
        </div>
        <div
          className="card-body"
          style={{ height: "200px", overflow: "hidden" }}
        >
          <h3 className="card-title">
            <a href={`/project/${proj.id}`}>{proj.name}</a>
          </h3>
          <p className="card-description">{proj.short_description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
