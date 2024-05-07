import { useDispatch } from "react-redux";
import { useState } from "react";

import { postAdded } from "./posts/postSlice";
const AddPostsForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onTitleChange = e => setTitle(e.target.value);
  const onContentChange = e => setContent(e.target.value);

  const onSaveTodo = () => {
    if (title && content) {
      dispatch(
        postAdded(title, content)

      )
      setTitle('')
      setContent('')

    }


  }


  return (
    <section className="container flex mx-auto lg:w-[50%]">
      <form className="container flex flex-col mx-auto">
        <label htmlFor="postTitle" className="flex mx-auto font-bold my-5">Post Title</label>
        < input type='text' id='postTitle' name='postTitle' value={title} onChange={onTitleChange} className="border" />
        <label htmlFor="postContent" className="flex mx-auto font-bold my-5">Content</label>
        < textarea type='text' id='postContent' name='postContent' value={content} onChange={onContentChange} className="border" />
        <button type='button' onClick={onSaveTodo} className="border p-5 my-5 mx-auto bg-blue-500 text-slate-50 rounded-2xl"> Submit Todo</button>

      </form>

    </section>
  )
}

export default AddPostsForm