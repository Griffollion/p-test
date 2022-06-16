import {createSlice} from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'userLists',
    initialState: {
        modal: {
            isActive: false
        },
    },
    reducers: {
        toggleModal(state) {
            state.modal.isActive = !state.modal.isActive
        }
    }
})

export const {toggleModal} = modalSlice.actions

export default modalSlice.reducer