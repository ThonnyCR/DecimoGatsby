import * as React from "react"
import Layout from "../components/Layout"
import { Script } from "gatsby"
import AboutUs from "../components/AboutUs"
import TeamMembers from "../components/TeamMembers"
import Feedback from "../components/Feedback"
import ServicesandTechs from "../components/ServicesandTechs"
const IndexPage = () => {
  //query**

  return (
      <Layout>
        <main>
            <div>
              <ServicesandTechs/>
              <Feedback/>
              <AboutUs/>
              <TeamMembers/>
            </div>
        </main>
      </Layout>
  )
}

export default IndexPage

export const Head = () => { 
  return(
  <>
    <title>Decimo</title>
    {/* <script src='navbarScript.js'></script> */}
  </>
  ) 
}
