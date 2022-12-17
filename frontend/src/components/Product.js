import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={' /product/$product.id'}>
            <Card.Img src={product.image}/>
            </a>
            <Card.Body>
                <a href={'/product/${product.id}'}>
                <Card.Title as="div">
                    <strong>{product.name}</strong>
                </Card.Title>
                </a>

                <Card.Text as="div">
                    <div className='my-3'>
                        {product.rating} from {product.reviews} reviews
                        <Rating value={product.rating} text={'${product.reviews} reviews'} color={'#f8e825'}/>
                    </div>
                </Card.Text>
                
                <Card.Text as="h3">
                    €{product.rating}
                </Card.Text>
                
            </Card.Body>
        
       
    </Card>
  )
}

export default Product
