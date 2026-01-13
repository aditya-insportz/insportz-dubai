import { Helmet } from "react-helmet-async";
import siteMetadata from "@/data/metadata";

const Head = ({ metadata }: any) => {
  let { description, title, path, shareImage, keywords } = metadata;

  const url = `${siteMetadata.baseUrl}${path}`;
  const appleTouchIcon = `${siteMetadata.baseUrl}/logo.png`;

  return (
    <Helmet htmlAttributes={{ lang: "en" }}>
      {/* <!------------- Primary Meta Tags ---------> */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || "sports facility dubai, indoor cricket, padel, badminton, volleyball, football, table tennis, insportz"} data-react-helmet="true" />
      <meta name="robots" content="index, follow" />

      <meta name="theme-color" content={metadata.themeColor || "#0f0f0f;"} />
      <meta name="author" content={metadata.author} />
      <meta name="author:description" content={metadata.authorDescription} />
      <link rel="canonical" href={url} />
      <link rel="apple-touch-icon" href={appleTouchIcon} />
      <link rel="manifest" href="/manifest.json" />

      {/* <------------ Open Graph / Facebook ---------> */}
      <meta property="og:title" content={"insportz"} />
      <meta property="og:description" content={"insportz"} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteMetadata.baseUrl}/logo.png`} />
      <meta property="og:url" content={"https://insportzclub.com/"} />

      {/* <------------------ Twitter  -----------------> */}

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content={metadata.author} />
      <meta name="twitter:image" content={shareImage} />
      <meta name="twitter:card" content="summary_large_image" />

      {/* <------------------ hreflangs  -----------------> */}
      <link
        rel="alternate"
        hrefLang="en-IN"
        href={`https://insportzclub.com/en${path}`}
      />
      <link
        rel="alternate"
        hrefLang="hi-IN"
        href={`https://insportzclub.com/hi${path}`}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`https://insportzclub.com${path}`}
      />
    </Helmet>
  );
};

export default Head;
