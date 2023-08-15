"use client";

import dynamic from "next/dynamic";

type TextLoopProps = {
  children?: (string | JSX.Element)[] | undefined;
  interval: number | number[];
  delay: number;
  adjustingSpeed: number;
  springConfig: {
    stiffness: number;
    damping: number;
  };
  fade: boolean;
  mask: boolean;
  noWrap: boolean;
  className?: string;
  onChange?: Function;
};

const TextLoop = dynamic<TextLoopProps>(
  () => import("react-text-loop-next").then((data) => data.TextLoop),
  { ssr: false },
);

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero route bg-image"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
    >
      <div className="overlay-itro" />
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="hero-title mb-4">I am Obed.</h1>

            <p className="hero-subtitle">
              I am a{" "}
              <TextLoop
                interval={500}
                delay={1000}
                adjustingSpeed={200}
                springConfig={{ stiffness: 100, damping: 10 }}
                fade={true}
                mask={false}
                noWrap={true}
              >
                {[
                  "Backend Developer",
                  "Mobile App Developer",
                  "Desktop App Developer",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </TextLoop>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
