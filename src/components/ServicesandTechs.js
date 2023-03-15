import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage,getImage } from 'gatsby-plugin-image'

export const query = graphql`
query{
  allNodeServiceAndTech {
    nodes {
      title
      field_service_and_tech_subtitle
      field_service_and_tech_body
      relationships {
        field_service_and_tech_icon {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout:CONSTRAINED)
            }
          }
        }
      }
    }
  }
}
`

const ServicesandTechs = () => {
  const services = useStaticQuery(query).allNodeServiceAndTech.nodes;
  console.log(services);
    return (
        <Wrapper>
            <section className='services-body'>
              <div className='cards-container'>
                {services.map((service, index)=>{
                  return(
                    <div key = {index} className='service-card'>
                      <div className='service-card-container'>
                        <div className='card-icon-container'>
                          <GatsbyImage
                          image = {getImage(service.relationships.field_service_and_tech_icon.localFile)}
                          alt='icon'
                          className='card-icon'
                          />
                        </div>
                          <h2 className='card-title'>{service.title}</h2>
                          <div className='text-container'>
                            <h4 className='card-subtitle'>{service.field_service_and_tech_subtitle}</h4>
                            <p className='card-body'>{service.field_service_and_tech_body}</p>
                          </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
        </Wrapper>
    )
}


const Wrapper = styled.div`

.services-body{
  width: 100%;
  display: grid;
  align-items: center;
}

.cards-container{
  display:grid;
  grid-template-columns: repeat(3 ,1fr);
  gap: 40px;
  margin: 100px auto;
}
.service-card{
  transition: 0.3s;
  width: 320px;
  height: 320px;
  display: inline-block;
}
.service-card:hover{
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    /* border-top:5px; */
    border-top-style: solid;
    border-image-source: linear-gradient(
      89.63deg,
      #339999 5.4%,
      #ff9933 49.53%
    );
    border-image-slice: 1;
    border-width: 5px;
}
.service-card-container{
  border: 1px solid #e7eaee;
  height: 100%;
}
.service-card-container:hover{
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
  border-top: 0;
}
.card-icon-container{
  width: 100px;
  height: 100px;
  border-radius: 100%;
  /* overflow: hidden; */
  /* position: absolute; */
  margin: 20px auto 5px 0px;
}
.card-icon{
  width: 100%;
  height: auto;
}

.card-title {
  font-size: 25px;
  color: #000B28;
  margin: 0px auto 10px 20px;
}
.text-container{
  margin: 20px auto auto 20px;
}
.card-subtitle{
  font-size: 16px;
  font-weight: 700;
  color: #000B28;
}
.card-body{
  margin-top: 30px;
  font-size: 16px;
}
`

export default ServicesandTechs
