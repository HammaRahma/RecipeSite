import React from 'react'
import { useSelector } from 'react-redux'
import RecipeCard from './RecipeCard'
import CardsInLine from '../../../Pages/CardsInLine'

const RecipeList = ({inputSearch}) => {

  const list = useSelector((state)=> state.recipesData)
  //console.log(inputSearch)
  return (
    
    <div>
    <div className='recipe_list'> 
    {
        
        list.filter((recipe)=>
              recipe.title.toUpperCase().includes(inputSearch.toUpperCase().trim()))
              .map((recipe)=>(
          <RecipeCard  recipe={recipe} key={recipe.id}  />
          
        )) 
        }
      
    </div>    
    </div>
  )
}

export default RecipeList


// {
//   list.map((recipe)=>
//   <CardsInLine recipe={recipe} key={recipe.id} />)
//  }