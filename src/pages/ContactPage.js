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
                <main>
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

    .contact-section{
        display:grid;
        grid-template-columns: 1fr 1fr;
    }

    .section-1{
        margin: 200px 0 0 300px;
    }

    .section-2{
        background: linear-gradient(180deg, #80CACB 0%, rgba(255, 204, 153, 0.47) 53.12%, rgba(246, 247, 249, 0) 100%, #F6F7F9 100%);
        border-radius: 250px 250px 0px 0px;
        position:relative;
        overflow:visible;
        width:500px;
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
        font-style: normal;
        font-size:60px;
        letter-spacing: -0.04em;
        width: 600px;
        color:#000B28;
        line-height:70px;
        font-weight: 600;
    }

    .footer-title-style{
        font-style:normal;
        font-size:13px;
        width: 283px;
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

    @media only screen and (max-width: 1200px) and (min-width: 413px){
        .contact-section{
            grid-template-columns: 1fr;
            width: 10%;
        }

        .section-1{
            text-align:center;
            margin:auto;
        }

        .footer-title-style{
            margin:auto;
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
            grid-template-columns:1fr;
        }

        .section-1{
            margin: 0 0 0 0;
        }

        .section-2{
            margin: 0 0 0 0;
        }

        .header-title-style{
            margin: 0 0 0 0px;
        }

        .body-title-style{
        }

        .footer-title-style{
            text-align:center;
            margin: 0 0 0 0px;
        }

        .section-2{
            width: 20%;
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
