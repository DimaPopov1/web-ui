import {combineReducers, configureStore} from "@reduxjs/toolkit";
import profileReducer from './reducers/ProfileSlice';
import catalogueReducer from './reducers/CatalogueSlice'

const rootReducer = combineReducers({
    profileReducer,
    catalogueReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
