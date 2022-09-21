import React, { useState } from "react";
import { Layout } from "../templates/Layout";
import { Carousel } from "../components/Carousel";
import { Wire } from "../components/Wire";
import { About } from "../components/About";

const IndexPage = () => {
  const [showWire, setShowWire] = useState(true);

  return (
    <Layout>
      <main>
        <div className="md:w-750 m-auto grid grid-cols-1 md:grid-cols-2 mb-40">
          <Wire show={showWire} />
          <p />
          <Carousel setShowWire={setShowWire} />
          <About />
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
