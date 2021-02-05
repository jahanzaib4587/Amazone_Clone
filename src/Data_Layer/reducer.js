export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);


export const initialState = {
    basket: [],
    user: null,   
};

const reducer=(state, action)=> {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
                
            };
        case "ADD_TO_BASKET":
            return {
                ...state,
            basket:[...state.basket,action.item],
            };
            
        case "REMOVE_FROM_BASKET":
                      
            let tempBasket = [...state.basket];
            const index = state.basket.findIndex((item) => item.id === action.id);
            if (index >= 0) {
                tempBasket.splice(index, 1);
            }
            else {
                console.warn("Can't remove product (id:${action.id} as its not exists");
            }
            return { ...state, basket: tempBasket };
        default:
            return state;
    }
}
export default reducer;