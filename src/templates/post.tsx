import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const shortcodes = { Link }; // Provide common components here

export default function PostTemplate({ data, children }) {
  return (
    <Layout pathname={data.mdx.frontmatter.slug}>
      <h1>{data.mdx.frontmatter.title}</h1>
      <br />
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
      }
    }
  }
`;
