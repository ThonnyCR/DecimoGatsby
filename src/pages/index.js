import * as React from "react"
import Layout from "../components/Layout"
// import { Script } from "gatsby"
import AboutUs from "../components/AboutUs"
import TeamMembers from "../components/TeamMembers"
import Feedback from "../components/Feedback"
import Newsletter from "../components/Newsletter"
const IndexPage = () => {
  //query**

  return (
      <Layout>
        <main>
            <div>
              <Feedback/>
              <AboutUs/>
              <Newsletter/>
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
