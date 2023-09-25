import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { create_recipe } from '../../../JS/Actions'

const RecipeCreate = ({handleClose}) => {
  /////ADD recipe
  const [newTitle, setTitle] = useState('')
  const [newImage, setImage] = useState('')
  const [newIngredients, setIngredients] = useState([''])
  const [newInstructions, setInstractions] = useState([''])
  const [newRate, setRate] = useState(0)


  const dispatch = useDispatch()

    const handleAdd=()=>{
        dispatch(create_recipe({id : Math.random(), title : newTitle ,ingredients : newIngredients, instructions : newInstructions, image : newImage,   rate : newRate}))
        handleClose()
      }
    

  return (
    <div>
    
    <Card className="text-center">
    <Card.Header>Add new Recipe</Card.Header>
    <Card.Body>
      <Card.Text>
      <Form.Control placeholder='add title' onChange={(e)=> setTitle(e.target.value)}/>
      </Card.Text>
      <Card.Text>
      <Form.Control placeholder='add image url' onChange={(e)=>setImage(e.target.value)}/>
      </Card.Text>
      <Card.Text>
      <Form.Control placeholder='add ingredients' onChange={(e)=>setIngredients(e.target.value)}/>
      </Card.Text>
      <Card.Text>
      <Form.Control placeholder='add instructions' onChange={(e)=>setInstractions(e.target.value)}/>
      </Card.Text>
      <Card.Text>
      <Form.Control placeholder='add rate' onChange={(e)=> setRate(e.target.value)}/>
      </Card.Text>
      <Button variant="primary" onClick={()=>handleAdd()}>Add your Recipe</Button>
    </Card.Body>
    <Card.Footer className="text-muted">verify the adding</Card.Footer>
  </Card>
    
    </div>
  )
}

export default RecipeCreate