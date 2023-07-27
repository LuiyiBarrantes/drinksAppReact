import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Col } from 'react-bootstrap'
import useDrinks from '../../hooks/useDrinks'
import useCart from '../../hooks/useCart'
import { types } from '../../types'
import { IconShoppingCartPlus } from '@tabler/icons-react'
import Swal from 'sweetalert2'
import { IconStar } from '@tabler/icons-react'
import { IconStarFilled } from '@tabler/icons-react'
import useAuth from '../../hooks/useAuth'

export const DrinkCard = ({ drink }) => {
    const { strDrinkThumb, strDrink, idDrink } = drink
    const { handleDrinkIdClick, handleShowModalClick } = useDrinks()
    const { dispatch } = useCart()
    const { addItemToCart } = types
    const {toggleFavorite, favoriteDrinks, user} = useAuth()
    const payload = {idDrink,
        strDrink,
        strDrinkThumb,
        price: (drink.idDrink/100).toFixed(0)}
    const [fillStar, setFillStar] = useState(false);
    //console.log('idDrink', idDrink)
    const handleAddCart = () => {
        //console.log(drink);
        dispatch({
            type: addItemToCart,
            payload: {...drink,
                price: (drink.idDrink/100).toFixed(0)}
        })
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bebida agregada al carrito',
            showConfirmButton: false,
            timer: 1500,
            width: '250px'
        })
    }
    const drinkIdString = idDrink/* .toString(); */
    const isFavoriteDrink = favoriteDrinks?.some(
        (favorite) => favorite.idDrink === drinkIdString
      );
    //console.log('isFavoriteDrink', isFavoriteDrink)
    useEffect(() => {
      if (isFavoriteDrink) {
        setFillStar(true);
      } else {
        setFillStar(false);
      }
    }, [isFavoriteDrink]);
    const handleLoginAlert = () => {
        Swal.fire({
          icon: 'info',
          title: 'Inicia sesión',
          text: 'Debes iniciar sesión para agregar a favoritos.',
          showConfirmButton: true,
          confirmButtonText: 'Entendido',
        });
      };
    const handleToggleStar = () => { 
        if (!user) {
            handleLoginAlert();
            return;
          }
        !fillStar?
          setFillStar(true)                     
       :
        setFillStar(false);
        toggleFavorite(payload)
        
     }

    return (
        <Col md={6} lg={3} className='d-flex align-content-stretch'>
            <Card className='mb-4 position-relative'>
                <Card.Img
                    variant='top'
                    src={strDrinkThumb}
                    alt={`Imagen de ${strDrink}`}
                />
                {!fillStar  ? <IconStar onClick={handleToggleStar} width={30} height={30} className='btn bg-warning shadow-lg position-absolute top-0 end-0 rounded-circle p-1 '></IconStar> : <IconStarFilled onClick={handleToggleStar} width={30} height={30} className='btn bg-warning shadow-lg position-absolute top-0 end-0 rounded-circle p-1 '></IconStarFilled> }
                <Card.Body className='d-flex flex-column justify-content-between'>
                    <Card.Title>
                        {strDrink}
                    </Card.Title>
                    <Button
                        variant='warning'
                        className='w-100 text-uppercase mt-2'
                        onClick={() => {
                            handleDrinkIdClick(idDrink)
                            handleShowModalClick()
                        }
                        }
                    >
                        Ver receta
                    </Button>
                    <Button
                        variant='danger'
                        className='w-100 text-uppercase mt-1'
                        onClick={handleAddCart}

                    >
                        Comprar <IconShoppingCartPlus></IconShoppingCartPlus>
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

DrinkCard.propTypes = {
    drink: PropTypes.shape({
        strDrinkThumb: PropTypes.string.isRequired,
        strDrink: PropTypes.string.isRequired
    }).isRequired
}
//PropTypes.objectOf().isRequired

