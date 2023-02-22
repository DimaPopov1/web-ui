import React from "react";
import Cars from "./Cars";

const Model = {
    Cars: [
        {Name: "Rino", Price:25.9, YearOfProduction: 2011},
        {Name: "BMV", Price:25.2, YearOfProduction: 2021},
        {Name: "Rino", Price:54.2, YearOfProduction: 2021},
        {Name: "Toyata", Price:154.2, YearOfProduction: 2021},
        {Name: "Rino", Price:2.2, YearOfProduction: 2021},
        {Name: "Pizo", Price:24.2, YearOfProduction: 2029},
    ]
}


const Catalogue = () => {
    return(
       <Cars  cars={Model.Cars}/>
    )
}

export default Catalogue;