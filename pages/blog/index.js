import Link from 'next/link';
import { fetchEntries } from '../../lib/contentful';

export async function getStaticProps() {
  const posts = await fetchEntries();
  return {
    props: {
      posts,
    },
  };
}

const BlogIndex = ({ posts }) => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.sys.id}>
            <Link href={`/blog/${post.fields.slug}`}>
              <a>{post.fields.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogIndex;
