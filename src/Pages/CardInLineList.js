import React from 'react'
import CardsInLine from './CardsInLine'
import { useSelector } from 'react-redux'

const CardInLineList = () => {
    const list = useSelector(state=>state.recipesData)
    console.log(list)
  return (
    <div>
    
    {
        list.map((recipe)=>
        <CardsInLine recipe={recipe} key={recipe.id} />)
    }
    
    </div>
  )
}

export default CardInLineList