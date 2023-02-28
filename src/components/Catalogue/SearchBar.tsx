import React, {InputHTMLAttributes, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchCatalogue} from "../../redux/reducers/thunks/CatalogueThunk";

const SearchBar = () => {

    const {pageHandler} = useAppSelector(state => state.catalogueReducer)
    const[name,setName] = useState(pageHandler.name);
    const dispatch = useAppDispatch();

    const searchByName = () => {
        dispatch(fetchCatalogue({...pageHandler, page: 1, name:name}))
    }
    const handleName = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setName(target.value)
    }

    return (
        <div className="input-group m-2 ">
            <input name="name" type="text" className="form-control" placeholder="Car's name"
                   aria-label="Recipient's username" aria-describedby="basic-addon2"
                   onChange={handleName}
                   value={name}/>
                <div className=" input-group-append ">
                    <button className="rounded-0 btn btn-outline-secondary m-0 rounded-end" type="submit" value="Search" onClick={searchByName}>Search</button>
                </div>
        </div>
    )
}

export default SearchBar;