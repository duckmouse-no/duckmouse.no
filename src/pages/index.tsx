import React from "react";
import { Layout } from "../templates/Layout";
import { EmailForm } from "../components/EmailForm";
import { VippsButton } from "../components/VippsButton";

const IndexPage = () => (
  <Layout>
    <main className="mt-16">
      <EmailForm />
      <VippsButton />
    </main>
  </Layout>
);

export default IndexPage;
