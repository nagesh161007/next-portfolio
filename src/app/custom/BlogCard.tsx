// components/BlogCard.js
import React from "react";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link href={`/blog/${blog.id}`} passHref>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-transform duration-300 cursor-pointer transform hover:scale-105">
        {/* Blog Image */}
        <Image
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
            <FaExternalLinkAlt className="text-gray-600" />
          </div>
          <p className="text-gray-600">{blog.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
