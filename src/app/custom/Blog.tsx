import React from "react";
import Link from "next/link";
import { FaNewspaper, FaExternalLinkAlt } from "react-icons/fa";
import { blogs } from "@/app/config/profile";
import Image from "next/image";

const BlogSection = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-4 mt-10">
        <div className="flex items-center">
          <FaNewspaper className="text-orange-600 mr-2" size={24} />
          <h2 className="text-2xl font-bold">Blog</h2>
        </div>
        <Link href="/blog">
          <button className="flex items-center justify-between px-4 py-2 bg-gray-100 text-black font-medium rounded-lg border border-gray-300 hover:bg-gray-200 transition">
            <span className="font-medium">View All</span>
          </button>
        </Link>
      </div>
      <div className="p-8 bg-white border border-gray-100 rounded-xl shadow-sm max-w-6xl mx-auto">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <Link key={blog.id} href={blog.link} passHref target="_blank">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-300 cursor-pointer transform hover:scale-105">
                {/* Blog Image */}
                <Image
                  unoptimized
                  width={32}
                  height={32}
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />

                {/* Blog Details */}
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                    <FaExternalLinkAlt className="text-gray-600" size={16} />
                  </div>
                  <p className="text-gray-600">{blog.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogSection;
