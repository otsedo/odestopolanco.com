import Image from 'next/image';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Post } from './types'


import { formatDate } from '@/lib/utils';

const PostCard = ({ post }: Post) => {
  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className='flex flex-col justify-center mx-2'>
        <h1 className='text-4xl md:text-3xl text-center font-bold mb-2 text-primaryBlue'>{post.title}</h1>
        <p className='font-semibold text-lightBlue text-sm md:text-lg text-center mb-2'>{formatDate(post.created_at)} | {post.blog_author.name}</p>
        <div className=' w-full md:flex md:m-auto md:w-3/5'>
          <Image src={post.image} width={100} height={100} alt={post.title} layout="responsive" />
        </div>

        <p className='text-sm mb-4 mt-4 text-center'>{post.excerpt} - <span className='text-primaryBlue text-sm'>{post.category.name}</span></p>

      </div>



      <div className='w-full md:flex md:m-auto md:w-4/5'>
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
          className='prose prose-h1:text-primaryBlue prose-h2:text-primaryBlue prose-p:text-lightBlue prose-a:text-primaryBlue prose-strong:text-lightBlue 
          prose-li:text-lightBlue prose-table:text-lightBlue prose-code:text-lightBlue prose-th:text-lightBlue prose-h3:text-lightBlue prose-blockquote:text-lightBlue md:w-full'
        >
          {post.content}
        </Markdown>
      </div>
    </div>
  );
};

export default PostCard;
