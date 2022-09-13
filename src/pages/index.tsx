import React from "react";
import { Layout } from "../templates/Layout";
import { EmailForm } from "../components/EmailForm";
import { Navbar } from "../components/Navbar";
import { Mouse } from "../components/Mouse";

const IndexPage = () => (
  <Layout>
    <main>
      <Mouse></Mouse>
    </main>
  </Layout>
);

export default IndexPage;
