import * as React from "react";
import Link from "next/link";
import contact from './contact.module.scss';
import Image from "next/image";

export default function Contact() {

  return (
    <div className={contact.page}>
      <div className={contact.contact}>
        <h1 className={contact.header}>C O N T A CT</h1>
        <div className={contact.paragraph}>
            <p className={contact.text}>
            Interested in collaborating with me? I'm thrilled to connect over a cup of chai and have an engaging conversation.<br /><br />Feel free to explore my
              <Link
                href="https://personal-porfolio-dan-kelly.s3.ap-southeast-2.amazonaws.com/Dan-Kelly-Resume-2023.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={contact.resume}
              >
                &nbsp;resumé,&nbsp;
              </Link>
              and browse through my recent work by clicking the links below. Don't hesitate to reach out to me using the provided contact information. <br /><br />Let's create something amazing together!</p>
        </div>
        <div className={contact.contactLinks}>
          <a className={contact.link} href="https://github.com/dankellyeng" target="_blank">
            <Image height={60} width={60} src="/images/git.png" alt="Github Logo" />
          </a>
          <a className={contact.link}
            href="https://www.linkedin.com/in/dankellyeng/"
            target="_blank"
          >
            <Image height={60} width={70} src="/images/linked.png" alt="LinkedIn Logo" />
          </a>
          <a className={contact.link} href="mailto:danielkelly27@gmail.com">
            <Image height={60} width={70} src="/images/email.png" alt="Email Logo" />
          </a>
        </div>
      </div>
      </div>
  );
};