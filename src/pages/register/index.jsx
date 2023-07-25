import { ErrorMessage, Field, Formik } from "formik"
import { Alert, Button, Col, Form, Row } from "react-bootstrap"
import * as Yup from 'yup'
import { registerAuthService } from "../../services/auth.service"
import { useNavigate } from "react-router-dom"
//import useCategories from "../../hooks/useCategories"
//import useDrinks from "../../hooks/useDrinks"


export const Register = () => {

  //const {categories} = useCategories()
  
  //const {getDrinks, loading} = useDrinks()

  const navigate = useNavigate

   const initialValues = {
    name: "",
    email: "",
    password: "",
  }

  const validationSchema = Yup.object({
    //ingredient: Yup.string().required('El nombre es necesario'),
    name: Yup.string().required('El nombre es obligatorio'),
    email: Yup.string().required('El password es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria')

  })

  const handleSubmit =  (values) => {
    //console.log(values)
    //getDrinks(values)
    /* const response = await */ registerAuthService(values)
    //console.log(response);
    navigate('/login')
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}

    >
      {(formik) =>(
      <Form className="d-flex justify-content-center" onSubmit={formik.handleSubmit}>
          
            <Col sm={6} md={6}>
              <Form.Group>
                <Form.Label htmlFor="name">Nombre</Form.Label>
                <Field
                id='name'
                type='text'
                placeholder='Tu nombre'
                name='name'
                as={Form.Control}
                />
                <ErrorMessage
                  name="name"
                  component={Form.Text}
                  className="ms-2 text-danger"
                />
              </Form.Group>
                       
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
              <div className="d-flex justify-content-center mt-2">
                <Button
            className="mb-3"
            variant="primary"
            disabled={false}
            type="submit"
            >
                Registrate
            </Button>
              </div>
              
            </Col>          
        </Form>
        )
        
      }
    </Formik>
  )
}
