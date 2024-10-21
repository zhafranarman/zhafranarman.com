import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Transition from "../../components/Transition";

const GET_POST = gql`
  query ($host: String!, $slug: String!) {
    publication(host: $host) {
      post(slug: $slug) {
        title
        readTimeInMinutes
        publishedAt
        tags{name}
        seo{
        title
        description
        }
        author{name}
        content {
          html
        }
      }
    }
  }
`;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
};

const BlogPage = () => {
  const { slug } = useParams();
  const host = "zhafran.hashnode.dev";

  const { loading, error, data } = useQuery(GET_POST, {
    variables: { host, slug },
  });

  if (loading) return (
    <Transition>
      <div className="blog-post-container">
        <div>Loading...</div>
      </div>
    </Transition>
  );

  if (error) return (
    <Transition>
      <div className="blog-post-container">
        <div>Loading...</div>
      </div>
    </Transition>
  );

  const post = data.publication.post;

  return (
    <>
      <Helmet>
        <title>{post.title} · {post.tags && post.tags.length > 0 ? post.tags.map(tag => tag.name).join(", ") : "No tags"} by {post.author.name}</title>
        <meta name="description" content={`${post.seo.description}`} />
        <link rel="canonical" href={`https://zhafranarman.com/blog/${slug}`} />
        <meta name="author" content={`${post.author.name}`}/>

        <meta property="og:title" content={`${post.title} · ${post.tags && post.tags.length > 0 ? post.tags.map(tag => tag.name).join(", ") : "No tags"} by ${post.author.name}`} />
        <meta property="og:description" content={`${post.seo.description}`} />
        <meta property="og:url" content={`https://zhafranarman.com/blog/${slug}`} />

        <meta name="twitter:title" content={`${post.title} · ${post.tags && post.tags.length > 0 ? post.tags.map(tag => tag.name).join(", ") : "No tags"} by ${post.author.name}`} />
        <meta name="twitter:description" content={`${post.seo.description}`}  />
      </Helmet>
      <Transition>
        <div className="blog-post-container">
          <section className="container">
            <div className="blog-page-breadcrumbs">
              <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
              </svg>
              <Link to="/blog">Blog</Link>
              <span>/</span>
              <span>{post.tags && post.tags.length > 0 ? post.tags.map(tag => tag.name).join(", ") : "No tags"}</span>
            </div>
            <div className="blog-page-title">
              <h1>{post.title}</h1>
              <div className="blog-page-details">
                <div className="blog-read-time">
                  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>{post.readTimeInMinutes} min read</span>
                </div>
                <div>{formatDate(post.publishedAt)}</div>
              </div>
            </div>
          </section>
          <section dangerouslySetInnerHTML={{ __html: post.content.html }} className="container blog-page-content">
          </section>
        </div>
      </Transition>
    </>
  );
};

export default BlogPage;
