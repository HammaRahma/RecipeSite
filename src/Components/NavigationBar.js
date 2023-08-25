import React, { useState } from 'react'
import { Button, Container, Dropdown, Form, Navbar } from 'react-bootstrap'
import iconBars from '../Images/iconBars.jpg'

const NavigationBar = ({inputSearch, setInputSearch}) => {

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

//   <Offcanvas show={show} onHide={handleClose}>
//   <Offcanvas.Header closeButton>
//     <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//   </Offcanvas.Header>
//   <Offcanvas.Body>
//     Some text as placeholder. In real life you can have the elements you
//     have chosen. Like, text, images, lists, etc.
//   </Offcanvas.Body>
// </Offcanvas>


//console.log(inputSearch)
  return (
    <div>
    <Navbar className="color-nav border-bottom"  >    
    <Container >
    <div >
      <Button variant="secondery" onClick={handleShow}  >
      <img src= {iconBars} alt='icon' style={{height:'2em', width:'2em'}}/>
      </Button>

      <Dropdown.Menu show={show} onClick={handleClose}>
      <Dropdown.Item eventKey="1">All Recipes</Dropdown.Item>
      <Dropdown.Item eventKey="2">Rated Recipes</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item eventKey="4">Blog</Dropdown.Item>
    </Dropdown.Menu>



      <Navbar.Brand href="/" className='NavbarBrand' style={{color:'brown'}}>
            FoodMarket
      </Navbar.Brand>
    </div>

    
      <Form className="d-flex  ">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={(el)=> setInputSearch(el.target.value)}
        value={inputSearch}
      />
      <Button variant="outline-danger"  >Search</Button>
    </Form>
    </Container>
  </Navbar>
    </div>
  )
}

export default NavigationBar