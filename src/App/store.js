import {configureStore} from '@reduxjs/toolkit'
import counterSlice from '../redux/Counter'
import usersData from '../redux/Users'

export const store = configureStore({
    reducer : {
        count : counterSlice,
        usersData
    }
})

