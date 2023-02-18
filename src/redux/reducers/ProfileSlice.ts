import { createSlice } from '@reduxjs/toolkit';
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

    }
})

export default profileSlice.reducer;
