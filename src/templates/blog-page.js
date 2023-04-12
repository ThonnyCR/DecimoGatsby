import { graphql, Link, link } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import slugify from "slugify";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { SEO } from "../components/seo";
import Newsletter from "../components/Newsletter";
import { Container, Row, Col } from 'react-bootstrap';

const BlogPage = ({ data, pageContext } ) => {
  // data
  const { title, field_blog_page_subtitle: subtitle } =
    data.allNodeBlogPage.nodes[0];
  const posts = data.allNodeBlogPost.nodes;

  // paginator
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? "/blog" : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  return (
    <Layout>
      <Wrapper>
        <main>
          {/* header */}
          <section className="blog-header">
            <h2>{title}</h2>
            <p className="blog-subtitle">{subtitle}</p>
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
                          <h3>{title}</h3>
                        </Link>
                        <h4>a</h4>
                        <p dangerouslySetInnerHTML={main} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="blog-navigation">
            <div className="blog-navigation-container">
              <ul>
                {!isFirst && (
                  <li>
                    <Link to={prevPage} rel="prev">
                      Prev
                    </Link>
                  </li>
                )}

                {Array.from({ length: numPages }, (_, i) => (
                  <li key={i}>
                    <Link
                      key={`pagination-number${i + 1}`}
                      to={`/blog/${i === 0 ? "" : i + 1}`}
                    >
                      {i + 1}
                    </Link>
                  </li>
                ))}

                {!isLast && (
                  <li>
                    <Link to={nextPage} rel="next">
                      Next
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </section>
        </main>
        <Container>
          <p className='newsletter-text'>Subscribe to our blog and get notified</p>
              <Row>
                <Col className="newsletter d-flex justify-content-center">
                  <Newsletter/>
                </Col>
              </Row>
        </Container>
      </Wrapper>
    </Layout>
  );
  
};

export const Head = ({pageContext}) => (
  <SEO title={`Blog ${pageContext.currentPage === 0 ? "1" : pageContext.currentPage} - Decimo Technology Solutions`} pathname={`blog/${pageContext.currentPage === 0 ? "1" : pageContext.currentPage}`} description={`Blog page ${pageContext.currentPage === 0 ? "1" : pageContext.currentPage} of Decimo Technology Solutions`}/>
)
export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allNodeBlogPage {
      nodes {
        title
        field_blog_page_subtitle
      }
    }

    allNodeBlogPost(sort: { created: DESC }, limit: $limit, skip: $skip) {
      nodes {
        title
        body {
          value
          summary
        }
        relationships {
          field_header_image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  blurredOptions: { width: 20 }
                  transformOptions: { cropFocus: CENTER }
                )
              }
            }
          }
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  .blog-body {
    width:100%;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 90px;
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
    transition: 0.3s ease;
    width: 320px;
    height: 320px;
    display: inline-block;
    a{
      color:black;
    }
  }

  .card-post:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-top-style: solid;
    border-image-source: linear-gradient(
      89.63deg,
      #339999 5.4%,
      #ff9933 49.53%
    );
    transition: 0.3s ease;
    border-image-slice: 1;
    border-width: 5px;
  }

  .card-post-container {
    border: 1px solid #e7eaee;
    height: 100%;
    padding: 17px 16px;
  }

  .card-post-container:hover {
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
    border-top: 0;
  }

  .border-gradient {
    border: 10px solid;
    border-image-slice: 1;
    border-width: 5px;
  }

  .card-post-body {
    display:flex;
    flex-direction: column;
    padding: 0px 30px 18px 30px;
    width: 100%;
  }

  .card-post-body h3{
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    line-clamp:2;
    overflow:hidden;
    margin-top:30px;
  }
  
  .card-post-body p{
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
    line-clamp:3;
    overflow:hidden;
  }

  .card-post-body h4{
    margin-top:5px;
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

  .blog-navigation {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .blog-navigation-container a {
    color:black;
  }

  .blog-navigation-container a:hover {
    color: #ff9933;
  }

  .blog-navigation-container ul {
    list-style-type: none;
    overflow: hidden;
  }

  .blog-navigation-container ul li {
    float: left;
  }

  .blog-navigation-container ul li a {
    display: block;
    text-align: center;
    font-weight: bold;
    padding: 13px;
    font-size: 25px;
  }
  .newsletter{
    margin-top: -20px;
  }
  .newsletter-text{
    padding-top: 40px;
    font-family: 'Avenir LT Std';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
  }
`;

export default BlogPage;
