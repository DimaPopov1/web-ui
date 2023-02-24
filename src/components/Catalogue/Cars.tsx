import React, {useEffect} from "react";
import { ICar } from "../../types/types";

import style from './Catalogue.module.css'

const Cars = (props: {cars: ICar[] }) => {

    const listCars = props?.cars?.map((car) =>
        <div className="card col-sm-3 m-3" key={car.id}>
            <img src={["data:image/jpg;base64,", car.image].join("")}
                 className="card-img img-thumbnail border-0" style={{height: 210}} alt="Image" />
                <div className="card-body">
                    <h5 className="card-title">{car.name}</h5>
                    <p className="card-text" style={{fontSize: "large"}}>
                        Price:{car.price} $ <br/>
                        Year of production: {car.yearOfProduction}
                    </p>

                </div>
        </div>
    );

    return (
        <div className="row">
            {listCars}
        </div>
    )
}

export default Cars;