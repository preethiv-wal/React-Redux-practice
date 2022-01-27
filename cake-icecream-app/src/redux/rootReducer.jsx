import { combineReducers } from "redux";
import cakeReducer from "./CAKE/cakeReducer";
import iceCreamReducer from "./ICECREAM/iceCreamReducer";
import customerReducer from "./CUSTOMER/customerReducer";


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: customerReducer
})
export default rootReducer;