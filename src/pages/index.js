import * as React from "react"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
      <Layout>
        <main>
            <div>
              <p>
                Decimo Gatsby
              </p>
            </div>
        </main>
      </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Decimo</title>
