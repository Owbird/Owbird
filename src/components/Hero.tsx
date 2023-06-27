"use client";

import { Photo, createClient } from "pexels";
import { useEffect, useState } from "react";
import TextLoop from "react-text-loop";

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
              <TextLoop interval={500}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
