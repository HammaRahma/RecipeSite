

import recipesData from '../Data.json'
import { CREATE_RECIPE, DELETE_RECIPE, UPDATE_RECIPE } from './ActionTypes'

/**.map((recipe)=>(
                <RecipeCard recipe={recipe} key={recipe.id}  />
            )) */
const initialState = {
    recipesData
}

export const RecipeReducers = (state = initialState, {type, payload}) => {
    console.log(state)
    
    switch(type){

        case DELETE_RECIPE:
            return{
                ...state, recipesData : state.recipesData.filter((el)=>
                el.id !== payload)
               
            }
        
        case CREATE_RECIPE:
            return{
                ...state, recipesData : [...state.recipesData, payload]
            }
        case UPDATE_RECIPE:
            return{
                ...state, recipesData : state.recipesData.map((el)=>
                el.id === payload.id ? {...el, 
                    title : payload.title, 
                    ingredients : payload.ingredients, 
                    instructions : payload.instructions, 
                    image : payload.image, 
                    rate : payload.rate} 
                    : el)

            }
        default :
            return state
    }
}

