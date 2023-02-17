import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../components/Profile/Profile";

const initialState = {
    user:{
        email : "",
        firstName: "",
        lastName: "",
        address :" "
    }
}

export const profileSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        download: (state:IUser) => { //to do send requiest to api
            state.user.firstName = "Dima",
            state.user.email = "robot@mail.ru"
        } // to do upload to server new data
    }
});

