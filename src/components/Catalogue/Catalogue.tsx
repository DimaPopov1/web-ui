import React, {useEffect} from "react";
import Cars from "./Cars";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchCatalogue} from "../../redux/reducers/thunks/CatalogueThunk";

const Catalogue = () => {

    const {catalogue, isLoading, error} = useAppSelector(state => state.catalogueReducer)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCatalogue());

    }, [])

    return(
       <Cars  cars={catalogue.cars}/>
    )
}

export default Catalogue;