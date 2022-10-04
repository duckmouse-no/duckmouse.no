import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Layout } from "../templates/Layout";

const FaqPage = () => (
  <Layout>
    <main className="px-8 md:w-750 md:m-auto pb-8">
      <h1 className="text-2xl font-bold mt-8">Takk for kjøpet!</h1>
      <p className="mt-4 mb-2">
        Hvis du valgte <i>hent i Trondheim</i> alternativet kan du ta kontakt
        med{" "}
        <a href="mailto:duckmousemail@gmail.com" className="text-blue-700">
          duckmousemail@gmail.com
        </a>{" "}
        for å avtale henting :)
      </p>
      <StaticImage src="../images/cracked5.png" alt="Det siste måltid." />
    </main>
  </Layout>
);

export default FaqPage;
