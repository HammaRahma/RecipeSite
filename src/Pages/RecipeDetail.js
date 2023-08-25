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
    //console.log(data)
    //const navReturn = useNavigate()
    //console.log(data[0].title)

    var ingredientTab = []
    console.log(ingredientTab)
    ingredientTab = recipe.ingredients
    console.log(ingredientTab)
    
    var instructions = []
    instructions = recipe.instructions

    useEffect(() => {
     const recipeDetail = data.find((el)=>
     el.id === recipeID)
        setRecipe(recipeDetail)
    }, [recipeID])
  
    
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
      { 
        ingredientTab.map((ingredient)=>
                      <div className="fw-bold">{ingredient}</div>)
       
        }
        
      </div>
      <br />
      <h3>Instructions :</h3>
      <br/>
      
        <div className="ms-2 me-auto">
        { 
          instructions.map((instruction)=>
                        <div className="fw-bold">{instruction} </div>)
         
          }
          
        </div>
      
    </div>
  )
}

export default RecipeDetail