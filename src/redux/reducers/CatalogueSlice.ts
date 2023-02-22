import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICar, ICatalogue, IFilterViewModel, IPageViewModel, ISortViewModel} from './../../types/types'
import {fetchCatalogue} from "./thunks/CatalogueThunk";

interface ICatalogueState {
    catalogue: ICatalogue;
    isLoading: boolean;
    error: string;
}


const initialState: ICatalogueState = {
    catalogue: {} as ICatalogue,
    isLoading: false,
    error: ""
}

export const catalogueSlice = createSlice({
    name: "catalogue",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCatalogue.fulfilled.type]: (state, action: PayloadAction<ICatalogue>) => {
            state.isLoading = false;
            state.error = '';
            state.catalogue = action.payload;
        },
        [fetchCatalogue.pending.type]: (state, action: PayloadAction<ICatalogue>) => {
            state.isLoading = true;
        },
        [fetchCatalogue.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default catalogueSlice.reducer;
