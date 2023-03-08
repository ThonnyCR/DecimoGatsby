import * as React from "react"
import Layout from "../components/Layout"
import { Script } from "gatsby"
const IndexPage = () => {
  return (
      <Layout>
        <main>
            <div>
              <p> 
                Decimo Gatsby site
              </p>
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
    <Script src='navbarScript.js'></Script>
  </>
  ) 
}
