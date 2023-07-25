import { ErrorMessage, Field, Formik } from "formik"
import { Alert, Button, Col, Form, Row } from "react-bootstrap"
import * as Yup from 'yup'
import { loginAuthService } from "../../services/auth.service"
import useAuth from "../../hooks/useAuth"
import { Link } from "react-router-dom"

export const Login = () => {
  const { login, alert } = useAuth()

  const initialValues = {
    email: "",
    password: "",
  }

  const validationSchema = Yup.object({

    email: Yup.string().required('El password es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria')

  })

  const handleSubmit = (values) => {//
    //console.log(values)
    //getDrinks(values)
    login(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}

    >
      {(formik) => (
        <Form className="d-flex justify-content-center" onSubmit={formik.handleSubmit}>

          <Col sm={6} md={6}>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Field
                id='email'
                type='email'
                placeholder='user@mail.com'
                name='email'
                as={Form.Control}
              />
              <ErrorMessage
                name="email"
                component={Form.Text}
                className="ms-2 text-danger"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Contraseña</Form.Label>
              <Field
                id='password'
                type='password'
                name='password'
                as={Form.Control}
              />
              <ErrorMessage
                name="password"
                component={Form.Text}
                className="ms-2 text-danger"
              />
            </Form.Group>
            {alert && <Alert className="mt-3 d-flex justify-content-center" variant="danger">{alert}</Alert> }
            <div className="d-flex justify-content-between">
              <h6>No tienes cuenta? registrate <Link to={'/register'}>aquí</Link></h6>
              <Button
                className="mt-3"
                variant="primary"
                disabled={false}
                type="submit"
              >
                Ingresar
              </Button>
            </div>
          </Col>
        </Form>
      )

      }
    </Formik>
  )
}
