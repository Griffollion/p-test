import {createSlice} from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: 'userLists',
    initialState: {
        order: {},
    },
    reducers: {
        getOrder(state, action) {
            state.order = action.payload
        }
    }
})

export const {getOrder} = orderSlice.actions

export default orderSlice.reducer