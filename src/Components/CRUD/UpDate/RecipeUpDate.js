import React, { useState } from 'react'
import { Button, Card, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { update_recipe } from '../../../JS/Actions'

const RecipeUpDate = ({recipe}) => {
  //const list = useSelector(state=>state.RecipeUpDate)
  
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(true);
  const handleShow = () => setShow(false);
  /////UpDATE recipe
  const [newTitle, setnewTitle] = useState(recipe.title)
  const [newImage, setImage] = useState(recipe.image)
  const [newIngredients, setIngredients] = useState(recipe.ingredients)
  const [newInstructions, setInstractions] = useState(recipe.instructions)
  const [newRate, setRate] = useState(recipe.rate)
//console.log(newTitle)


const dispatch = useDispatch()
const handleUpDate = () =>{
  dispatch(update_recipe (recipe.id, newTitle , newIngredients, newInstructions, newImage, newRate))
  handleClose()
}
  return (
    <div>
    
    <Modal.Header closeButton>
          <Modal.Title>Change Recipe</Modal.Title>
        </Modal.Header>
   <Card.Body>
      <Card.Text>
      <Form.Control placeholder={newTitle} onChange={(e)=> setnewTitle(e.target.value)}/>
      </Card.Text>
      <Card.Text>
      <Form.Control placeholder={newImage} onChange={(e)=>setImage(e.target.value)}/>
      </Card.Text>
      <Card.Text>
      <Form.Control placeholder={newIngredients} onChange={(e)=>setIngredients(e.target.value)}/>
      </Card.Text>
      <Card.Text>
      <Form.Control placeholder={newInstructions} onChange={(e)=>setInstractions(e.target.value)}/>
      </Card.Text>
      <Card.Text>
      <Form.Control placeholder={newRate} onChange={(e)=> setRate(e.target.value)}/>
      </Card.Text>
      
    </Card.Body>
    <Modal.Footer>
          
          <Button variant="outline-secondary" style={{border:'none'}} onClick={()=>handleUpDate()}>
            Save Changes
          </Button>
        </Modal.Footer>
        
    </div>
  )
}

export default RecipeUpDate