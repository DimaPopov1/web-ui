import {AppDispatch} from "../store";
import axios from './../../routes/userApi'
import {IUser} from "../../types/types";
import {profileSlice} from './ProfileSlice';
import {createAsyncThunk} from "@reduxjs/toolkit";

const PROFILE_API_URL = "userprofile"

export const fetchProfile = createAsyncThunk(
    PROFILE_API_URL,
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser>(PROFILE_API_URL);
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Couldn't connect to server")
        }
    }
)