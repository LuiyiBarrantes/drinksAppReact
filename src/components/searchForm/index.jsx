import { ErrorMessage, Field, Formik } from "formik"
import { Alert, Button, Col, Form, Row } from "react-bootstrap"
import * as Yup from 'yup'
import useCategories from "../../hooks/useCategories"
import useDrinks from "../../hooks/useDrinks"


export const SearchForm = () => {

  const {categories, ingredients} = useCategories()
  
  const {getDrinks, loading} = useDrinks()

  

   const initialValues = {
    ingredient: "",
    category: "",
  }

  const validationSchema = Yup.object({
    ingredient: Yup.string().required('El ingrediente es necesario'),
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
                <Form.Label htmlFor="ingredient">Elige un Ingrediente</Form.Label>
                <Field
                id='ingredient'
                name='ingredient'
                as={Form.Select}>
                  <option value="" defaultValue={''} hidden>- Seleccione ingrediente -</option>
                  {
                    ingredients.sort((a,b)=>a.strIngredient1 > b.strIngredient1 ? 1 : a.strIngredient1 < b.strIngredient1 ? -1 : 0 ).map(ingredient =>(
                      <option 
                      value={ingredient.strIngredient1}
                      key={ingredient.strIngredient1}>
                        {ingredient.strIngredient1} 
                      </option>
                    ))
                  }
                </Field>
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
