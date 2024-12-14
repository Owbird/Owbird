"use client";

import { useEffect } from "react";
import {
  adjectives,
  animals,
  uniqueNamesGenerator,
} from "unique-names-generator";

const Hero = () => {
  const scrollToView = () => {
    const section = document.querySelector("#menu")!;
    section.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  const shortName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    separator: " ",
    length: 2,
  });

  useEffect(() => {
    setTimeout(() => {
      scrollToView();
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-[5rem] text-center">
      <p className="animate__animated animate__fadeInDown">Welcome,</p>
      <p className="animate__animated animate__fadeInDow text-[3rem]">{shortName}</p>
    </div>
  );
};

export default Hero;
