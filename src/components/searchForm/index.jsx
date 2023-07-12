import { ErrorMessage, Field, Formik } from "formik"
import { Alert, Button, Col, Form, Row } from "react-bootstrap"
import * as Yup from 'yup'
import useCategories from "../../hooks/useCategories"


export const SearchForm = () => {

  const {categories} = useCategories()

   const initialValues = {
    name: "",
    category: "",
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es necesario')
  })

  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}

    >
      {(formik) =>(
      <Form onSubmit={formik.handleSubmit}>
          <Row >
            <Col sm={6} md={6}>
              <Form.Group>
                <Form.Label htmlFor="name">Nombre del brebaje</Form.Label>
                <Field
                id='name'
                type='text'
                placeholder='Ej. Tequila, Vodka, etc.'
                name='name'
                as={Form.Control}
                />
                <ErrorMessage
                  name="name"
                  component={Form.Text}
                  className="ms-2 text-danger"
                />
              </Form.Group>
            </Col>
            <Col sm={6} md={6}>
              <Form.Group>
                <Form.Label htmlFor="category">Categorias</Form.Label>
                <Field
                id='category'
                name='category'
                as={Form.Select}>
                  <option value="" defaultValue={''} hidden>- Seleccione categoria -</option>
                  {
                    categories.sort((a,b)=>a.strCategory > b.strCategory ? 1 : a.strCategory < b.strCategory ? -1 : 0 ).map(category =>(
                      <option value={category.strCategory}
                      key={category.strCategory}>
                        {category.strCategory}
                      </option>
                    ))
                  }
                </Field>
              </Form.Group>
            </Col>
          </Row>
          <Row className="d-flex justify-content-end mt-3">
            <Col sm={3} md={3} className="d-flex justify-content-end ">
            <Button
            variant="danger"
            disabled={false}
            type="submit"
            >Buscar cocktail
            </Button>
            </Col>
          </Row>
        </Form>
        )
        
      }
    </Formik>
  )
}
