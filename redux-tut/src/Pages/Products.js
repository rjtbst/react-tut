import React from 'react'
import {Card,Button} from 'react-bootstrap';
import watch from "../assets/images/watch.png"
import {Link} from "react-router-dom"
  const Products = () => {
  
  return (
    <div> <h1>Products</h1>
    <div>
     <Card style={{ width: '18rem' }} >
  <Card.Img variant="top" src={watch} />
  <Card.Body>
    <Card.Title>apple watch 3</Card.Title>
    <Card.Text>
      waterproof, 6 months warranty
    </Card.Text>
    <strong>Price: 1000</strong> <br />
    <Button variant="primary" as={Link} to="/cart">Add to Cart</Button>
  </Card.Body>
</Card>
     </div>
    </div>
  )
}

export default Products