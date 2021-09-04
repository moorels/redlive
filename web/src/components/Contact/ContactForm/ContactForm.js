import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const ContactForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.contact?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="contactname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Contactname
        </Label>
        <TextField
          name="contactname"
          defaultValue={props.contact?.contactname}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="contactname" className="rw-field-error" />

        <Label
          name="contactemail"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Contactemail
        </Label>
        <TextField
          name="contactemail"
          defaultValue={props.contact?.contactemail}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="contactemail" className="rw-field-error" />

        <Label
          name="contactphone"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Contactphone
        </Label>
        <TextField
          name="contactphone"
          defaultValue={props.contact?.contactphone}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="contactphone" className="rw-field-error" />

        <Label
          name="contactsuburb"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Contactsuburb
        </Label>
        <TextField
          name="contactsuburb"
          defaultValue={props.contact?.contactsuburb}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="contactsuburb" className="rw-field-error" />

        <Label
          name="contactmessage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Contactmessage
        </Label>
        <TextField
          name="contactmessage"
          defaultValue={props.contact?.contactmessage}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="contactmessage" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ContactForm
