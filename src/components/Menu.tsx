import NavBar from "./NavBar";

const Menu = () => {
  return (
    <div
      id="menu"
      className="flex flex-col justify-center items-center h-screen text-center"
    >
      <div className="animate__animated animate__bounce  mb-4 text-[5rem]">
        <p>What are we looking for?</p>
        <p>🫣</p>
      </div>

      <NavBar />
    </div>
  );
};

export default Menu;
