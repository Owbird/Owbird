import NavBar from "@/components/NavBar";
import WhiteButton from "@/components/WhiteButton";
import { socialLinks } from "@/data/constants";
import clsx from "clsx";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Owbird",
  description: "About Owbird",
};

export default function About() {
  const randomAnimations = ["animate__animated animate__bounce"];
  return (
    <div className="mt-4 mr-4 ml-4">
      <div className="flex justify-end">
        <NavBar />
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <Image
          className="animate__animated animate__rotateIn rounded-full"
          height={200}
          width={200}
          alt="Profile"
          src="https://avatars.githubusercontent.com/u/40531477?v=4"
        />
        <h1 className="font-bold text-xl mt-4 mb-4 animate__animated animate__slideInUp">
          I&apos;m Obed.
        </h1>
        <p>Just a guy trying to speak to computers.</p>
        <p>Seriously...that&apos;s it.</p>
        <br />
        <p>👇 You can also find me here 👇</p>

        <div className="grid grid-cols-2 lg:flex gap-4 mt-8 lg:mt-4">
          {socialLinks.map(({ label, href }, index) => (
            <div
              key={href}
              className={clsx(
                "mr-2 animate__animated mb-4",
                index % 2 === 0
                  ? "animate__lightSpeedInRight"
                  : "animate__lightSpeedInLeft",
              )}
            >
              <WhiteButton href={href} label={label} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
