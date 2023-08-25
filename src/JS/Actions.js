
import { CREATE_RECIPE, DELETE_RECIPE, UPDATE_RECIPE } from "./ActionTypes"

 
export const delete_recipe = id => {
    return{
        type : DELETE_RECIPE,
        payload : id
    }
}

export const create_recipe = newRecipe =>{
    return{
        type : CREATE_RECIPE,
        payload : newRecipe
    }
}

export const update_recipe = (id, title, ingredients, instructions, image, rate) =>{
    return{
        type : UPDATE_RECIPE,
        payload : {id, title, ingredients, instructions, image, rate}
    }
}