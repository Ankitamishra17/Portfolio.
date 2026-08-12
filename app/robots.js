export default function robots() {
  const siteUrl = "https://ankita-mishra-portfolio.vercel.app";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
