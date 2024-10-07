// components/BlogSection.js
import React from "react";
import Link from "next/link";
import { FaNewspaper } from "react-icons/fa";
import BlogCard from "./BlogCard"; // Import the BlogCard component
import { blogs } from "@/app/config/profile";

const BlogSection = () => {
  return (
    <div className="p-8 bg-white border border-gray-100 rounded-xl shadow-sm max-w-6xl mx-auto mt-10">
      {/* Icon and Heading Section */}
      <div className="text-center mb-8">
        <FaNewspaper className="text-orange-600 mx-auto mb-4" size={40} />
        <h2 className="text-3xl font-bold">Blogs</h2>
        <p className="text-gray-500 mt-2">
          Insights, tutorials, and thoughts on modern web development.
        </p>
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} /> // Use BlogCard component
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <Link href="/blog">
          <button className="flex items-center justify-between px-6 py-3 bg-gray-100 text-black font-medium rounded-lg border border-gray-300 hover:bg-gray-200 transition">
            <span className="font-medium">View All Blogs</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
