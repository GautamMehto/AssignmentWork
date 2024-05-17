// SingleBlogPost.js
import { useEffect, useState } from 'react';

const SingleBlogPost = ({path}) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://api.idevlive.com/ihost/blog_getSinglePost/${path}`, {
      headers: {
        Key : "Value"
      }
    })
    .then(response => response.json())
    .then(data => setBlog(data.responseMsg));
  }, []);

  if (!blog) {
    return <div className='w-full flex justify-center items-center text-[60px] my-10 '>Loading...</div>;
  }
  return (
    <div className="container w-4/5 mx-auto ">
      <h1 className="SingleBlogHeading text-[60px] font-bold my-10 text-center">{blog.title}</h1>
      <div className='SingleBlog sm:px-10 md:px-20'  dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
}

export default SingleBlogPost;
