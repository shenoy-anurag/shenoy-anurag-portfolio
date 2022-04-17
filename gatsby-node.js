/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
    createTypes(`
      type Mdx implements Node {
        frontmatter: MdxFrontmatter
      }
  
      type MdxFrontmatter {
        img: String @mdx
      }

    `);
  };