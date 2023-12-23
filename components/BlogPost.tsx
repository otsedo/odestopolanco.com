import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaCalendarAlt, FaTag } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

interface BlogPostProps {
  post: {
    id: number;
    created_at: Date;
    title: string;
    slug: string;
    excerpt: string;
    featured: string;
    feature_image: string;
  };
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <div className=''>
      <Link href={`/blog/${post.slug}`}>
        <h2 className=''>{post.title}</h2>
        <Image src={post.feature_image} height={1} width={500} alt={post.title} priority={true} className='rounded-xl' />
      </Link>

      <p className='text-md text-left mt-2 '>{post.excerpt}</p>
      <p className='flex text-xs justify-start mt-2'>
        <FaCalendarAlt size={14} /><span className='ml-1'></span> {formatDate(post.created_at)}
        <FaTag size={14} className='ml-2' /><span className='mx-1'>{post.category.name}</span>
        <CgProfile size={14} className='ml-2' /><span className='mx-1'>{post.blog_author.name}</span>
      </p>
    </div>
  );
};

export default BlogPost