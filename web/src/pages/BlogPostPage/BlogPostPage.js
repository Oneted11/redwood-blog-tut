import { Link, routes } from '@redwoodjs/router'
import BlogPostCell from 'src/components/BlogPostCell'
const BlogPostPage = ({ id }) => {
  console.log('BlogPost', { id })
  return (
    <>
      <BlogPostCell id={id} />
    </>
  )
}

export default BlogPostPage
