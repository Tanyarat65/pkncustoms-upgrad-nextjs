import Head from "next/head";

export default function SEO({ title, description, keywords, image, url }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="PKN Customs Services" />

      {/* Google */}
      <meta name="google-site-verification" content="AJjzUgDtpXFNzbdVqW7nWZOqVTV-BSEFaj7zWeMveEA" />

      {/* Open Graph (OG) for Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
