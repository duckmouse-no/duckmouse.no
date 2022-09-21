import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Layout } from "../templates/Layout";

const AboutUsPage = () => (
  <Layout>
    <main className="px-8 md:w-750 md:m-auto">
      <h1 className="text-2xl font-bold mt-8">Om Oss</h1>
      <p className="my-4">
        Isak og Gerhard har hatt kjempelyst på en veldig spesiell datamus. En
        datamus med veldig søt søt, hvit og blå og som har en liten gummiand
        inni seg. For å få tak i denne musa måtte vi produsere minimum 500stk.
        Derfor har Isak og Gerhard nå startet en bedrift. Hva ellers kunne vi ha
        gjort?
      </p>
      <div className="sm:flex sm:flex-row gap-4">
        <StaticImage
          src="../images/dm1.jpg"
          alt="duckmouse"
          className="my-2 sm:my-0"
        />
        <StaticImage
          src="../images/dm2.jpg"
          alt="duckmouse2"
          className="my-2 sm:my-0"
        />
      </div>
      <p className="my-4">
        Vi håper du får like mye glede av denne musa som vi gjør.
      </p>
      <p className="mt-4 mb-8">Hilsen Isak og Gerhard ❤️</p>
    </main>
  </Layout>
);

export default AboutUsPage;
