import { navLinks } from "@/data/constants";
import WhiteButton from "./WhiteButton";

const NavBar = () => {
  return (
    <div className="flex gap-3">
      {navLinks.map(({ label, href }) => (
        <WhiteButton key={href} label={label} href={href} />
      ))}
    </div>
  );
};

export default NavBar;
