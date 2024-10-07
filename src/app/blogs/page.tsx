// pages/blog/index.js
import React from "react";
import { FiBookOpen } from "react-icons/fi";
import BlogCard from "@/app/custom/BlogCard";
import { blogs } from "@/app/config/profile";

const BlogPage = () => {
  return (
    <>
      <div className="text-center mb-10 mt-10">
        <FiBookOpen className="text-orange-600 mx-auto mb-10" size={40} />
        <h1 className="text-2xl font-bold">Blogs Written</h1>
        <p className="text-gray-500 mt-8"></p>
      </div>
      <div className="p-8 bg-white max-w-6xl mx-auto mt-10">
        {/* Icon and Heading Section */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} /> // Use BlogCard component
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
