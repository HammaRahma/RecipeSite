import React, { useEffect, useState } from 'react'
import { Badge, Image, ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ReactStars from 'react-stars'

const RecipeDetail = () => {
    
    const [recipe, setRecipe] = useState({})
    
    const {id} = useParams()
    const recipeID = parseInt(id)
//   console.log(id)
//   console.log(typeof(id))
//   console.log(recipeID)
//   console.log(typeof(recipeID))
    const data = useSelector((state) => state.recipesData)
    // console.log(data)
    //const navReturn = useNavigate()
    //console.log(data[0].title)


const [ingredientTab, setIngredientTab] = useState([])

const [instructions, setInstructions] = useState([])

    useEffect(() => {
     let details = data.find((el)=>
     el.id === recipeID)

     console.log(details)
        setRecipe(details)     
        
        setIngredientTab(recipe.ingredients)
        
        
        
        setInstructions(recipe.instructions)
    
    }, [recipeID, data, ingredientTab, instructions, recipe.ingredients, recipe.instructions])
  
    
  return (
    <div >
      <Image src={recipe.image} style={{width:'50%', height:'10%'}}  /><br/><br/>
      <h1 style={{textAlign:'center'}}>{recipe.title}</h1>
      <br />
      <br/>
      <ReactStars count={5} size={24} value={recipe.rate} />
      <br/><br/>
      <h3>ingredients :</h3>
      <br/>
      
      <div className="ms-2 me-auto">
{recipe.ingredients}
        
      </div>
      <br />
      <h3>Instructions :</h3>
      <br/>
      
        <div className="ms-2 me-auto">

        {recipe.instructions}
        </div>
      
    </div>
  )
}

export default RecipeDetail