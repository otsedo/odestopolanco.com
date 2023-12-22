"use client"
import BlogPost from "@/components/BlogPost";
import supabase from '../../lib/supabase'
import { useCallback, useEffect, useState } from "react";
import { QueryData } from '@supabase/supabase-js'

const postQuery = supabase.from('blog_post').select(`id, created_at, title, slug, excerpt, featured, feature_image`);

const Blog = () => {
  const [posts, setPosts] = useState<QueryData<typeof postQuery>>([]);

  const getBlogPost = useCallback(async () => {
    try {
      let { data, error, status } = await postQuery

      if (error && status === 406) {
        return <>
          <h1>No se encontró el post que buscaba</h1>
        </>
      }

      if (data) {
        setPosts(data)
      }

    } catch (errorException) {
      console.log(errorException)
    }
  }, [])

  useEffect(() => {
    getBlogPost();
  }, [getBlogPost])

  return (
    <div>
      <h1 className="flex flex-col">
        <span className="block text-center  text-primaryBlue font-semibold tracking-wide text-5xl uppercase">Mi Blog</span>
        <span className="block text-center text-secondaryBlue font-semibold tracking-wide text-xl">Desde la sombra del backend hasta la luz del full stack</span>
      </h1>


      <div className="mx-2 p-8">
        {
          posts ?
            posts.map((post) => (
              <BlogPost post={post} key={post.title} />
            ))
            :
            (<p>No se encontraron post</p>)
        }
      </div>
    </div>
  )
}

export default Blog