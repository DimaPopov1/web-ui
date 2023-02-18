import {combineReducers, configureStore} from "@reduxjs/toolkit";
import profileReducer from './reducers/ProfileSlice';

const rootReducer = combineReducers({
    profileReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
