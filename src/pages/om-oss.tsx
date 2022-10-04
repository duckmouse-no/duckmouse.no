import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { FadeInSection } from "../components/FadeInSection";
import { Layout } from "../templates/Layout";

const AboutUsPage = () => (
  <Layout>
    <main className="px-8 md:w-750 md:m-auto">
      <h1 className="text-2xl font-bold mt-8">Om Oss</h1>
      <p className="my-4">
        For rundt 3 år siden skjedde det noe kjempestort. Isak fant den kuleste
        pc-musen noen noensinne hadde funnet. Nemlig duckmouse. På en obskur
        nettside langt ned i darkweb, så langt at du blir nødt til å trykke på
        google sin andre fane var det noen som solgte en pc mus. Denne pc musen
        hadde et kammer og i kammeret var det en badeand. Det var da Isak innså
        fremtiden. Han skjønte med en gang at dette var musen som kom til å
        revolusjonere alt.
      </p>
      <p className="my-4">
        Det var kun et problem. Musen var utsolgt for flere år siden. Med
        reverse image search og andre hackemetoder fant Isak andre som også
        hadde solgt musen, men også disse var utsolgt. Etter mange måneder med
        søking og researching var ble det konkludert at duckmouse var fortiden
        til.
      </p>
      <p className="my-4">
        Likevel gir ikke Isak opp. I en drøm får han en brilliant ide. Hva om
        han bare startet en bedrift og startet å produsere pc musene selv.
        Likevel tokk det overaskende lang tid før han møtte noen som så
        genialiteten i ideen.
      </p>
      <p className="my-4">
        Nå 3 år seinere etter å ha snakket med de gamle produsentene, laget en
        nettbutikk, fikset innpakning og brukt tullete mye tid har Gerhard og
        Isak begynt å selge det legendariske siste partiet med duckmouse! Vi er
        nå avhengige av at DERE gjør deres del og kjøper en før vi går tomme.
        Dette er jo DUGNAD!
      </p>
      <p className="my-4">
        Det er både trist og rørende å tenke på at om flere år en dag langt inn
        i fremtiden kommer noen andre til å finne siden vår med de utsolgte
        datamusene og bestemme seg for å produsere et pari til med mus. Slik tar
        vi del i en lang tradisjon med datamus selgere som sikkert strekker seg
        langt tilbake i tid.
      </p>
      <div className="sm:flex sm:flex-row gap-4">
        <FadeInSection>
          <StaticImage
            src="../images/dm1.jpg"
            alt="duckmouse"
            className="my-2 sm:my-0"
          />
        </FadeInSection>
        <FadeInSection>
          <StaticImage
            src="../images/dm2.jpg"
            alt="duckmouse2"
            className="my-2 sm:my-0"
          />
        </FadeInSection>
      </div>
      <p className="my-4">
        Vi håper du får like mye glede av denne musa som vi gjør.
      </p>
      <p className="mt-4 mb-8">Hilsen Isak og Gerhard ❤️</p>
    </main>
  </Layout>
);

export default AboutUsPage;
