import React from "react";
import style from './SortedList.module.css'
import {ISortViewModel, SortState} from "../../../types/types";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {fetchCatalogue} from "../../../redux/reducers/thunks/CatalogueThunk";
import {retry} from "@reduxjs/toolkit/query";

const SortedList = (props: ISortViewModel) => {

    const [price, setPrice] = React.useState("");
    const {pageHandler} = useAppSelector(state => state.catalogueReducer)
    const dispatch = useAppDispatch();

     const sortCars = () => {
         dispatch(fetchCatalogue({...pageHandler, sortState: SortState.OrderByPrice, isAskOrder: price==="false"}))
     }

    return (
        <div className={["", style.SortedList].join("")}>
            <h5>Sort by</h5>
            <div style={{textAlign: "start"}}>
                <div >
                    <h6>Order by price</h6>
                    <div>
                        <input
                            type="checkbox"
                            checked={price === "true"}
                            onChange={() => setPrice("true")}
                        />
                        <label className="m-0" onClick={() => setPrice("true")}>Highest to Lowest</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            checked={price === "false"}
                            onChange={() => setPrice("false")}
                        />
                        <label className="m-0" onClick={() => setPrice("false")}>Lowest to Highest</label>
                    </div>
                </div>
            </div>
            <button className={["btn btn-outline-success ",style.Button].join("")}
                   onClick={sortCars} >Sort</button>
            <button className={["btn btn-outline-danger ",style.Button].join("")}
                    onClick={() => setPrice("")}>Clear</button>
        </div>
    )
}

export default SortedList;