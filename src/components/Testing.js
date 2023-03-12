import React from 'react'
import { Carousel } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

export const query = graphql`
query{
  allNodePartenerComment {
    nodes {
      title
      field_partner_coment_text
      field_partner_charge
    }
  }
}
`
//recordar las props
const Testing = () => {
  const data = useStaticQuery(query).allNodePartenerComment.nodes;
  console.log(data);
  return (
    <Wrapper>
      Testing!
      <div className='upper-line'></div>
      <Carousel fade={true} controls={false} className='carousel-style'>

        {data.map((comment, index) => {
          console.log(index);
          {/* aqui adentro va toda la info de cada entrada */ }
          return (
            <Carousel.Item key={index}>
              <div className='car-header'>
                <p className='carousel-title'>{/* props.title */}What our partners are saying</p>
                <p className='carousel-subtitle'>{/* props.subtitle */} Lorem ipsum dolor sit amet, consectetur adipiscing elit,.</p>
              </div>
              <div className='carousel-body'>
                {/* comentario */}
                <div className='comment-text'>
                  <p>{comment.field_partner_coment_text}</p>
                </div>
                {/* nombre de la persona y su cargo */}
                <div className='author-info'>
                  <p>{comment.title}  |  <span className='charge'>{comment.field_partner_charge}</span></p>
                </div>
              </div>
            </Carousel.Item>
          )
        })}
      </Carousel>
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
