import BlogLayout from 'src/layouts/BlogLayout'
import {
  Form,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit
} from '@redwoodjs/forms'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <BlogLayout>
      <Form onSubmit={onSubmit} validation={{ mode: 'onBlur' }}>
        <Label name="name" />
        <TextField
          name="name"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="name" style={{ display: 'block', color: 'red' }}/>

        <Label name="email" />
        <TextField
          name="email"
          errorClassName="error"
          validation={{ required: true, pattern: {value: /[^@]+@[^.]+\..+/} }}
        />
        <FieldError name="email" style={{ display: 'block', color: 'red' }}/>

        <Label name="message" />
        <TextAreaField
          name="message"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError name="message" style={{ display: 'block', color: 'red' }}/>

        <Submit>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage