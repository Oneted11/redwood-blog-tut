import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <h1>
        <Link to={routes.home()}>Redwood Blog</Link>
      </h1>

      <p>
        <Link to={routes.home()}>Home</Link>
        <br></br>
        <Link to={routes.about()}>About</Link>
      </p>
    </>
  )
}

export default HomePage
