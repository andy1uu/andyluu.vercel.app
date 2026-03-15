"use client";

import React from "react";

import SocialLink from "@/components/SocialLink";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { MdEmail, MdFacebook } from "react-icons/md";

import { motion } from "framer-motion";

const iconSize = 64;

const socialLinks = [
  {
    keyProp: "github",
    link: "https://github.com/andy1uu",
    icon: <FaGithub size={iconSize} />,
  },
  {
    keyProp: "linkedin",
    link: "https://www.linkedin.com/in/andyluu324/",
    icon: <FaLinkedin size={iconSize} />,
  },
  {
    keyProp: "instagram",
    link: "https://www.instagram.com/andy.1uu/",
    icon: <FaInstagram size={iconSize} />,
  },
  {
    keyProp: "facebook",
    link: "https://www.facebook.com/andy1uu/",
    icon: <MdFacebook size={iconSize} />,
  },
  {
    keyProp: "gmail",
    link: "mailto:andyluu324@gmail.com",
    icon: <MdEmail size={iconSize} />,
  },
];

const Home = () => (
  <section className="Homepage flex flex-grow">
    <div className="Homepage-container flex w-full flex-col gap-12 p-20 xl:mx-auto xl:w-9/10 xl:flex-row">
      <div className="Homepage-textAndSocials align-self-center flex w-full flex-col gap-12 xl:my-auto xl:w-1/2">
        <motion.p
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeIn" }}
          className="Homepage-begin text-center text-4xl font-semibold xl:text-left">
          Hello World! I&apos;m
        </motion.p>
        <motion.h2
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.2, ease: "easeIn" }}
          className="Homepage-name text-primary text-center text-7xl font-extrabold xl:text-left">
          <a href="/">Andy Luu</a>
        </motion.h2>
        <motion.h3
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.4, ease: "easeIn" }}
          className="Homepage-title text-secondary dark:text-accent text-center text-4xl font-bold xl:text-left">
          I&apos;m a Software Engineer focusing in HCI & FinTech!
        </motion.h3>
        <motion.p
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.6, ease: "easeIn" }}
          className="Homepage-description text-center text-2xl font-semibold xl:text-left">
          I design digital interfaces for all different types of software while
          researching novel HCI solutions.
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.8, ease: "easeIn" }}
          className="Homepage-social text-secondary dark:text-accent flex w-full flex-col gap-8 text-center xl:text-left">
          <div className="Homepage-socialTitle text-5xl font-extrabold">
            Lets Connect!
          </div>
          <div className="Homepage-socialLinks mx-auto flex w-fit flex-wrap justify-center gap-2 xl:ml-0">
            {socialLinks.map((socialLink) => (
              <SocialLink
                key={socialLink.keyProp}
                link={socialLink.link}
                icon={socialLink.icon}
              />
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeIn" }}
        className="Homepage-imageContainer w-full xl:my-auto xl:w-1/2">
        <Image
          src="/Profile_Luu_Andy_Square.jpg"
          width={2048}
          height={2048}
          alt="Picture of Andy Luu"
          className="Homepage-image border-primary mx-auto h-75 w-75 rounded-full border-8 sm:h-100 sm:w-100 xl:h-125 xl:w-125 2xl:h-175 2xl:w-175"
        />
      </motion.div>
    </div>
  </section>
);

export default Home;
