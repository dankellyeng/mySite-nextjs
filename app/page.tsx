'use client'
import Image from "next/image";

import page from './page.module.scss'

export default function Home (props) {
  const firstName = "D A N";
  const lastName  = "K E L L Y";
  return (
    <div className={page.fullPage} >
     <div className={page.page}>
          <h1 className={page.landingTitle}>
            {firstName + " " + lastName}
          </h1>
          </div>

        <div className={page.landingImageContainer}>
        <div className={page.landingImage}
        >
        <Image width={583} height={513} src="https://personal-porfolio-dan-kelly.s3.ap-southeast-2.amazonaws.com/me.webp" alt="picture of Dan Kelly" />
        </div>
        </div>
      </div>

  );
};