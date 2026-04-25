import { Montserrat, Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/global/header";
import Footer from "../../components/footer";

// Load all fonts with `variable` to use with Tailwind
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Touhid Rahman — Fullstack Developer",
    template: "%s | Touhid Rahman",
  },
  description:
    "Fullstack Developer with 8+ years of experience delivering scalable SaaS and enterprise web applications using TypeScript, Node.js, and Angular.",
  keywords: [
    "Touhid Rahman",
    "Fullstack Developer",
    "Frontend Developer",
    "Angular Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Angular Developer",
    "Next.js",
    "Web Developer",
    "Software Engineer",
    "Nashua NH",
  ],
  authors: [{ name: "Touhid Rahman", url: "https://touhidrahman.me" }],
  creator: "Touhid Rahman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://touhidrahman.me",
    title: "Touhid Rahman — Fullstack Developer",
    description:
      "Fullstack Developer with 8+ years of experience in TypeScript, Node.js, Angular, real-time systems, and AI-assisted development.",
    siteName: "Touhid Rahman Portfolio",
    images: [
      {
        url: "/img/Touhid_Rahman-01-AI.png",
        width: 500,
        height: 400,
        alt: "Touhid Rahman — Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Touhid Rahman — Fullstack Developer",
    description:
      "Fullstack Developer with 8+ years of experience in TypeScript, Node.js, Angular, real-time systems, and AI-assisted development.",
    images: ["/img/Touhid_Rahman-01-AI.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} ${inter.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
