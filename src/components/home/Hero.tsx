import { FaArrowCircleDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-[5rem] text-center">
      <p>Heyo,</p>
      <p>You found me </p>
      <p>🙈</p>

      <div>
        <FaArrowCircleDown
          size={30}
          className="absolute bottom-10 ml-[-40px] h-20 w-20 opacity-75 animate-ping"
        />
        <FaArrowCircleDown
          size={30}
          className="absolute bottom-10 ml-[-18px]"
        />
      </div>
    </div>
  );
};

export default Hero;
