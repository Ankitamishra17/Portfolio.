export default function sitemap() {
  const siteUrl = "https://ankita-mishra-portfolio.vercel.app";
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
