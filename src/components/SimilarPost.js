import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link as ReactLink } from "react-scroll";
import slugify from "slugify";

const SimilarPost = ({ data }) => {
  return (
    <Wrapper>
      <div className="similar-aside">
        <h2 className="similar-title">Related</h2>
      </div>
      <div className="similar-posts">
        {data.map((post, index) => {
          const {
            title,
            created,
            body: { summary },
            relationships: {
              field_blog_post_tags: tags,
              //field_header_image: { localFile },
            },
          } = post;

          const slug = slugify(title, { lower: true });
          //const cardImage = getImage(image.localFile.childImageSharp);

          return (
              <div key={index} className="similar-post">
                <div className="similar-post-header">
                  <Link to={`/blog/${slug}`} className="similar-post-link">
                    <h4>{title}</h4>
                  </Link>
                  <p className="post-info-autor">{created}</p>
                </div>
                <p className="similar-post-summary">{summary}</p>
                {tags.map((tag, index) => (
                  <Link
                    to={`/tag/${slugify(tag.name, { lower: true })}`}
                    className="post-info-tag"
                    key={index}
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin: 30px 0;
  .similar-aside {
    max-width: 300px;
    width: 100%;
    text-align:center;
  }
  .similar-posts {
    width: 100%;
  }
  .similar-post {
    margin-bottom: 60px;
    max-width:600px;
  }
  .similar-post-summary {
    padding: 15px 0;
  }
  .similar-post-link {
    color: black;
  }
  .similar-post-header {
    display: inline-flex;
    flex-direction: column;
  }
  @media (max-width: 992px) {
    flex-direction: column;

    .similar-aside {
      max-width: none;
      width: 100%;
    }
    .similar-title {
        margin-bottom:30px;
    }
    .similar-posts {
        
    }
  }
`;

export default SimilarPost;
