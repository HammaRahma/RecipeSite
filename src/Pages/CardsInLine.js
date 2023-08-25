import React from 'react'
import { Button, Card } from 'react-bootstrap'

const CardsInLine = ({recipe}) => {
    //console.log(recipe)
  return (
    <div>

    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={recipe.image} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>
          {recipe.instructions}
        </Card.Text>
        {recipe.rate}
      </Card.Body>
    </Card>
    
    
    </div>
  )
}

export default CardsInLine