import {configureStore} from "@reduxjs/toolkit";

import orderReducer from "./orderSlice";
import modalReducer from "./modalSlice";


export default configureStore({
    reducer: {
        order: orderReducer,
        modal: modalReducer
    }
})