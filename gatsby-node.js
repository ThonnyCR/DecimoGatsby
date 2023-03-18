const path = require("path");
const slugify = require('slugify');
const { pathPrefix } = require("./gatsby-config");

// This funtion create posts of blog page
async function createBlogPosts({ graphql, actions }) {
  const { errors, data } = await graphql(`
    query getTotalNodePosts {
      allNodeBlogPost {
        nodes{
          title
        }
      }
    }
  `);
  data.allNodeBlogPost.nodes.forEach((post) => {
    const slugTag = slugify(post.title, { lower: true });
    actions.createPage({
      path: `/blog/${slugTag}`,
      component: path.resolve(`src/templates/blog-post.js`),
      context: {
        title: post.title
      },
    });
  });
  return;
  // if (errors) {
  //     throw new Error("there was an error");
  //   }
}

// This funtion create pages of blog page
async function createBlogPages({ graphql, actions }) {
  const { errors, data } = await graphql(`
    query getTotalNodePosts {
      allNodeBlogPost {
        totalCount
      }
    }
  `);

  const { totalCount: posts } = data.allNodeBlogPost;
  const postsPerPage = 9;
  const numPages = Math.ceil(posts / postsPerPage);

  // Each page, use the createPages api to dynamically create that page
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("src/templates/blog-page.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  return;

  // if (errors) {
  //     throw new Error("there was an error");
  //   }
}

exports.createPages = async ({ graphql, actions }) => {
  await Promise.all(
    [createBlogPages({ graphql, actions })],
    [createBlogPosts({ graphql, actions })]
  );
};
