import { createSlice } from '@reduxjs/toolkit'


export const usersData = createSlice({
    name: "userData",
    initialState: {
        users: null,
        error: false,
        isLoading: false,
    },
    reducers: {
        getUsers: (state, action) => {
            state.users = [{ ...state.users, ...action.payload }]
        }
    }
})

export const { getUsers } = usersData.actions

export default usersData.reducer
