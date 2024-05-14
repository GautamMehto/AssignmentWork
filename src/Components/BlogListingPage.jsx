import { useState, useEffect } from 'react';
import axios from 'axios';

const BlogListing = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://api.idevlive.com/ihost/blog_getPosts', {
        headers: {
          'HTTP_X_API_KEY': 'id_pk_057199809bd29d592306c206efcf3d3d',
        },
      });
      setPosts(res.data.responseMsg);
    };

    fetchPosts();
  }, []);
  

  return (
    <div className="container mx-auto p-10">
      <h1 className="BlogListHeading text-[60px] font-bold text-center">Our Blog List</h1>
      <p className='w-4/5 mx-auto text-center text-[24px] leading-tight'>
      Get in touch with us regarding any of your issues. Be it product support or billing related query or if you want to talk about your business goals, don't hesitate to write to us.
      </p>
      <div className="mt-14 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-evenly items-stretch">
        {posts.map((post) => (
          <div key={post.id} className="max-w-[450px] rounded shadow-xl border-[1px]">
            <div className=' flex justify-center items-center flex-col gap-3 sm:px-10 sm:pt-10 min-[320px]:px-5 min-[320px]:pt-5'>
              <img src={`https://ihost.idevlive.com/assets/blog/${post.image}`} className="" alt="Image Error" />
              
              <div className=' w-full flex flex-col justify-start items-start mb-3'>
              <h2 className="text-[19px] text-left font-semibold">{post.title}</h2>
              <p className='text-[13px] Blog-Body'>
                {
                  post.body
                }
              </p>
              </div>
            </div>
            <div className='w-full py-3 sm:px-10 min-[320px]:px-5 border-t-2'>
            <a href={`blog/${post.title}`} className=" text-blue-500 hover:text-blue-700">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListing;