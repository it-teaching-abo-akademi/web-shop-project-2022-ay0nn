import React, {useState, useEffect} from 'react'
import {  Row,Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/Product'
import Loader from '../components/Loader'

import message from '../components/message'
import { listProducts } from '../actions/productActions'

function Homepage() {

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList

  useEffect(()=> {
    dispatch(listProducts())
  
  }, []) 
  
  return (
    <div>
      <h1>
        Latest Product
      </h1>
      {
        loading ? <Loader/>
          : error ? <message variant='danger'>{error}</message>
          :
          
      <Row>
        {
            products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
                </Col>
            ))
        }
      </Row>
      }
      
    </div>
  )
}

export default Homepage
