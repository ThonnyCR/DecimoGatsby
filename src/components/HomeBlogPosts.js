import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from "slugify";
import Newsletter from './Newsletter'
import { Container, Row, Col } from 'react-bootstrap';


export const query = graphql`
{
  allNodeBlogPost(sort: { created: DESC },limit: 6) {
    nodes {
      title
      body {
        summary
        value
      }
      relationships {
        field_header_image {
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

const HomeBlogPosts = (props) => {
    const data = useStaticQuery(query);
    const posts = data.allNodeBlogPost.nodes
    return (
        <Wrapper>
            <section className="blog-header">
                <h2>{props.title}</h2>
                <p className="blog-subtitle">{props.subtitle}</p>
            </section>
            {/* Pagination */}
            <section className="blog-body">
                <div className="cards-container">
                    {posts.map((post, index) => {
                        const {
                            title,
                            body: { value, summary },
                            relationships: { field_header_image: image },
                        } = post;

                        const main = { __html: value };
                        const slug = slugify(title, { lower: true });
                        const cardImage = getImage(image.localFile.childImageSharp);

                        return (
                            <div key={index} className="card-post">
                                <div className="card-post-container">
                                    <div className="card-post-header">
                                        <GatsbyImage
                                            image={cardImage}
                                            alt={"Post image of " + title}
                                            className="gatsby-image"
                                        />
                                    </div>
                                    <div className="card-post-body">
                                      <Link to={`/blog/${slug}`}>
                                        <h5>{title}</h5>
                                      </Link>
                                      {/* <p dangerouslySetInnerHTML={main} /> */}
                                      <p>{summary}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='posts-link'>
                        <Link to='/blog'>
                            <p>{props.link}</p>
                        </Link>
                    </div>
                    <Container>
                    <p className='newsletter-text'>Subscribe to our blog and get notified</p>
                      <Row>
                        <Col className="newsletter d-flex justify-content-center">
                          <Newsletter/>
                        </Col>
                      </Row>
                    </Container>      
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  .blog-body {
    width:100%;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 75px;
    margin-top:75px;
  }

  .blog-subtitle {
    color: rgba(0, 11, 40, 0.6);
  }

  .cards-container {
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-auto-rows: minmax(320px, auto);
    justify-items: center;
    max-width: 1270px;
    gap:40px;
    margin-left:auto;
    margin-right: auto;
  }

  .card-post {
  position: relative;
  transition: 0.3s ease;
  width: 320px;
  height: 320px;
  display: inline-block;
  background: transparent;
  border: 1px solid #E7EAEE;
}

.card-post a {
  color: black;
}

.card-post::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 5px;
  background-image: linear-gradient(89.63deg, #339999 5.4%, #ff9933 49.53%);
  opacity: 0;
  transition: 0.3s ease;
}

.card-post:hover {
  background: #FFFFFF;
  box-shadow: 0px 48px 140px rgba(57, 59, 106, 0.15);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

.card-post:hover::before {
  opacity: 1;
}

  .card-post-container {
    /* border: 1px solid #E7EAEE; */
    height: 100%;
    padding: 17px 16px;
  }

  .card-post-container:hover {
    /* border-left: 0;
    border-right: 0;
    border-bottom: 0;
    border-top: 0; */
  }

  .border-gradient {
    border: 10px solid;
    border-image-slice: 1;
    border-width: 5px;
  }

  .card-post-body {
    display:flex;
    flex-direction: column;
    padding: 0px 20px 18px 20px;
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .card-post-body h5{
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
    line-clamp:3;
    overflow:hidden;
    margin-top:17px;
    
  }
  
  .card-post-body p{
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    line-clamp:4;
    /* white-space: nowrap; */
  }

  .card-post-header {
    height: 81px;
    border-radius: 25px;
  }
  .gatsby-image {
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }

  .posts-link {
    margin: auto;
    width: auto;
    text-align: center;
    margin:80px 0;
  }
  .posts-link p{
    display: inline-block;
    color: black;
  }
  .newsletter{
    margin-top: -20px;
  }
  .newsletter-text{
    padding-top: 40px;
    font-family: 'Cabin';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
  }
`
export default HomeBlogPosts
