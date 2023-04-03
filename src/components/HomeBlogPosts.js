import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from "slugify";


export const query = graphql`
{
  allNodeBlogPost(limit: 6) {
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
                <div className='posts-link'>
                        <Link to='/blog'>
                            <p>{props.link}</p>
                        </Link>
                    </div>
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
    margin-bottom: 90px;
    margin-top: 120px;
  }

  .blog-header h2 {
    font-weight: 700;
font-size: 47px !important;
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
    margin-bottom: 100px;
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
  .posts-link {
    margin: auto;
    width: auto;
    text-align: center;
  }
  .posts-link p{
    display: inline-block;
    color: black;
  }
`
export default HomeBlogPosts
