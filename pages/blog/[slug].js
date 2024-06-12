import { fetchEntry } from '../../lib/contentful';

export async function getStaticPaths() {
  const entries = await fetchEntries();
  const paths = entries.map((entry) => ({
    params: { slug: entry.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await fetchEntry(params.slug);

  return {
    props: {
      post,
    },
  };
}

const BlogPost = ({ post }) => {
  return (
    <div>
      <h1>{post.fields.title}</h1>
      <p>{post.fields.content}</p>
    </div>
  );
};

export default BlogPost;
