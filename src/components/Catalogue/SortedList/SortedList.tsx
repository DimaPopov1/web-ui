import React from "react";
import style from './SortedList.module.css'
import {ISortViewModel, SortState} from "../../../types/types";

const SortedList = (props: ISortViewModel) => {

    const [price, setPrice] = React.useState("");


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
            <button className={["btn btn-outline-success ",style.Button].join("")}>Sort</button>
            <button className={["btn btn-outline-danger ",style.Button].join("")}>Clear</button>
        </div>
    )
}

export default SortedList;