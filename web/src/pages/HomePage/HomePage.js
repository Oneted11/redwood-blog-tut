import { Link, routes } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>

      <p>
        <Link to={routes.home()}>Home</Link>`
        <Link to={routes.about()}>About</Link>
      </p>
    </>
  )
}

export default HomePage
