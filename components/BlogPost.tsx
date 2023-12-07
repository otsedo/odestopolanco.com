import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";



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
    <div>



      <Link href={`/blog/${post.slug}`}>
        <Image src={post.feature_image} height={1} width={500} alt={post.title} priority={true} className='rounded-xl' />
        <h2 className='text-lg text-left text-primaryBlue font-bold mt-2'>{post.title}</h2>
      </Link>


      <p className='text-xs text-left mt-2 '>{post.excerpt}</p>
      <p className='flex text-xs justify-start mt-3'><span className='mr-2'><FaCalendarAlt size={16} /></span>{formatDate(post.created_at)}</p>

    </div>
  );
};

export default BlogPost