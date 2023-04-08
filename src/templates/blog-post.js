import React from "react";
import { graphql,Link } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { SEO } from "../components/seo";
const slugify = require('slugify');

const BlogPost = ({ data, pageContext }) => {
  const {
    title,
    created,
    body: { value },
    relationships: {
      field_header_image: { localFile },
      uid: { display_name },
      field_blog_post_tags: tags
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
                  <div className="post-info-autor">
                    <p>{created} By {display_name}</p>
                  </div>
                  <div className="post-info-tags">
                    <div>
                      {tags.map((tag,index)=>(
                          <Link to={`/tag/${slugify(tag.name, { lower: true })}`} className="post-info-tag" key={index}>{tag.name}</Link>
                      ))}
                    </div>
                  </div>
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
    allNodeBlogPost(filter: {title: {eq: $title}}) {
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
          field_blog_post_tags {
            name
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
    max-width: 1000px;
    width: 100%;
    margin:75px auto 75px auto;
    
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
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .post-info {
    width: 100%;
  }

  .post-info-autor{
    color:#999999;
  }

  .post-info-tags{
    padding-top: 30px;
  }

  .post-info-tag{
    background-color: rgba(128, 202, 203, 0.2);
    padding: 5px 18px;
    color: #339999;
    transition: 0.3s;
    cursor:pointer;
  }

  .post-info-tag:hover{
    background-color: rgba(128, 202, 203, 0.2);
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    .blog-post-container {
      padding-left:35px;
      padding-right:35px;
    }

    .post-info{
      justify-content:center;
    }

  }
`;

export default BlogPost;
