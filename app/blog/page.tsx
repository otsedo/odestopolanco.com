"use client"
import BlogPost from "@/components/BlogPost";
import supabase from '../../lib/supabase'
import { useCallback, useEffect, useState } from "react";
import { PostWithAuthorCategoryType } from '@/types/Collections'

const Blog = () => {
  const [posts, setPosts] = useState<PostWithAuthorCategoryType[]>([]);

  const getBlogPost = useCallback(async () => {
    try {
      let { data, error, status } = await supabase.from('blog_post').select('*,blog_author(name),category(name)').eq('published', true)

      if (error && status === 406) {
        throw error
      }

      if (data) {
        setPosts(data)
      }

    } catch (errorException) {
      // console.log(errorException)
    }
  }, [])

  useEffect(() => {
    getBlogPost();
  }, [getBlogPost])
  return (
    <>
      <p className="text-primaryBlue text-3xl font-semibold text-center mb-2 mx-2">Bienvenido a mi Blog</p>
      <p className="text-secondaryBlue text-lg font-semibold text-center  mx-2 mb-8 md:mb-16">Desde la sombra del backend hasta la luz del full stack</p>
      <div className="flex flex-col mx-4 sm:items-center lg:grid lg:grid-cols-3 lg:gap-10 lg:w-10/12 lg:mx-auto">
        {
          posts ?
            posts.map((post) => (
              <BlogPost post={post} key={post.title} />
            ))
            :
            (<p>No se encontraron post</p>)
        }
      </div>
    </>
  )
}

export default Blog