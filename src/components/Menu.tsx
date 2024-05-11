import Link from "next/link";

const Menu = () => {
  const menus = [{ label: "About me", href: "/about" }];

  return (
    <div
      id="menu"
      className="flex flex-col justify-center items-center h-screen text-center"
    >
      <div className="mb-4 text-[5rem]">
        <p>What are we looking for?</p>
        <p>🫣</p>
      </div>

      <div className="flex">
        {menus.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="hover:bg-white hover:text-black border border-white p-4 rounded-md"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
