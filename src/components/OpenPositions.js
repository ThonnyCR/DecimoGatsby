import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Link } from 'gatsby'

export const query = graphql`
    query {
        allNodeOpenPositions {
            nodes {
                field_description_card
                field_job_area
                field_slogan
                relationships {
                    field_image_card {
                        localFile {
                            childImageSharp {
                                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                            }
                        }
                    }
                }
            }
        }
        allNodeOpenPositionsSection {
            nodes {
                field_description_section {
                    value
                }
                field_button_section
                field_title_section {
                    value
                }
            }
        }
    }
`

const OpenPositions = () => {

    const cardData = useStaticQuery(query).allNodeOpenPositions.nodes;
    const sectionData = useStaticQuery(query).allNodeOpenPositionsSection.nodes[0];
    const title_section = { __html: useStaticQuery(query).allNodeOpenPositionsSection.nodes[0].field_title_section.value }
    const descripcion_section = { __html: useStaticQuery(query).allNodeOpenPositionsSection.nodes[0].field_description_section.value }
    return (
        <Wrapper>
            <div className="openpositions-container">
                <div className="section-1">
                    {cardData.map((cardData, index) => {
                        return (
                            <div className="card-section" key={index}>
                                {/* Imagen de las cards */}
                                <GatsbyImage
                                    image={getImage(cardData.relationships.field_image_card.localFile)}
                                    alt={cardData.title} className="card-img" />
                                {/* Area de trabajo asi como el slogan */}
                                <div className="job-slogan-section">
                                    <h3 className="job-area">
                                        {cardData.field_job_area} <span className="text-separation"></span>
                                    </h3>
                                    <span className="slogan">{cardData.field_slogan}</span>
                                </div>
                                {/* Descripcion de las cards */}
                                <hr className="div-separation"></hr>
                                <div>
                                    <p className="description-section">
                                        {cardData.field_description_card}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="section-2">
                    <p className="title-style">
                        <div dangerouslySetInnerHTML={title_section} />
                    </p>
                    <p className="desciption-style">
                        <div className="prueba-description" dangerouslySetInnerHTML={descripcion_section} />
                    </p>
                    <Link to='/jobs'>
                        <button className="button-style">
                            {sectionData.field_button_section}
                        </button>
                    </Link>

                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    span{
        background: linear-gradient(89.63deg, rgb(51, 153, 153, 1) 5.4%, rgba(255, 153, 51) 100.53%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-text-fill-color:transparent;
    }

    .openpositions-container{
        display:grid;
        grid-template-columns:1fr 1fr;
        max-width:1400px;
        margin:auto;
        border-radius:16px;
        border: 1px solid #E7EAEE;
        padding:60px;
    }

    .card-section{
        border-radius:16px;
        border: 1px solid #E7EAEE;
        padding:25px;
        margin:auto;
        /* width:360px; */
    }

    .card-section:hover{
        transition: all 0.2s ease-out;
        box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
        top: -4px;
        background-color: white;
    }
    

    .section-1{
        /* display:grid;
        grid-template-columns:repeat(2, 1fr);
        grid-gap:30px;
        margin:auto; */
        gap:30px;
        max-width: 750px;
        display:grid;
            grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
            grid-auto-rows: minmax(360px, auto);
    }

    .section-2{
        text-align:end;
    }

    //section 1 css

    .card-img{
        margin:auto;
        max-width:600px;
    }

    .job-slogan-section h3{
        font-size:23px;
        font-style:normal;
        font-weight:600px;
        margin-top: 32px;
        display:inline-block;
        color:#000B28;
    }

    .slogan {
        font-size:15px;
    }

    .text-separation{
        border: 1px solid #E7EAEE;
        transform: rotate(90deg);
        width: 12px;
        height: 0px;
        margin:5px;
    }

    .description-section{
        font-size: 15px;
        font-style:normal;
        color: #586174;
    }

    .div-separation{
        color: solid #E7EAEE;
        margin-bottom:30px;
        margin-left:auto;
        margin-right:auto;
    }

    //Section 2 css
    .title-style p{
        font-size:47px;
        font-style:normal;
        font-weight:700 !important;
        line-height:8px !important;
        margin-top:55px !important;
        margin-bottom: 50px !important;
    }

    .prueba-description p{
        font-family: 'Avenir LT Std', sans-serif;
        font-size:16px;
        font-style:normal;
        font-weight:400;
        line-height: 30px !important;
    }

    .button-style{
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

    .button-style:hover{
        background-color: white;
        transition:0.3s;
        color: #339999;
        border:solid 1px #339999;
    }

    //Responsive

    @media only screen and (max-width: 1400px){
        .openpositions-container{
            display:grid;
            grid-template-columns:1fr;
            max-width:1400px;
            margin:auto;
            border-radius:16px;
            border: 1px solid #E7EAEE;
            padding:60px;
        }

        .section-2{
            text-align:center;
        }

        .section-1{
            margin-left:auto;
            margin-right:auto;
        }
    }

    @media only screen and (max-width: 905px){
        .openpositions-container{
            display:block;
            margin:auto;
        }

        .card-section{
            margin:auto;
            max-width: 380px;
        }

        .card-img{
            margin:auto;
            max-width: 300px;
            display:flex;
        }

    }

`

export default OpenPositions
