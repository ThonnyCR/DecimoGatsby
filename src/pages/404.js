import * as React from "react"
import Layout from "../components/Layout"
import styled from "styled-components";
import { graphql } from "gatsby";


const NotFoundPage = ({data = []}) => {

  const title = data.allNodeError.nodes[0].field_error_title
  const subtitle = data.allNodeError.nodes[0].field_error_subtitle
  const error_button = data.allNodeError.nodes[0].field_error_button
  console.log(data.allNodeError);

  return (
    <Wrapper>
      <Layout>
        <main>
          <div className="container">
            <h1 className="title_style">
              {title}
            </h1>
            <h2 className="subtitle_style">
              {subtitle}
            </h2>
            <button className="button_style">
              {error_button}
            </button>
          </div>
        </main>
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .container{
    text-align:center;
    margin-top: 100px;
  }

  .title_style{
    font-style:normal;
    font-weight:bold;
    font-size:50px;
    margin:0 0 10px;
    color: #323436;
  }

  .subtitle_style{
    font-style:normal;
    font-weight:normal;
    font-size:20px;
    margin:0 0 40px;
    color: #323436;
  }

  .button_style{

    //button style
    /* background-color: #339999; */
    background-color: #339999;
    border-radius:88px;
    width:180px;
    height:60px;
    border:none;
    margin-top: 35px;
    cursor:pointer;

    //font button style
    font-style:normal;
    font-weight:bold;
    font-size:15px;
    color:white;
    border:solid 1px #339999;
  }

  .button_style:hover{
    background-color: white;
    /* background-color: white; */
    transition:0.3s;
    color: #339999;
    border:solid 1px #339999;
  }
`

export const query = graphql`
  query {
    allNodeError {
      nodes {
        field_error_title
        field_error_subtitle
        field_error_button
        relationships {
          field_error_image {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`

export default NotFoundPage


export const Head = () => <title>Not found</title>
