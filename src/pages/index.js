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
              <ServicesandTechs
              title = "Services & Technologies"
              subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,."/>
              <Feedback
              title = "What our partners are saying"
              subtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,."/>
              <AboutUs/>
              <TeamMembers
              title = "Our global team"/>
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
