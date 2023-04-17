import React from "react"
import { graphql,Link } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const slugify = require('slugify');

const TagTemplate = ({ data, pageContext }) => {
    const posts = data.allNodeBlogPost.nodes;
  return (
    <Layout>
      <Wrapper>
        <main className="page">
          <section className="container">
            <h2>{pageContext.tag} Tag</h2>
            {posts.map((post, index) => {
              const {
                title,
                body: { value, summary },
                relationships: { 
                  field_header_image: image,
                  field_blog_post_tags: tags 
                },
              } = post;
              const slug = slugify(title, { lower: true })
              const postImage = getImage(image.localFile.childImageSharp);

              return (
                <article className="post">
                  <div className="post-header">
                    <GatsbyImage
                      image={postImage}
                      alt={"Post image of " + title}
                      className="post-image"
                    />
                  </div>
                  <div className="post-body">
                    <Link to={`/blog/${slug}`} key={index}>
                      <h5>
                        {post.title}
                      </h5>
                    </Link>
                    <p>{summary}</p>
                    <div className="post-tags">
                      {tags.map((tag,index)=>(
                          <Link to={`/tag/${slugify(tag.name, { lower: true })}`} className="post-info-tag" key={index}>{tag.name}</Link>
                      ))}
                    </div>
                  </div>
                </article>
              )
            })}
          </section>
        </main>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
query ($tag: String) {
  allNodeBlogPost(
    sort: {created: DESC}
    filter: {relationships: {field_blog_post_tags: {elemMatch: {name: {eq: $tag}}}}}
  ) {
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
                blurredOptions: {width: 20}
                transformOptions: {cropFocus: CENTER}
              )
            }
          }
        }
        field_blog_post_tags {
          name
        }
      }
    }
  }
}
`
const Wrapper = styled.div`

  a{
    text-decoration: none !important;
    color:black !important;
  }

  .page {
    width: 100%;
  }

  .container{
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    margin: 75px auto 75px auto;
  }

  .container h2{
    margin-bottom:75px !important;
  }
  .post{
    display:flex;
    min-height: 272px;
    padding:40px;
    line-height: 32px;
    border-radius: 12px;
    border: 1px solid #E4E6F1;
    transition: 0.4s ease;
    width:100%;
  }

  .post:hover{
    background: #FFFFFF;
    box-shadow: 0px 48px 140px rgba(57, 59, 106, 0.16);
  }

  .post-image {
    width: 100%;
    border-radius: 12px;
  }

  .post-header {
    max-width: 286px;
    border-radius: 25px;
    display: flex;
    align-items: center;
  }

  .post-body{
    display:flex;
    flex-direction: column;
    padding: 0px 20px 0px 20px;
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .post-body h5{
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
    line-clamp:3;
    overflow:hidden;
  }
  
  .post-body p{
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    line-clamp:5;
  }

  .post-tags{
    margin-top:8px;
  }
  .post-info-tag{
    background-color: rgba(128, 202, 203, 0.2);
    padding: 5px 18px;
    color: #339999 !important;
    transition: 0.3s;
    cursor:pointer;
  }
  @media (max-width: 768px) {
    .post{
      display:block;
      padding:20px;
    }
    .post-header{
      max-width: 100%;
    }
    .post-body{
      padding: 0px 10px 0px 10px;
    }
    .post-body h5{
      margin-top:20px;
    }
  }
`
export default TagTemplate