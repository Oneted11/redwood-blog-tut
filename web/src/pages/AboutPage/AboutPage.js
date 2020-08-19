import { Link, routes } from '@redwoodjs/router'

const AboutPage = () => {
  return (
    <>
      <h1>
        {' '}
        <Link to={routes.home()}>Redwood Blog</Link>
      </h1>

      <p>
        <Link to={routes.about()}>About</Link>`
      </p>
    </>
  )
}

export default AboutPage
