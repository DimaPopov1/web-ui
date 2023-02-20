    import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from './../../types/types'

interface ProfileState {
    user: IUser;
    isLoading: boolean;
    error: string;
}

const initialState : ProfileState = {
    user: {} as IUser ,
    isLoading:false,
    error: ""
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers:{
        userFetching(state){
            state.isLoading = true;
        },
        userFetchingSuccess(state, action:PayloadAction<IUser>){
            state.isLoading = false;
            state.error = '';
            state.user = action.payload;
        },
        userFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default profileSlice.reducer;
