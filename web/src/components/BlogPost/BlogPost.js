import { Link, routes } from '@redwoodjs/router'

const BlogPost = ({ post: { id, title, body, createdAt } }) => {
  // console.log(post)
  return (
    <article key={id}>
      <header>
        <h2>
          <Link to={routes.blogPost({ id })}>{title}</Link>
        </h2>
      </header>
      <p>{body}</p>
      <div>Posted at :</div>
      <time>{createdAt}</time>
    </article>
  )
}

export default BlogPost
