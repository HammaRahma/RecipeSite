import React, { useState } from 'react'
import BackgroundVideo from '../Components/BackgroundVideo'
import { Button, Modal } from 'react-bootstrap';
import RecipeCreate from '../Components/CRUD/Create/RecipeCreate';
import RecipeList from '../Components/CRUD/Read/RecipeList';

const Home = ({inputSearch}) => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div>
    
    <div className='Main'>
    <BackgroundVideo />

    <h1 style={{textAlign:"center", padding:"5%"}}>Recipes</h1>
    <RecipeList inputSearch = {inputSearch}/>

    <Button variant="outline-secondary" style={{border:'none', textAlign: 'center', hover:'none'}} onClick={handleShow}>
    <h4 >... Add new Recipe</h4>
    </Button>

    <Modal show={show} onHide={handleClose}>
    <RecipeCreate />
    </Modal>
    
    </div>
    
    </div>
  )
}

export default Home