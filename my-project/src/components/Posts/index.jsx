import { PostCard } from "../PostCard/inde";

export const Posts = ({ posts }) => {
  return (
    <div className='posts'>
      {posts.map(post => (
        <PostCard
          key={post.id}
          id={post.id}
          cover={post.cover}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
}
