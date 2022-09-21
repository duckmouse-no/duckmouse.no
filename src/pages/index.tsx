import React, { useEffect, useState } from "react";
import { Layout } from "../templates/Layout";
import { EmailForm } from "../components/EmailForm";
import { Navbar } from "../components/Navbar";
import { Mouse } from "../components/Mouse";
import { Desc } from "../components/Desc";
import { Button } from "../components/Button";
import { StaticImage } from "gatsby-plugin-image";
import { MouseTitle } from "../components/MouseTitle";
import { Carousel } from "../components/Carousel";
import { Wire } from "../components/Wire";
import { About } from "../components/About";

const IndexPage = () => {
  const [visible, setVis] = useState(true);

  return (
    <Layout>
      <main>
        <div className="md:w-750 m-auto grid grid-cols-1 md:grid-cols-2 mb-40">
          <Wire show={visible} />
          <p></p>
          <Carousel callback={setVis} />
          <About />
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
