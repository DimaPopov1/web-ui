import React from "react";

const SearchBar = () => {

    return (
        <div className="input-group m-2 ">
            <input name="name" type="text" className="form-control" placeholder="Car's name"
                   aria-label="Recipient's username" aria-describedby="basic-addon2"
                   value=""/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary m-0 " type="submit" value="Search">Search</button>
                </div>
        </div>
    )
}

export default SearchBar;