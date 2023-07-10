import { Metadata } from "next";

interface MetaProps {
  title: string;
  desc: string;
  image: string;
}

export const generate_metadata = (props: MetaProps): Metadata => {
  return {
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
    title: props.title,
    description: props.desc,

    twitter: {
      title: props.title,
      description: props.desc,
      images: [props.image],
    },
    openGraph: {
      title: props.title,
      description: props.desc,
      images: [props.image],
    },
  };
};
