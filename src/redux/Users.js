import { createSlice } from '@reduxjs/toolkit'


export const usersData = createSlice({
    name: "userData",
    initialState: {
        user: null,
        error: false,
        isLoading: false,
    },
    reducers: {
        getUsers: (state, action) => {
            state.user = { ...state.user, ...action.payload }
        }
    }
})

export const { getUsers } = usersData.actions

export default usersData.reducer
