import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Layout } from "../templates/Layout";

const FaqPage = () => (
  <Layout>
    <main className="px-8 md:w-750 md:m-auto">
      <h1 className="text-2xl font-bold mt-8">FAQ</h1>
      <p className="mt-4 mb-2 font-bold">Hva er en duckmouse?</p>
      <p>
        Duckmouse er datamusa vi selger. Den ser kul ut og har en liten gul
        gummiand inni seg.
      </p>

      <p className="mt-4 mb-2 font-bold">Er det en god datamus?</p>
      <p>Den ser i hvert fall veldig kul ut.</p>

      <p className="mt-4 mb-2 font-bold">Har dere laget musa selv?</p>
      <p>Nei, vi har importert musa fra Kina.</p>

      <p className="mt-4 mb-2 font-bold">Hvor kan jeg hente den?</p>
      <p className="mb-8">
        Musa kan hentes på enten Lademoen, Singsaker eller Gløshaugen etter
        avtale med{" "}
        <a href="mailto:duckmousemail@gmail.com" className="text-blue-700">
          duckmousemail@gmail.com
        </a>
        .
      </p>
    </main>
  </Layout>
);

export default FaqPage;
