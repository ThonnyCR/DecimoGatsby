import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


export const query = graphql`
{
  allNodeFooter {
    nodes {
      field_footeritems
      field_footercopyright
      relationships {
        field_footericons {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        field_footerlogo {
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

const Footer = () => {
    const allData = useStaticQuery(query);
    const data = allData.allNodeFooter.nodes[0];
    return (
        <Wrapper>
            <div className='main'>
            <div className='footer'>
                <hr className='footer-upper-line'></hr>
                {/* logo and items section */}
                <div className='first-section'>
                    <div className="column1"><GatsbyImage
                                            image = {getImage(data.relationships.field_footerlogo.localFile)}
                                            alt='Logo'
                                            className='footer-logo'
                                            /></div>
                    <div className="column2">{data.field_footeritems[0]}</div>
                    <div className="column3">{data.field_footeritems[1]}</div>
                    <div className="column4">{data.field_footeritems[2]}</div>
                    <div className="column5">{data.field_footeritems[3]}</div>
                </div>
                <hr className='footer-lower-line'></hr>
                {/* icons and copy right section */}
                <div className='second-section'>
                    {/* icons */}
                    <div className='column-left'>
                        <GatsbyImage
                        image = {getImage(data.relationships.field_footericons[0].localFile)}
                        alt='icon'
                        className='footer-icon'/>
                        <GatsbyImage
                        image = {getImage(data.relationships.field_footericons[1].localFile)}
                        alt='icon'
                        className='footer-icon'/>
                        <GatsbyImage
                        image = {getImage(data.relationships.field_footericons[2].localFile)}
                        alt='icon'
                        className='footer-icon'/>
                    </div>
                    {/* copyright */}
                    <div className='column-right'>
                        <p>{data.field_footercopyright}</p>
                    </div>
                </div>
            </div>
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.div`
/*CSS if main containers*/
.main{
    display: grid;
    place-items: center;
}
.footer{
    width: 85%;
    height: 300px;
    border-radius: 30px;
    background-color: #FFFFFF;
}
@media only screen and (max-width: 996px){
  .footer{
    height: 450px;
  }
}

/*CSS of the lines*/
.footer-upper-line{
    border: none; 
    border-top: 2px solid #E6E6E6;
    margin: 40px 120px;
}

.footer-lower-line{
    border: none;
    border-top: 2px solid #E6E6E6;
    margin: 10px 120px;
}
/* CSS of the first section */
.first-section {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    padding: 20px 120px 40px 120px;
}

.column1 {
  grid-column: 1 / span 2; 
}

.column2 {
  grid-column: 3;
}

.column3 {
  grid-column: 4;
}

.column4 {
  grid-column: 5;
}

.column5 {
  grid-column: 6; 
}
.footer-logo{
    width: 128px;
    height: 31px;
}
/* Responsive CSS for the first section */
@media only screen and (max-width: 992px) {
  .first-section {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    padding: 0px;
  }
  .column2{
    grid-column: 1;
    padding: 10px 0px;
  }
  .column3{
    grid-column: 1;
    padding: 10px 0px;
  }
  .column4{
    grid-column: 1;
    padding: 10px 0px;
  }
  .column5{
    grid-column: 1;
    padding: 10px 0px;
  }

}
/* CSS of the second section */
.second-section{
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-gap: 20px;
    margin-top: 30px;
    margin-left: 50px;
}

.column-left{
    grid-column: 1 / 2;
    padding: 10px;
    margin-left: 60px;
}

.footer-icon{
    margin: 5px 40px 5px 0px;
    width: 24px;
    height: 24px;
}

.column-right{
    grid-column: 3 / 3;
    margin-right: 120px;
}

@media only screen and (max-width: 1192px) {
  .footer-icon{
    margin: 5px;
  }
}
  @media only screen and (max-width: 992px) {
  .footer-icon{
    margin: 2px;
  }
}
@media only screen and (max-width: 940px) {
  .second-section{
    align-items: center;
  }
  .column-left{
    grid-column: 1;
    margin-left: 20px;
  }
}
@media only screen and (max-width: 762px) {
  .column-left{
    margin-left: 0px;
  }
}

`

export default Footer
