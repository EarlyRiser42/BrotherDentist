import localFont from "next/font/local";
import "../globals.css";
import Head from "next/head";
import Header from "../@components/header";
import Footer from "../@components/footer";

// 한글 폰트
const NanumSquare = localFont({
  src: [
    {
      path: "../../public/fonts/NanumSquareL.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumSquareR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumSquareB.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumSquareEB.otf",
      weight: "600",
      style: "normal",
    },
  ],
});
// 영어 폰트
const NanumSquareOTF = localFont({
  src: [
    {
      path: "../../public/fonts/NanumSquareOTF_acL.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumSquareOTF_acR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumSquareOTF_acB.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/NanumSquareOTF_acEB.otf",
      weight: "600",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, lang }) {
  return (
    <html
      lang={lang}
      className={
        lang === "ko" ? NanumSquare.className : NanumSquareOTF.className
      }
    >
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
