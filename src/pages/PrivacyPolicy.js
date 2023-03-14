import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const PrivacyPolicy = ({data = []}) => {

  const body ={__html:  data.allNodePrivacyPolicy.nodes[0].field_body.value}
  const img = data.allNodePrivacyPolicy.nodes[0].relationships.field_img_privacy_policy.localFile

  return (
    <PrivacyPolicyStyles>
      <Layout>
        <main className="si">
          <hr className="lineColor">
          </hr>
          <div className="imageContainer">
            <GatsbyImage image={getImage(img) } className="imagePolicy"/>
          </div>
          <div className="mainClass container">
            <div dangerouslySetInnerHTML={body}/>
          </div>
        </main>
      </Layout>
    </PrivacyPolicyStyles>
  )
}

const PrivacyPolicyStyles = styled.main`

  .imageContainer{
    background-color:#000B28;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  .lineColor{
    background: linear-gradient(89.63deg, #339999 10.13%, #FF9933 90.06%);
    padding:2px;
    border:none;
  }

  .imagePolicy{
    width:30%;
    margin-top: 150px;
    margin-bottom: 150px;
  }

  .mainClass{
    width:60%;
  }

  h1{
    font-style:normal;
    font-weight:normal;
    font-size:30px;
    margin:0 0 15px;
    color: #323436;
  }

  p{
    color: #323436;
    font-style:normal;
    font-size:14px;
  }

  h2{
    font-style:normal;
    font-weight:normal;
    font-size:23px;
    margin:0 0 15px;
    margin-top: 25px;
    color: #323436;
  }
`

export const query = graphql`
  query {
    allNodePrivacyPolicy {
      nodes {
        field_body {
          value
        }
        relationships {
          field_img_privacy_policy {
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


export default PrivacyPolicy

