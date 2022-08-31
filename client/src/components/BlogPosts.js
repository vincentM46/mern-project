import BlogPost from "./BlogPost";

export default function BlogPosts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <BlogPost post={p} />
      ))}
    </div>
  );
}