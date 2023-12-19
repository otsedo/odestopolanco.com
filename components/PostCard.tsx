import Image from 'next/image';

import { BlogPostProps } from './Types';
import { formatDate } from '@/lib/utils';

const PostCard = ({ post }: BlogPostProps) => {

  if (!post) {
    return <p>Loading...</p>;
  }


  return (
    <div>
      <div className='flex flex-col justify-center mx-2'>
        <h1 className='text-2xl md:text-3xl text-center font-bold mb-2'>{post.title}</h1>
        <p className='font-semibold text-primaryBlue text-sm md:text-lg text-center mb-2'>{formatDate(post.created_at)} | {post.blog_author.name}</p>

        <div className=' w-full md:flex md:m-auto md:w-3/5'>
          <Image src={post.image} width={100} height={100} alt={post.title} layout="responsive" />
        </div>

        <p className='text-sm mb-4 mt-4 text-center'>{post.excerpt} - <span className='text-primaryBlue text-sm'>{post.category.name}</span></p>

        <p className='mx-4'>{post.content}</p>
      </div>
    </div>
  );
};

export default PostCard;
