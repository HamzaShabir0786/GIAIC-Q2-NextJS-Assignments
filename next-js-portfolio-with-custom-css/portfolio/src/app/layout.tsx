import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { styleText } from "util";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio ",
  description: `it's a my personal portfolio on hamzah.vercel.app  I'm currently a student specializing in Generative AI at GIAIC, Karachi. I possess a diverse set of skills in fields like web development, UI/UX design, video editing,
     and graphic design. My technical expertise includes HTML, CSS, Tailwind CSS, JavaScript, TypeScript, React.js, Next.js, Python, Pandas and Numpy.God willing, in the future, I will be able to work on AI-based projects.  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
