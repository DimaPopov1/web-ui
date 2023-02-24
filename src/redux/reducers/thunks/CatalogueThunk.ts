import axios from '../../../routes/carApi'
import {ICarPageHandler, ICatalogue} from "../../../types/types";
import {createAsyncThunk} from "@reduxjs/toolkit";

const CATALOGUE_API_URL = "/"

export const fetchCatalogue = createAsyncThunk(
    "catalogue",
    async (pageHandler: ICarPageHandler, thunkAPI) => {
        try {
            const response = await axios.post<ICatalogue>(CATALOGUE_API_URL, {params:{pageHandler}});
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue("Couldn't connect to server")
        }
    }
)
