import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FadeInSection } from "../FadeInSection";

export const Gallery = () => (
  <section className="px-8 md:w-750 md:m-auto">
    <h2 className="text-2xl font-bold mt-8">Bilder</h2>
    <div className="md:flex md:flex-row md:flex-wrap md:gap-4">
      <FadeInSection>
        <StaticImage
          src="../../images/cracked3.png"
          alt="dm1"
          className="my-2 w-full h-64"
        />
      </FadeInSection>
      <FadeInSection>
        <StaticImage
          src="../../images/img2.png"
          alt="dm1"
          className="my-2 md:w-[224px]"
        />
      </FadeInSection>
      <FadeInSection>
        <StaticImage
          src="../../images/img1.png"
          alt="dm1"
          className="my-2 md:w-[224px]"
        />
      </FadeInSection>
      <FadeInSection>
        <StaticImage
          src="../../images/cracked6.png"
          alt="dm1"
          className="my-2 md:w-[224px]"
        />
      </FadeInSection>
      <FadeInSection>
        <StaticImage
          src="../../images/cracked5.png"
          alt="dm1"
          className="mt-2 mb-16 w-full h-64"
        />
      </FadeInSection>
    </div>
  </section>
);
