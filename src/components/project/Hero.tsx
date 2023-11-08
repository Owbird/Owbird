import { FC } from "react";

interface IHeroProps {
  id: string;
  image: string;
}

const Hero: FC<IHeroProps> = ({ id, image }) => {
  return (
    <div
      className="hero hero-single route bg-image"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="overlay-mf" />
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h2 className="hero-title mb-4">{id}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
