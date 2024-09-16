//import actions
import { UPDATE_CATEGORIES, UPDATE_PRODUCTS, UPDATE_CURRENT_CATEGORY } from "../utils/actions";
import { reducer } from '../utils/reducers';


//ceate sample of what global state will look like
const initialState = {
    products: [],
    categories: [{ name: 'Food'}],
    currentCategory: '1',
};

//test ability to add a product to products array with UPDATE_PRODUCT
test('UPDATE_PRODUCTS', () => {
    let newState = reducer(initialState, {
        type: UPDATE_PRODUCTS,
        products: [{}, {}]
    });

    expect(newState.products.length).toBe(2);
    expect(initialState.products.length).toBe(0);
});


//test ability to add categories to category array with UPDATE_CATEGORIES
test('UPDATE_CATEGORIES',  () => {
    let newState = reducer(initialState, {
        type: UPDATE_CATEGORIES,
        categories: [{}, {}]
    });

    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
});

//test ability to update current category array with UPDATE_CURRENT_CATEGORY
test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: '2'
    });

    expect(newState.currentCategory).toBe ('2');
    expect(initialState.currentCategory).toBe('1');
});