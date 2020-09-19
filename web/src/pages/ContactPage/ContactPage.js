import { Link, routes } from '@redwoodjs/router'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'
import {
  Form,
  TextField,
  Submit,
  TextAreaField,
  Label,
  FieldError,
} from '@redwoodjs/forms'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <BlogLayout>
      <Form onSubmit={onSubmit} validation={{ mode: 'onBlur' }}>
        <Label name="name" errorClassName="error">
          {' '}
          Name
        </Label>
        <TextField
          name="name"
          placeHolder="Add name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />

        <Label name="email" errorClassName="error">
          Email
        </Label>
        <TextField
          name="email"
          placeHolder="add email"
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^.]+\..+/,
              message: 'Please enter a valid email address',
            },
          }}
          errorClassName="error"
        />
        <FieldError name="email" className="error" />

        <Label name="message" errorClassName="error">
          Message
        </Label>

        <TextAreaField
          name="message"
          placeHolder="add text"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="message" className="error" />

        <Submit>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
