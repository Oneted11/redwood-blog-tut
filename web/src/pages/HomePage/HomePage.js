import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const HomePage = () => {
  return (
    <>
      <BlogLayout>
        <p>this is the homePage </p>
      </BlogLayout>
    </>
  )
}

export default HomePage
