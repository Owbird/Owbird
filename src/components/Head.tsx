import { Fragment } from "react";

const Head = ({
  title,
  desc,
  url,
  image,
}: {
  title: string;
  desc: string;
  url: string;
  image: string;
}) => {
  return (
    <Fragment>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={desc} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={image} />
      <meta property="twitter:title" content={desc} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content={image} />

      {/* <!-- Meta Tags Generated with https://metatags.io --> */}
    </Fragment>
  );
};

export default Head;
