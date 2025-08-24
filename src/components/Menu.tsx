"use client";

import { useState } from "react";
import NavBar from "./NavBar";
import WhiteButton from "./WhiteButton";

const Menu = () => {
  const [sizes, setSizes] = useState({
    nothing: 100,
    others: 100,
  });
  const handleNothingClick = () => {
    setSizes({
      nothing: sizes.nothing / 1.2,
      others: sizes.others * 1.2,
    });
  };

  return (
    <div
      id="menu"
      className="flex flex-col justify-center items-center h-screen text-center"
    >
      <div className="animate__animated animate__bounce text-[4rem] lg:text-[5rem]">
        <p>Hi there, welcome!</p>
        <p>What would we like to know?</p>
      </div>

      <div className="flex items-center gap-3">
        <NavBar
          style={{
            width: `${sizes.others}px`,
            height: `${sizes.others}px`,
          }}
        />
        <div className="" onClick={handleNothingClick}>
          <WhiteButton
            key={sizes.nothing}
            label={"Nothing"}
            href={"#menu"}
            style={{
              width: `${sizes.nothing}px`,
              height: `${sizes.nothing}px`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
