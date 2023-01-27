import React, { createContext, useContext} from 'react';
import { useProductReducer} from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;


//Custom Provider function used to manage and update state and use reducer 
const StoreProvider = ({ value = [], ...props}) => {
    const [state, dispatch] = useProductReducer({
        products: [],
        categories: [],
        currentCategory: '',
    });
    //Use this console.log to confirm storeProvider works
    console.log(state);
    return <Provider value={[state, dispatch]} {...props}/>;
};


//custom React useContext Hook to receive [state, dispatch] data managed by StoreProvider
const useStoreContext = () => {
    return useContext(StoreContext);
}


export { StoreProvider, useStoreContext };