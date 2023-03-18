import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { SEO } from "../components/seo";

const BlogPost = ({ data, pageContext }) => {
  const {
    title,
    created,
    body: { value },
    relationships: {
      field_header_image: { localFile },
      uid: { display_name },
    },
  } = data.allNodeBlogPost.nodes[0];
  const main = { __html: value }; //Body
  const image = getImage(localFile); //Post Image
  return (
    <Wrapper>
      <Layout>
        <main>
          <section className="blog-post-container">
            <div className="blog-post">
              <div className="blog-post-header">
                <div className="blog-post-header-image">
                  <GatsbyImage
                    image={image}
                    alt={"Post image of " + title}
                    className="gatsby-image-header"
                  />
                </div>
                <h1>{title}</h1>
                <div className="post-info">
                  <p>{created} By {display_name}</p>
                </div>
              </div>
              <div className="blog-post-body">
                <div
                  className="blog-post-body-content"
                  dangerouslySetInnerHTML={main}
                />
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </Wrapper>
  );
};

export const Head = ({ data, pageContext }) => (
  <SEO
    title={`${data.allNodeBlogPost.nodes[0].title} - Decimo Technology Solutions`}
    description={`Blog post ${data.allNodeBlogPost.nodes[0].title} of Decimo Technology Solutions`}
  />
);

export const query = graphql`
  query ($title: String!) {
    allNodeBlogPost(filter: { title: { eq: $title } }) {
      nodes {
        title
        created(formatString: "MMMM DD, YYYY")
        body {
          value
        }
        relationships {
          field_header_image {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
          }
          uid {
            display_name
          }
        }
      }
    }
  }
`;

const Wrapper = styled.div`
  .blog-post-container {
    position: relative;
    display: block;
    max-width: 1200px;
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
    margin-left: auto;
    margin-right: auto;
  }

  .blog-post-header-image {
    display: flex;
    justify-content: center;
  }

  .blog-post-header h1 {
    padding: 30px 0 30px 0;
    text-align: center;
  }

  .blog-post-body-content {
    line-height: 25px;
  }

  .blog-post-body {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .post-info {
    display:flex;
    width: 100%;
    p{
      color:#999999;
    }
  }
`;

export default BlogPost;
