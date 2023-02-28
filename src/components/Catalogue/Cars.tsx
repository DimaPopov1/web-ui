import React, {useEffect} from "react";
import {ICar} from "../../types/types";

import style from './Catalogue.module.css'

const Cars = (props: { cars: ICar[] }) => {

    const listCars = props?.cars?.map((car) =>
        <div className="card col-12 col-lg-3 col-sm-6 'col-sm-6' m-0 p-0 border-0 border-rad " key={car.id}>
            <div className="m-2 rounded-2 " style={{backgroundColor:'#FDF9FE'}} >
                <img src={["data:image/jpg;base64,", car.image].join("")}
                     className="card-img img-fluid rounded-top rounded-1 " style={{height: 210, width:370}} alt="Image"/>
                <div className="card-body">
                    <h5 className="card-title">{car.name}</h5>
                    <p className="card-text" style={{fontSize: "large"}}>
                        Price:{car.price} $ <br/>
                        Year of production: {car.yearOfProduction}
                    </p>

                </div>
            </div>

        </div>
    );

    return (
        <div className="row m-3 p-2  flex-wrap justify-content-between">
            {listCars}
        </div>
    )
}

export default Cars;