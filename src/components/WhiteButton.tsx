import clsx from "clsx";
import Link from "next/link";

interface WhiteButtonProps {
  href: string;
  label: string;
  invert?: boolean;
  style?: React.CSSProperties;
}

const WhiteButton = ({
  href,
  label,
  invert = false,
  style,
}: WhiteButtonProps) => {
  return (
    <Link
      href={href}
      style={style}
      className={clsx(
        "border p-4 rounded-md hover:border-green-500 transition-all ease-in-out duration-700 justify-center items-center flex",
        invert
          ? "hover:bg-black border-black hover:text-white"
          : "hover:bg-white border-white hover:text-black",
      )}
    >
      {label}
    </Link>
  );
};

export default WhiteButton;
