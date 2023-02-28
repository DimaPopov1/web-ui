import React from "react";

const SearchBar = () => {

    return (
        <div className="input-group col-sm-10">
            <input name="name" type="text" className="form-control" placeholder="Car's name"
                   aria-label="Recipient's username" aria-describedby="basic-addon2"
                   value="ef"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit" value="Search">Search</button>
                </div>
        </div>
    )
}

export default SearchBar;