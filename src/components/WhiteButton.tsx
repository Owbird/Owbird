import Link from "next/link";

interface WhiteButtonProps {
  href: string;
  label: string;
}

const WhiteButton = ({ href, label }: WhiteButtonProps) => {
  return (
    <Link
      href={href}
      className="hover:bg-white hover:text-black border border-white p-4 rounded-md"
    >
      {label}
    </Link>
  );
};

export default WhiteButton;
