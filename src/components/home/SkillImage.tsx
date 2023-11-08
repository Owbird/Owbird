import { FC } from "react";

interface ISkillImageProps {
  img: string;
  title: string;
}

const SkillImage: FC<ISkillImageProps> = ({ img, title }) => {
  return (
    <div className="grid-item">
      <img title={title} width={50} height={50} src={img} />
    </div>
  );
};

export default SkillImage;
