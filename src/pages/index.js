import * as React from "react";
import Layout from "../components/Layout";
import { Script } from "gatsby";
import AboutUs from "../components/AboutUs";
import TeamMembers from "../components/TeamMembers";
import Feedback from "../components/Feedback";
import { SEO } from "../components/seo"

const IndexPage = () => {
  //query**

  return (
    <Layout>
      <main>
        <Feedback />
        <AboutUs />
        <TeamMembers />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO title="Decimo Technology Solutions" pathname="" description="Home page of Decimo Technology Solutions"/>
)