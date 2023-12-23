import Image from 'next/image';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Post } from './types'


import { formatDate } from '@/lib/utils';
import { FaCalendarAlt, FaTag } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

const PostCard = ({ post }: Post) => {
  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className='flex flex-col justify-center mx-2 lg:mx-auto h-max'>
        <div className=' w-full lg:flex lg:m-auto lg:w-3/5'>
          <Image src={post.image} width={100} height={100} alt={post.title} layout="responsive" />
        </div>
        <div className='lg:flex lg:mx-auto'>
          <div className='flex items-center'>
            <FaCalendarAlt size={18} /> <span className='m-2 text-lg'>{formatDate(post.created_at)}</span>
          </div>
          <div className='flex items-center'>
            <FaTag size={18} /> <span className='m-2 text-lg'>{post.category.name}</span>
          </div>
          <div className='flex items-center'>
            <CgProfile size={18} /> <span className='m-2 text-lg'>{post.blog_author.name}</span>
          </div>
        </div>
      </div>

      <div className='lg:flex lg:align-middle lg:justify-center mx-2 mb-80 lg:mx-auto'>
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ node, inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || '');

              return !inline && match ? (
                <SyntaxHighlighter style={atomDark} PreTag="div" language={match[1]} {...props}>
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
          className='prose 
          prose-h1:text-primaryBlue  prose-h1:text-4xl prose-h1:text-center prose-h1:mt-5 prose-h1:font-bold
          prose-h2:text-center prose-h2:mt-4 prose-h2:text-secondaryBlue prose-h2:text-2xl
          prose-h3:text-lightBlue
          prose-p:mt-5 prose-p:mx-4 prose-p:text-lightBlue
          prose-a:text-secondaryBlue
          prose-strong:text-lightBlue
          prose-li:text-lightBlue
          prose-table:text-lightBlue    
          prose-code:text-lightBlue 
          prose-th:text-lightBlue  
          prose-blockquote:text-lightBlue md:w-full'
        >
          {post.content}
        </Markdown>
      </div>
    </>
  );
};

export default PostCard;
