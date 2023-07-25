import { ErrorMessage, Field, Formik } from "formik"
import { Alert, Button, Col, Form, Row } from "react-bootstrap"
import * as Yup from 'yup'
import useCategories from "../../hooks/useCategories"
import useDrinks from "../../hooks/useDrinks"


export const SearchForm = () => {

  const {categories} = useCategories()
  
  const {getDrinks, loading} = useDrinks()

  

   const initialValues = {
    ingredient: "",
    category: "",
  }

  const validationSchema = Yup.object({
    ingredient: Yup.string().required('El nombre es necesario'),
    category: Yup.string().required('La categria es necesaria')
  })

  const handleSubmit = (values) => {
    //console.log(values)
    getDrinks(values)
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
                <Form.Label htmlFor="ingredient">Nombre del ingrediente</Form.Label>
                <Field
                id='ingredient'
                type='text'
                placeholder='Ej. Tequila, Vodka, etc.'
                name='ingredient'
                as={Form.Control}
                />
                <ErrorMessage
                  name="ingredient"
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
                      <option 
                      value={category.strCategory}
                      key={category.strCategory}>
                        {category.strCategory}
                      </option>
                    ))
                  }
                </Field>
                <ErrorMessage
                  name="category"
                  component={Form.Text}
                  className="ms-2 text-danger"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="d-flex justify-content-end mt-3">
            <Col sm={3} md={3} className="d-flex justify-content-end ">
            <Button
            className="mb-3"
            variant="danger"
            disabled={loading}
            type="submit"
            >{loading? 'Buscando...' : 'Buscar bebida'}
            </Button>
            </Col>
          </Row>
        </Form>
        )
        
      }
    </Formik>
  )
}
