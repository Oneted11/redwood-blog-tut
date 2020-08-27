import { Link, routes } from '@redwoodjs/router'

const ContactPage = () => {
  return (
    <>
      <h1>ContactPage</h1>
      <p>Find me in "./web/src/pages/ContactPage/ContactPage.js"</p>
      <p>
        My default route is named "contact", link to me with `
        <Link to={routes.contact()}>Contact</Link>`
      </p>
    </>
  )
}

export default ContactPage
