"use client"
import BlogPost from "@/components/BlogPost";
import supabase from '../../lib/supabase'
import { useCallback, useEffect, useState } from "react";
import { QueryData } from '@supabase/supabase-js'

const postQuery = supabase.from('blog_post').select(`id, created_at, title, slug, excerpt, featured, feature_image, blog_author (name),
              category (name)`);

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
    <div className="px-4 
    sm:flex sm:flex-col sm:items-center
  
    
    
    
    ">
      {
        posts ?
          posts.map((post) => (
            <BlogPost post={post} key={post.title} />
          ))
          :
          (<p>No se encontraron post</p>)
      }
    </div>
  )
}

export default Blog