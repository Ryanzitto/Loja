import CartActiontypes from "./action-type";

const initialState = {
    products: [],
    productsTotalPrice: 0,
    cartIsOpen: false,
    historic: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type){
        case CartActiontypes.ADD_PRODUCT:
            const productIsAlreadyInCart = state.products.some((product) => product.id === action.payload.id)
            if (productIsAlreadyInCart){
                return {...state, 
                    products: state.products.map((product) => product.id === action.payload.id ? {...product, quantity: product.quantity + 1} : product)}
            }
            return{ ...state, products: [...state.products, {...action.payload, quantity: 1}]}

        case CartActiontypes.OPEN_CART:
            return {
                ...state, 
                cartIsOpen: true}

        case CartActiontypes.CLOSE_CART:
            return {
                ...state, 
                cartIsOpen: false}
                
        case CartActiontypes.REMOVE_PRODUCT:
            return {
                ...state, 
                products: state.products.filter( product => product.id !== action.payload)}

        case CartActiontypes.INCREASE_PRODUCT_QUANTITY:
            return {
                ...state, 
                products: state.products.map(product => product.id === action.payload ? 
                    {...product, quantity: product.quantity + 1} : product)}

        case CartActiontypes.DECREASE_PRODUCT_QUANTITY:
            return {
                ...state, 
                products: state.products.map(product => product.id === action.payload ? 
                    {...product, quantity: product.quantity - 1} : product).filter((product) => product.quantity > 0)}
        case CartActiontypes.CLEAR_CART:
            return {
                ...state, 
                products: []
            }
        case CartActiontypes.ADD_TO_HISTORY:
            return {
                ...state, 
                historic: [...state.historic, action.payload]
            }
    default: 
    return state;
    }
}

export default cartReducer;