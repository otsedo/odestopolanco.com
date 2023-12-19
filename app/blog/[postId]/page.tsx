"use client"
import PostCard from "@/components/PostCard";
import { createClient } from "@supabase/supabase-js";
import { useCallback, useEffect, useState } from "react";
import { BlogPost } from "@/components/Types";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');

export default function ProductDetail({
  params,
}: {
  params: { postId: string };
}) {
  const [post, setPost] = useState<BlogPost>();
  const getBlogPost = useCallback(async () => {
    try {
      let { data, error, status } = await supabase
        .from('blog_post')
        .select(`
              created_at,title, content, image,excerpt,
              blog_author (name, photo_url),
              category (name)
        `)
        .eq('slug', params.postId)
        .single();

      if (error && status === 406) {
        return <>
          <h1>No se encontró el post que buscaba</h1>
        </>
      }

      if (data) {
        console.log(data)
        setPost(data);
      }

    } catch (errorException) {
      console.log(errorException)

    }
  }, [params.postId])

  useEffect(() => {
    getBlogPost();
  }, [getBlogPost])

  return (
    <>
      <PostCard post={post} />
    </>
  );
}