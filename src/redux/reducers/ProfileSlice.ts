import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from './../../types/types'
import {fetchProfile} from "./thunks/ProfileThunk";

interface ProfileState {
    user: IUser;
    isLoading: boolean;
    error: string;
}

const initialState: ProfileState = {
    user: {} as IUser,
    isLoading: false,
    error: ""
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProfile.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isLoading = false;
            state.error = '';
            state.user = action.payload;
        },
        [fetchProfile.pending.type]: (state, action: PayloadAction<IUser>) => {
            state.isLoading = true;
        },
        [fetchProfile.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default profileSlice.reducer;
