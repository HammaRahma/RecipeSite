import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
    
    <div className='main-footer'>
      <Container className='footer-middle'>
      <div className='row'>
        <div className='col-md-3 col-sm-6'>
          <h4> lorem ipsum</h4>
          <ul className='list-unstyled'>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
          </ul>
        </div>
        <div className='col-md-3 col-sm-6'>
          <h4> lorem ipsum</h4>
          <ul className='list-unstyled'>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
          </ul>
        </div>
        <div className='col-md-3 col-sm-6'>
          <h4> lorem ipsum</h4>
          <ul className='list-unstyled'>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
          </ul>
        </div>
        <div className='col-md-3 col-sm-6'>
          <h4> lorem ipsum</h4>
          <ul className = "list-unstyled">
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
            <li>lorem ipsum</li>
          </ul>
        </div>
      </div>
      </Container>
      <div className='footer-bottom' style={{backgroundColor:'white'}}>
        <p className='text-xs-center' style={{paddingLeft:'100px'}}>
        &copy;{new Date().getFullYear()} City Guide App - All Rights Reserved</p>
      </div>
      
    </div>
    
    </div>
  )
}

export default Footer