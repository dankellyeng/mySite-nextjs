import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import CustomNavbar from "./CustomNavBar";
import Footer1 from "./Footer";

const name = "Dan Kelly";
export const siteTitle = "Dan Kelly";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className="fullPage">
      <Head>
        <link rel="icon" href="/favicon.ico" />

        {/* <link rel="preconnect" href="https://fonts.googleapis.com"> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@500;700&family=Prosto+One&display=swap"
          rel="stylesheet"
        ></link>

        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <CustomNavbar />
      <main>{children}</main>
      <Footer1 />
    </div>
  );
}
