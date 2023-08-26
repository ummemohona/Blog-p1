import Link from 'next/link';

import blogData from '../Data/blogData.json';

const Blog = () => {
  return (
    <div>
      <h1 
      className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6">All Blogs </h1>

      <div className="flex flex-wrap">
        {blogData.map((post) => (
          <div key={post.id} className='m-2'>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src={post.image} alt="" />
              </a>
              <div className="p-5">
                <Link href={`/post/${post.id}`} >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.content}</p>
                <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  {post.date}
                </p>
              </div>
            </div>
          </div>
        ))}

      </div>




    </div>
  );
};

export default Blog;
