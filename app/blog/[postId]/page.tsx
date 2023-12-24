"use client"
import PostCard from "@/components/PostCard";
import supabase from '../../../lib/supabase'
import { useCallback, useEffect, useState } from "react";
import { PostWithAuthorCategoryType } from '@/types/Collections'

export default function ProductDetail({ params, }: { params: { postId: string }; }) {

  const [post, setPost] = useState<PostWithAuthorCategoryType>();

  const getBlogPost = useCallback(async () => {
    try {
      let { data, error, status } = await supabase.from('blog_post').select('*,blog_author(name,photo_url),category(name)').eq('published', true).eq('slug', params.postId).single();

      if (error && status === 406) {
        return <>
          <h1>No se encontró el post que buscaba</h1>
        </>
      }

      if (data) {
        setPost(data);
      }

    } catch (errorException) {
      console.log(errorException)
    }
  }, [params.postId])

  useEffect(() => {
    getBlogPost();
  }, [getBlogPost])

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <PostCard post={post} />
    </>
  );
}