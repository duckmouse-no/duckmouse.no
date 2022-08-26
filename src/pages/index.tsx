import React from "react";
import { Layout } from "../templates/Layout";
import { EmailForm } from "../components/EmailForm";

const IndexPage = () => (
  <Layout>
    <main className="mt-16">
      <EmailForm />
    </main>
  </Layout>
);

export default IndexPage;
