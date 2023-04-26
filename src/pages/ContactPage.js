import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'

const ContactPage = ({data = []}) => {

    const   headerTitle = data.allNodeContact.nodes[0].field_contact_header_title
    const   bodyTitle = { __html: data.allNodeContact.nodes[0].field_body_title.value}
    const   footerTitle = data.allNodeContact.nodes[0].field_contact_footer_title

    return (
        <Wrapper>
            <Layout>
                <main className="contact-container">
                    <div className="contact-section">
                        <div className="section-1">
                            <h1 className="header-title-style">
                                {headerTitle}
                            </h1>
                            <h2 className="body-title-style">
                                <div dangerouslySetInnerHTML={bodyTitle}/>
                            </h2>
                            <h3 className="footer-title-style">
                                {footerTitle}
                            </h3>
                        </div>
                        <div className="section-2">
                        </div>
                    </div>
                </main>
            </Layout>
        </Wrapper>
    )
}

const Wrapper = styled.div`

    .contact-container{
        width:100%;
        display:flex;
        justify-content:center;
    }

    .contact-section{
        display:grid;
        grid-template-columns: 1fr 1fr;
        max-width:992px;
    }

    .section-1{
        margin-top: 150px;
    }

    .section-2{
        background: linear-gradient(180deg, #80CACB 0%, rgba(255, 204, 153, 0.47) 53.12%, rgba(246, 247, 249, 0) 100%, #F6F7F9 100%);
        border-radius: 250px 250px 0px 0px;
        position:relative;
        overflow:visible;
        /* width:500px; */
        height:772px;
    }

    .header-title-style{
        font-size: 17px;
        font-style: normal;
        color:#000B28;
        line-height: 17px;
        font-weight:600;
        margin-bottom: 20px;
        height: 16px;
        letter-spacing:0.04em;
    }

    .body-title-style p{
        font-family: 'Cabin';
        font-style: normal;
        font-weight: 700;
        font-size: 60px;
        line-height: 65px;
        letter-spacing: 108%;
    }

    .footer-title-style{
        font-style:normal;
        font-size:13px;
        max-width: 283px;
        height: 72px;
        font-weight: 600;
        color: rgba(0, 11, 40, 0.6);
        letter-spacing: -0.02em;
        line-height: 24px;
    }

    span{
        background: linear-gradient(89.63deg, rgb(51, 153, 153, 1) 5.4%, rgba(255, 153, 51) 100.53%);
        /* background: linear-gradient(rgba(51, 153, 153, 0.9) 31.87%, rgba(255, 153, 51, 0.702) 48.3%); */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-text-fill-color:transparent;
    }

    //Responsive del ContactPage

    @media only screen and (max-width: 1250px) and (min-width: 413px){
        .contact-section{
            grid-template-columns: 1fr;
        }

        .section-2{
            margin-top:50px;
        }

    }

    @media only screen and (max-width: 600px){

        .body-title-style p{
            font-size: 40px;
            line-height:45px;
        }
    }

    @media only screen and (max-width: 412px){

        .contact-section{
            grid-template-columns: 1fr;
        }

        .body-title-style{
            text-align:center;
        }

        .header-title-style{
            text-align:center;
        }

        .footer-title-style{
            text-align:center;
            max-width:none;
        }

    }
`

export const query = graphql`
    query {
        allNodeContact {
            nodes {
                field_contact_footer_title
                field_contact_header_title
                field_body_title {
                    value
                }
            }
        }
    }
`

export default ContactPage
