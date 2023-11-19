import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import '../styles/work-history.css';
import Layout from '../components/Layout';

interface Props extends PageProps {
  data: any;
}

const BlogPage: React.FC<PageProps> = (props: Props) => {
  const { data, location } = props;
  const posts = data?.allMdx?.nodes || [];

  return (
    <Layout pathname={location.pathname}>
      <h1 className="text-center font-header font-bold text-5xl mt-5 mb-5">Blog</h1>
      <div className="flex flex-col items-center">
        <div className="lg:w-3/4">
          {posts.map((post: any) => {
            const image = getImage(post.frontmatter.image?.childImageSharp?.gatsbyImageData);

            return (
              <div key={`post-${post.id}`} className="p-4">
                <a href={post.frontmatter.slug} className="flex">
                  <div className="mr-10 w-1/2">
                    {image ? <GatsbyImage image={image} alt={post.frontmatter.title} className="h-60 rounded" /> : null}
                  </div>
                  <div>
                    <div>
                      <span className="inline-block font-header font-light text-front mb-3 p-2 bg-lead text-lead-text">
                        {post.frontmatter.type}
                      </span>
                    </div>
                    <span className="block font-header font-bold text-2xl mb-3">
                      {post.frontmatter.title}
                    </span>
                    <span className="block text-md mb-3 opacity-50">{post.frontmatter.date}</span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

export const Head: HeadFC = () => (
  <>
    <title>Blog</title>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap"
    />
  </>
);

export const query = graphql`
  query {
    allMdx {
      nodes {
        id
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
  }
`;
