import * as React from "react"
import Layout from "../components/Layout"
import { Script } from "gatsby"
import AboutUs from "../components/AboutUs"
import TeamMembers from "../components/TeamMembers"
const IndexPage = () => {
  return (
      <Layout>
        <main>
            <div>
              <p> 
                Decimo Gatsby site
               
              </p>
              <TeamMembers/>
              <AboutUs/>
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
