//import React, { useState } from 'react'
import { Button, Card, Form, Modal, Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { delete_recipe, update_recipe } from '../../../JS/Actions'
import ReactStars from 'react-stars'
import iconDelete from '../../../Images/iconDelete.png'
import pen from '../../../Images/pen.jpg'
import './RecipeCard.css'
//import RecipeUpDate from '../UpDate/RecipeUpDate'
import { useState } from 'react'
import RecipeUpDate from '../UpDate/RecipeUpDate'

import { Link, useNavigate } from "react-router-dom";


const RecipeCard = ({recipe}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
// //   /// UPDATE RECIPE
//   const [newTitle, setnewTitle] = useState(recipe.title)
//   const [newImage, setImage] = useState(recipe.image)
//   const [newIngredients, setIngredients] = useState(recipe.ingredients)
//   const [newInstructions, setInstractions] = useState(recipe.instructions)
//   const [newRate, setRate] = useState(recipe.rate)

// //   const handleUpdate = id =>{
    
// //   }
// // ////////////////////////
// console.log(newTitle)
// console.log(newImage)
// console.log(recipe)

// const handleUpDate = () =>{
//   dispatch(update_recipe (recipe.id, newTitle , newIngredients, newInstructions, newImage, newRate))
//   handleClose()
// }
 const dispatch = useDispatch()

const handleDelete = id => {
  dispatch(delete_recipe(id))
}
const navigate = useNavigate()

  return (
    <div>
    
    <Card style={{ width: '18rem' , height:'500px'}} >
    <Nav.Link as={Link} to={`/RecipeDetail/${recipe.id}`} onClick={()=>navigate(`/RecipeDetail/${recipe.id}`)}>
    <Card.Img style={{height:'250px'}} variant="top" src={recipe.image} /></Nav.Link>
    <Card.Body>
    <Nav.Link as={Link} to={`/RecipeDetail/${recipe.id}`}><Card.Title >{recipe.title}</Card.Title>
      <Card.Text>  </Card.Text>
      <br/>
      <ReactStars count={5} size={24} value={recipe.rate} edit={false} half={false} />
      <br/><br/>
      </Nav.Link>

      <div className='space-between mt-auto'>
      <Button variant="outline-secondary" style={{border:'none'}} onClick={handleShow}>
      <img src= {pen} alt='icon' style={{height:'2em', width:'2em'}}/>
      </Button>
      <Button variant="outline-secondary" style={{border:'none'}} onClick={()=> handleDelete(recipe.id)}>
      <img src= {iconDelete} alt='icon' style={{height:'2em', width:'2em'}}/>
      </Button>
      
      <Modal show={show} onHide={handleClose}>
      <RecipeUpDate recipe ={recipe}/>
      </Modal>

      </div>
    </Card.Body>
    </Card>
    
    </div>
  )
}

export default RecipeCard