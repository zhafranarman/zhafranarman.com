import React from "react";
import Transition from "../../components/Transition";
import { useQuery, gql } from "@apollo/client";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const GET_POSTS = gql`
  query ($host: String!) {
    publication(host: $host) {
      posts(first: 10) {
        edges {
          node {
            title
            slug
            tags {name}
            seo {description}
            coverImage {url}
            readTimeInMinutes
            publishedAt
            content {text}
          }
        }
      }
    }
  }
`;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
};

const Blog = () => {

  const host = "zhafran.hashnode.dev";

  const { loading, error, data } = useQuery(GET_POSTS, {
    variables: { host },
  });

  if (loading) return (
    <div className="blog-list-page">
      <div>Loading...</div>
    </div>
  );
  if (error) return <div>Error loading posts</div>;

  const posts = data.publication.posts.edges.map(edge => edge.node);

  return (
    <>
      <Helmet>
        <title>Blog · Zhafran Arman</title>
        <link rel="canonical" href="https://zhafranarman.com/blog" />
        <meta name="description" content="Thoughts and Small Discoveries I've gathered to learn and read. Discover the latest in IT Scape." />
      </Helmet>
      <Transition>
        <div className="blog-list-page">
          <section>
            <header className="container blog-section">
              <h1 className="blog-section-title">Thoughts and Discoveries</h1>
              <h2 className="blog-section-subtitle">
              Here are some of the Thoughts and Small Discoveries I've gathered along the way. Maybe you'll find something that resonates or helps you, Happy reading!
              </h2>
            </header>
          </section>
          <section className="blog-list-section container">
            <div className="blog-list">
              {posts.map((post) => (
                <article key={post.slug} className="blog-card">
                  {/* <figure className="blog-thumbnail-wrapper">
                  <img className="blog-thumbnail" src={post.coverImage.url} alt={post.title} />
                  </figure> */}
                  <div className="blog-label-row">
                    <span className="blog-label">
                      {post.tags && post.tags.length > 0 ? post.tags.map(tag => tag.name).join(", ") : "No tags"}
                    </span>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="blog-read-time">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>{post.readTimeInMinutes} min read</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.content.text}</p>
                  <Link to={`/blog/${post.slug}`} className="hover">Read More</Link>
                </article>
              ))}
            </div>
          </section>
        </div>
      </Transition>
    </>
  );
};

export default Blog;