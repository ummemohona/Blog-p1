"use client";
import blogData from '../../Data/blogData.json';

const PostPage = ({ params }) => {
  console.log(params);

  const post = blogData.find((post) => post.id === params.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center text-center  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full ml-2 rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={post.image} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.content}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.date}</p>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
