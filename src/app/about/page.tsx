import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "This is a base site for Andy to create his websites.",
};
const Contact = () => (
  <section className="About dark:bg-dark flex min-h-screen w-full items-center justify-center">
    <h1 className="Homepage-text text-dark text-center text-8xl font-bold">
      About Page
    </h1>
  </section>
);

export default Contact;
