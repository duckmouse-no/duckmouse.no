import React from "react";
import { Layout } from "../templates/Layout";
import { EmailForm } from "../components/EmailForm";
import { Navbar } from "../components/Navbar";
import { Mouse } from "../components/Mouse";
import { BuyDesc } from "../components/BuyDesc";
import { Button } from "../components/Button";

const IndexPage = () => (
  <Layout>
    <main>
      <Mouse></Mouse>
      <BuyDesc></BuyDesc>
      <div className="m-auto w-fit">
        <Button
          label="Kjøp!"
          size="xl"
          type="round"
          active={true}
          onClick={() => alert("test")}
        ></Button>
      </div>
    </main>
  </Layout>
);

export default IndexPage;
