import { useSelector } from "react-redux";
import { selectAllPosts } from "./posts/postSlice";


const PostsLists = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map(post => (
    <article key={post.id} className="container border my-5 flex flex-col justify-center items-center lg:w-[50%] mx-auto rounded-xl">
      <h3 className="text-2xl font-bold mb-3">{post.title}</h3>
      <p className="m-5">{post.content}</p>
    </article>

  ))

  return (
    <div className="container mx-auto">{renderedPosts}</div>
  )
}


export default PostsLists;