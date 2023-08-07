"use client";

import { Photo, createClient } from "pexels";
import { useEffect, useState } from "react";
// import { TextLoop } from "react-text-loop-next";
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
  { ssr: false }
);

const Hero = () => {
  const [img, setImg] = useState("");

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const client = createClient(process.env.NEXT_PUBLIC_PXL_KEY!);
      client.photos.random().then((res) => {
        setImg((res as Photo).src.landscape);
      });
    } else {
      setImg(
        "https://images.unsplash.com/photo-1584645511189-2a471d586ac2?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTY4NzU2NTIyMHw&ixlib=rb-4.0.3&q=85&w=1920"
      );
    }
  }, []);

  return (
    <div
      id="hero"
      className="hero route bg-image"
      style={{ backgroundImage: `url(${img})` }}
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
                  "Frontend Developer",
                  "Mobile App Developer",
                  "Desktop App Developer",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </TextLoop>
            </p>
            <small>
              Random image from{" "}
              <a style={{ color: "white" }} href="https://www.pexels.com/">
                pexels.com
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
