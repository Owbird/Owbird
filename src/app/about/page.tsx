import NavBar from "@/components/NavBar";
import WhiteButton from "@/components/WhiteButton";
import { socialLinks } from "@/data/constants";
import Image from "next/image";

export default function About() {
  return (
    <div className="mt-4 mr-4 ml-4">
      <div className="flex justify-end">
        <NavBar />
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <Image
          height={200}
          width={200}
          className="rounded-full"
          alt="Profile"
          src="https://avatars.githubusercontent.com/u/40531477?v=4"
        />
        <h1 className="font-bold text-xl mt-4 mb-4">I&apos;m Obed.</h1>
        <p>Just a guy trying to speak to computers.</p>
        <p>Seriously...that&apos;s it.</p>
        <br />
        <p>👇 You can also find me here 👇</p>

        <div className="flex mt-8 lg:mt-4">
          {socialLinks.map(({ label, href }) => (
            <div key={href} className="mr-2">
              <WhiteButton href={href} label={label} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
