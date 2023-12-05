"use client"
import { createClient } from "@supabase/supabase-js";
import { useCallback, useEffect, useState } from "react";


const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const Blog = () => {

  const [loading, setLoading] = useState(false)
  const [id, setId] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [featured, setFeatured] = useState('')
  const [featureImage, setFeatureImage] = useState('')
  const [author, setAuthor] = useState()
  const [cathegory, setcathegory] = useState('')
  const [published, setpublished] = useState('')



  const getBlogPost = useCallback(async () => {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('blog_post')
        .select(`id, created_at, title, title,slug,excerpt,content,image,featured,feature_image,author,cathegory,published,
        blog_cathegory (id,name),
        blog_author (id,name,photo_url)`)



      console.log(data)
      console.log(error)


      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setId(data.title)

      }
    } catch (error) {

    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getBlogPost();
  }, [getBlogPost])


  if (loading) return <p>Loading...</p>;

  return (
    <div className='min-h-screen'>










    </div>
  )
}

export default Blog