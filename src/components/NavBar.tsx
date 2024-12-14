import { navLinks } from "@/data/constants";
import WhiteButton from "./WhiteButton";

interface Props {
  style?: React.CSSProperties;
}

const NavBar = ({ style }: Props) => {
  return (
    <div className="flex  gap-3">
      {navLinks.map(({ label, href }) => (
        <WhiteButton key={href} label={label} href={href} style={style} />
      ))}
    </div>
  );
};

export default NavBar;
