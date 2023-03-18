import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const query = graphql`
{
  allNodeAboutUs {
    nodes {
      title
      field_about_us_main_text
      field_about_us_author_and_charge
      relationships {
        field_about_us_decimo_logo {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        field_about_us_icons {
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

const AboutUs = () => {
    const allData = useStaticQuery(query);
    const data = allData.allNodeAboutUs.nodes[0];
    return (
        <Wrapper>
            <div className='aboutus-cont'>
                {/* container del logo con  su fondo*/}
                <div className='section-1'>
                    {/* bg del logo */}
                    <div className='logo-cont'>
                        {/* imagen del logo */}
                        <div>
                            <GatsbyImage
                                image={getImage(data.relationships.field_about_us_decimo_logo.localFile)}
                                alt='alt'
                                className='aboutus-logo'
                            />
                        </div>
                    </div>
                </div>
                {/* container del texto */}
                <div className='aboutus-text-container'>
                    {/* titulo */}
                    <h1 className='aboutus-title'>{data.title}</h1>
                    {/* texto largo */}
                    <div>
                        <p className='aboutus-maintext'>{data.field_about_us_main_text}</p>
                    </div>
                    {/* autor */}
                    <div className='aboutus-author'>
                        <div>{data.field_about_us_author_and_charge[0]} <span className='clear-text'>| {data.field_about_us_author_and_charge[1]}</span></div>
                    </div>
                    {/* iconos de redes sociales */}
                    <div className='icons-container'>
                        <GatsbyImage
                            image={getImage(data.relationships.field_about_us_icons[0].localFile)}
                            alt='alt'
                            className='aboutus-icon'
                        />
                        <GatsbyImage
                            image={getImage(data.relationships.field_about_us_icons[1].localFile)}
                            alt='alt'
                            className='aboutus-icon'
                        />
                        <GatsbyImage
                            image={getImage(data.relationships.field_about_us_icons[2].localFile)}
                            alt='alt'
                            className='aboutus-icon'
                        />
                    </div>
                </div>
            </div>


         </Wrapper>
     )
 }

 const Wrapper = styled.div`
.clear-text{
    color: #ACB4C3;
}
.aboutus-cont{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 50px 0px 0px 80px
}
.section-1{
    width: 70%;
}
.logo-cont{
    background: linear-gradient(180deg, #80CACB 0%, rgba(255, 204, 153, 0.47) 53.12%, rgba(246, 247, 249, 0) 100%, #F6F7F9 100%);
    border-radius: 250px 250px 0px 0px;
    height: 500px;
    width: 480px;
    margin: 0px 0px 40px 100px;
    position: relative;
    overflow: visible;
}
.aboutus-logo{
    height: 140px;
    width: 580px;
    margin: 200px 0px 800px 65px;
    position: absolute;
    transform: translate(-20%, -10%);
}

.aboutus-text-container{
    margin: 0px 300px 0px 0px;
    width: 800px;
}
.aboutus-title{
    font-size: 47px;
    font-weight: 500;
}
.aboutus-maintext{
    margin: 90px 0px 0px 0px;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    height: 200px;
}
.icons-container{
    margin: 100px 0px 0px 50px;
}
.aboutus-icon{
    width: 40px;
    height: 40px;
    margin: 10px;
}


/* RESPONSIVE */
@media only screen and (max-width: 1830px){
    .aboutus-text-container{
    margin: 0px 50px 0px 0px;
}
}
@media only screen and (max-width: 1600px){
    .aboutus-cont{
        display: block;
    }

    .aboutus-title{
        margin: 20px auto;
    }

    .aboutus-maintext, .aboutus-author, .aboutus-title{  
        text-align: center;
    }

    .icons-container{
        margin: 40px auto;
        display: flex;
    }
    .logo-cont, .section-1, .aboutus-text-container, .aboutus-cont, .aboutus-maintext, .aboutus-author, .aboutus-icon{
        margin: auto;
    }
}
@media only screen and (max-width: 800px){
    .aboutus-text-container{
        width: 600px;
    }
}
@media only screen and (max-width: 640px){
    .section-1, .logo-cont, .aboutus-author, .aboutus-text-container{
        width: 400px;
        margin: auto;
    }
    .aboutus-logo{
        width: 410px;
        height: 100px;
        margin: auto;
        transform: translate(-1.5%, 200%);
        overflow: visible;
    }
    .aboutus-title, .aboutus-maintext{
        text-align: center;
        width: 300px;
        margin-left: auto;
        margin-right: auto;
    }
    .aboutus-author{
        margin: 180px 0px 10px 0;
    }

}
@media only screen and (max-width: 420px){
    .section-1, .logo-cont, .aboutus-logo, .aboutus-text-container, .aboutus-author{
        width: 300px;
    }
    .aboutus-logo{
        max-width: 100%;
        height: auto;
    }
}

`

export default AboutUs
