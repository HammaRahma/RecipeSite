import React from 'react'
import { Container } from 'react-bootstrap';

const BackgroundVideo = () => {
  return (
  <Container>
    <div className="ratio ratio-4x3">
    
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/6_2565hnCmI?si=uybSvaZZ4_X5WDqm&amp;start=04" 
      title="YouTube video player" frameborder="0" allow="autoplay; muted; loop; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture; web-share" allowfullscreen />
     
    </div>
  </Container>
  )
}

export default BackgroundVideo

// <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/6_2565hnCmI?si=uybSvaZZ4_X5WDqm&amp;start=04" 
//       title="YouTube video player" frameborder="0" allow="accelerometer; 
//       autoplay; muted; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />