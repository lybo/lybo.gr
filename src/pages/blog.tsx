import * as React from 'react';
import type { PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import '../styles/work-history.css';
import Layout from '../components/Layout';

interface Props extends PageProps{
  data: any;
}

const BlogPage: React.FC<PageProps> = (props: Props) => {
  const { data, location } = props;
  const posts = data?.allMdx?.nodes || [];

  return (
    <Layout pathname={location.pathname}>
      {posts.map((post: any) => (
        <div key={`post-${post.id}`}>
          <a href={post.frontmatter.slug}>{post.frontmatter.title}</a>
        </div>
      ))}
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
        }
      }
    }
  }
`;
