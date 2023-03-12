import * as React from "react"
import Layout from "../components/Layout"
import { Script } from "gatsby"
import AboutUs from "../components/AboutUs"
import TeamMembers from "../components/TeamMembers"
import DCarousel from "../components/Carousel"
const IndexPage = () => {
  //query**

  return (
      <Layout>
        <main>
            <div>
              <p> 
                Decimo Gatsby site
              </p>
              
              <TeamMembers/>
              <AboutUs/>
              <DCarousel/>
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
    <script src='navbarScript.js'></script>
  </>
  ) 
}
