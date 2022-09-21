import React from "react";
import { Layout } from "../templates/Layout";
import { EmailForm } from "../components/EmailForm";
import { Navbar } from "../components/Navbar";
import { Mouse } from "../components/Mouse";
import { BuyDesc } from "../components/BuyDesc";
import { Button } from "../components/Button";
import { StaticImage } from "gatsby-plugin-image";
import { MouseTitle } from "../components/MouseTitle";

const IndexPage = () => (
  <Layout>
    <main>
      <div className="w-full md:w-750 m-auto grid grid-cols-2">
        <StaticImage
          src="../../images/wire2.png"
          alt="wire"
          width={200}
          className="m-auto mix-blend-multiply min-h-mouse lg:min-h-mouseLG w-0.5 lg:w-1"
          placeholder="none"
        />
        <p></p>
        <StaticImage
          src="../../images/mouse2.png"
          alt="Duckmouse"
          width={200}
          className="w-100 lg:w-150 m-auto mt-0"
          placeholder="none"
        />
        <div>
          <MouseTitle />
          <Button
            label="Kjøp!"
            size="l"
            type="round"
            active={true}
            onClick={() =>
              location.replace("http://46.101.120.64/create-checkout-session")
            }
          ></Button>
          <BuyDesc></BuyDesc>
        </div>
      </div>
    </main>
  </Layout>
);

export default IndexPage;
