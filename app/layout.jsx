import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://ankita-mishra-portfolio.vercel.app";
const siteTitle = "Ankita Mishra — Full Stack Developer";
const siteDescription =
  "Portfolio of Ankita Mishra, a Full Stack Developer specializing in React.js, Next.js, Node.js, MongoDB and MySQL. View 13+ real-world projects, skills, and experience, and get in touch for freelance or full-time opportunities.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Ankita Mishra",
  },
  description: siteDescription,
  keywords: [
    "Ankita Mishra",
    "Full Stack Developer",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "MERN Stack Developer",
    "Freelance Web Developer India",
  ],
  authors: [{ name: "Ankita Mishra", url: siteUrl }],
  creator: "Ankita Mishra",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Ankita Mishra Portfolio",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ankita Mishra",
    jobTitle: "Full Stack Developer",
    url: siteUrl,
    email: "mailto:ankitamishra8763@gmail.com",
    sameAs: [
      "https://github.com/Ankitamishra17",
      "https://www.linkedin.com/in/ankita-mishra17/",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "JavaScript",
      "Tailwind CSS",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "B.Tech, Information Technology",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
