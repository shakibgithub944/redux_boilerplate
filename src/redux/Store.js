import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../redux/Counter'

export const store = configureStore({
    reducer: {
        counter: CounterReducer,
    },
})

