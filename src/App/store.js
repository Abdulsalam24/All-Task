import {configureStore} from '@reduxjs/toolkit'
import counterSlice from '../redux/Counter'


export const store = configureStore({
    reducer : {
        count : counterSlice
    }
})