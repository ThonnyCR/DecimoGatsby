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
                    <div className="">
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
                    </div>
                </main>
            </Layout>
        </Wrapper>
    )
}

const Wrapper = styled.main`

    .section-1{
        
    }

    /* .section-2{
        background: linear-gradient(180deg, #80CACB 0%, rgba(255, 204, 153, 0.47) 53.12%, rgba(246, 247, 249, 0) 100%, #F6F7F9 100%);
        border-radius: 250px 250px 0px 0px;
        position:absolute;
    } */

    .header-title-style{
        position:absolute;
        font-size: 17px;
        font-style: normal;
        color:#000B28;
        line-height: 17px;
        font-weight:700;
        margin-bottom: 20px;
        height: 16px;
        left: 184px;
        top: 323px;
        letter-spacing:0.04em;
    }

    .body-title-style{
        position:absolute;
        font-style: normal;
        height: 195px;
        font-size:60px;
        letter-spacing: -0.04em;
        width: 600px;
        left: 182px;
        top: 359px;
        color:#000B28;
        line-height:70px;
    }

    .footer-title-style{
        position:absolute;
        font-style:normal;
        font-size:13px;
        width: 283px;
        height: 72px;
        font-weight: 600;
        color: rgba(0, 11, 40, 0.6);
        letter-spacing: -0.02em;
        left: 182px;
        top: 593px;
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
