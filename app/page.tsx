'use client'
import Image from "next/image";

import page from './page.module.scss'

export default function Home (props) {
  const firstName = "D A N";
  const lastName  = "K E L L Y";
  const imgSrc = "https://personal-porfolio-dan-kelly.s3.ap-southeast-2.amazonaws.com/me.webp"
  return (
    <div className={page.fullPage} >
     <div className={page.page}>
          <h1 className={page.landingTitle}>
            {firstName + " " + lastName}
          </h1>
          <h1 className={page.landingTitleMobile}>
            {"D" + " " + "K"}
          </h1>
        <div className={page.landingImageContainer}>
          <div className={page.landingImage}>
            <Image width={583} height={513} style={{ objectFit: "cover" }} src={imgSrc} alt="picture of Dan Kelly" />
          </div>
        </div>
        <div className={page.landingImageContainerMobile}>
          <div className={page.landingImageMobile}>
            <Image width={300} height={260} style={{ objectFit: "cover" }} src={imgSrc} alt="picture of Dan Kelly" />
          </div>
        </div>
        </div>

      </div>

  );
};