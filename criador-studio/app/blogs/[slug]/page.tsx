import { getPostBySlug, getAllPosts } from '@/lib/wordpress'
import { notFound } from 'next/navigation'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import BlogPostContent from '@/Components/BlogPostContent'

export const revalidate = 60

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <>
      <Navbar />
      <BlogPostContent post={post} />
      <Footer />
    </>
  )
}
