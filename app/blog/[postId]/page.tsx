"use client"
import PostCard from "@/components/PostCard";
import supabase from '../../../lib/supabase'
import { useCallback, useEffect, useState } from "react";
import { QueryData } from "@supabase/supabase-js";
import { Post } from '@/components/types'


const postQuery = supabase.from('blog_post').select(`
              created_at,title, content, image,excerpt,
              blog_author (name, photo_url),
              category (name)
        `);

export default function ProductDetail({
  params,
}: {
  params: { postId: string };
}) {
  // const [post, setPost] = useState<QueryData<typeof postQuery>>([]);
  const [post, setPost] = useState<typeof Post[]>([]);

  const getBlogPost = useCallback(async () => {
    try {
      let { data, error, status } = await postQuery

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
  }, [])

  useEffect(() => {
    getBlogPost();
  }, [getBlogPost])

  return (
    <>
      <PostCard post={post[0]} />
    </>
  );
}