"use client"
import BlogPost from "@/components/BlogPost";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { createClient } from "@supabase/supabase-js";
import { useCallback, useEffect, useState } from "react";


const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

interface BlogPost {
  id: number;
  created_at: Date;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  featured: string;
  feature_image: string;
  author: any;
  category: any;
  published: boolean;
  blog_category: { id: number; name: string }[];
  blog_author: { id: number; name: string, photo_url: string }[];
}

const Blog = () => {

  const [posts, setPosts] = useState<BlogPost[]>([]);


  const getBlogPost = useCallback(async () => {
    try {


      let { data, error, status } = await supabase
        .from('blog_post')
        .select(`id, created_at, title, slug,excerpt,featured,feature_image`)

      if (error && status !== 406) {
        throw error
      }

      console.log(data)

      if (data) {
        setPosts(data);
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
              <BlogPost post={post} key={post.id} />
            ))
            :
            (<p>No existen post</p>)
        }
      </div>





    </div>
  )
}

export default Blog