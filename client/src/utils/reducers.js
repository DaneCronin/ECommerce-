//import actions
import { UPDATE_PRODUCTS, UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from "./actions";
import {useReducer} from 'react';


//reducer function for UPDATE_PRODUCTS
export const reducer = (state, action) => {
    switch(action.type) {
        // if action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };

        //if action type value is the value of `UPDATE_CATEGORIES`, return a new state
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories],
            };

        //if action type value is the value of `UPDATE_CURRENT_CATEGORY`, return new state
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state, 
                currentCategory: action.currentCategory,
            };

        //if it's not one of these actions, do not update state at all 
        default: 
        return state;
    }
};

//function to take in state and update with useReducer Hook 
export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
}

