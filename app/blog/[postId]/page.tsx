"use client"
import PostCard from "@/components/PostCard";
import supabase from '../../../lib/supabase'
import { useCallback, useEffect, useState } from "react";
import { Post } from '@/components/types'

export default function ProductDetail({ params, }: { params: { postId: string }; }) {

  const postQuery = supabase
    .from('blog_post')
    .select(`created_at,title, content, image,excerpt,blog_author (name, photo_url),category (name)`)
    .eq('slug', params.postId);

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
  }, [postQuery])

  useEffect(() => {
    getBlogPost();
  }, [getBlogPost])

  return (
    <>
      <PostCard post={post[0]} />
    </>
  );
}