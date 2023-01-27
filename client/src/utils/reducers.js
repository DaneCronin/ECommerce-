//import actions
import {
     UPDATE_PRODUCTS,
     UPDATE_CATEGORIES,
     UPDATE_CURRENT_CATEGORY, 
     ADD_TO_CART,
    ADD_MULTIPLE_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_QUANTITY,
    CLEAR_CART,
    TOGGLE_CART } from "./actions";
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
        //if action type value is the value of `ADD_TO_CART`, return new state
        case ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.product ]
            };
        //if action type value is the value of `ADD_MULTIPLE_TO_CART`, return new state
        case ADD_MULTIPLE_TO_CART: 
            return {
                ...state,
                cart: [...state.cart, ...action.products],
            };
        //Case to close cart adn remove items
        case REMOVE_FROM_CART:
            let newState =  state.cart.filter(product => {
                return product._id !== action._id;
            });

            return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState
            };

        //Case to update purchase quantity in cart
        case UPDATE_CART_QUANTITY: 
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map(product => {
                    if(action._id === product._id) {
                        product.purchaseQuantity = action.purchaseQuantity;
                    }
                    return product;
                })
            };
        //Case to check `CLEAR_CART` and return new state
        case CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: []
            };

        //Case to check if CartOpen is the opposite of its previous value 
        case TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen
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

