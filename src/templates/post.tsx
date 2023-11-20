import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import dayjs from 'dayjs';
import Layout from '../components/Layout';
import '../styles/blog.scss';

const shortcodes = { Link }; // Provide common components here

export default function PostTemplate({ data, children }) {
  console.log(data.mdx.frontmatter?.tags);
  const image = getImage(data.mdx.frontmatter.image?.childImageSharp?.gatsbyImageData);
  return (
    <Layout pathname={data.mdx.frontmatter.slug}>
      <div className="blog flex justify-center">
        <div className="lg:w-3/4">
          {image ? (
            <div className="text-center mt-5">
              <GatsbyImage
                image={image}
                alt={data.mdx.frontmatter.title}
                className="h-60 rounded mb-10"
              />
            </div>
          ) : null}
          <h1 className="block font-header font-bold text-5xl mb-3">
            {data.mdx.frontmatter.title}
          </h1>
          <span className="block text-md mb-3 opacity-50">{dayjs(data.mdx.frontmatter.date).format('YYYY-MM-DD')}</span>
          {data.mdx.frontmatter?.tags?.length ? (
            <div className="mb-10">
              {data.mdx.frontmatter.tags.map((tag: string) => (
                <div className="inline-block px-3 py-0 mr-1 mt-1 font-medium text-md rounded border border-lead-text hover:bg-lead hover:border-lead">
                  {tag}
                </div>
              ))}
            </div>
          ) : null}

          <br />
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        slug
        title
        date
        tags
        type
        image {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
      }
    }
  }
`;
