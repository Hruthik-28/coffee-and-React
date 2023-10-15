import {configureStore} from '@reduxjs/toolkit'
import {authSliceReducer} from './authStore'

const store = configureStore({
    reducer: authSliceReducer
})

export default store