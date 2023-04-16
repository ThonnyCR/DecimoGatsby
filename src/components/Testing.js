import React from 'react'
import { Carousel } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const query = graphql`
query{
  allNodePruebita {
    nodes {
      title
      body {
        processed
      }
      relationships {
        field_testing_svg {
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
//recordar las props
const Testing = () => {
  const data = useStaticQuery(query).allNodePruebita.nodes[0];
  console.log(data);
  const body = {__html:  data.body.processed}
  return (
    <Wrapper>
      Testing!
      <div dangerouslySetInnerHTML={{
              __html: body.processed,
            }}/>
      <GatsbyImage
      image={getImage(data.relationships.field_testing_svg)}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
*{
  font-family: 'Avenir LT Std', sans-serif;
}
.carousel .carousel-indicators button{
  width: 10px; 
  height: 10px; 
  border-radius: 50%;
  border: 5px solid white;
  opacity: 5;
  
}
.carousel-indicators [data-bs-target]{
  background-color: transparent;
}
.carousel-indicators .active {
  border: 5px solid #339999 !important;
}
.upper-line{
width: 100%;
height: 7px;
left: 0px;
background: linear-gradient(89.63deg, #339999 10.13%, #FF9933 90.06%);
}
.carousel-style{
  background: #000B28;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px !important;
  color: white;
  margin: 0 !important;
}
.car-header{
  background: #000B28;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  margin: 0 !important;
}
.carousel-title{
  margin: 80px auto 10px auto;
  width: 600px;
  height: 60px;
  font-weight: 700;
  font-size: 35px;
  text-align: center;
}
.carousel-subtitle{
  margin: 20px auto;
  width: 479px;
  height: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
}
.carousel-body{
  display: flex;
  flex-direction: column;
}
.comment-text{
  display: flex;
  width: 80%;
  max-height: 70%;
  margin: 50px auto;
  align-items: center;
  justify-content:center;
  font-weight: 600;
  font-size: 37px;
  line-height: 52px;
  background: linear-gradient(90.17deg, rgba(255, 255, 255, 0.9) 2.49%, rgba(51, 153, 153, 0.9) 31.87%, rgba(255, 153, 51, 0.702) 48.3%, rgba(255, 255, 255, 0.9) 85.64%), #FFFFFF;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent; 
}

.comment-text p{
  width: fit-content;
  height: fit-content;
}

.author-info{
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: flex-end;
  flex-direction: row;
  gap: 46px;
}
.charge{
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}

@media only screen and (max-width: 850px){
  .comment-text{
    font-size: 25px;
  }
}

@media only screen and (max-width: 590px){
  .carousel-style{
    height: 700px !important;
  }
  .carousel-title{
    width: 400px;
    font-size: 25px;
  }
  .carousel-subtitle{
    width: 400px;
    font-size: 20px;
  }

}

  @media only screen and (max-width: 420px){
    .comment-text{
    font-size: 15px;
    line-height: 22px;
    margin: 80px auto 10px auto;
  }
  .carousel-style{
    height: 500px !important;
  }
}
`

export default Testing
