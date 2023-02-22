import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchProfile} from "../../redux/reducers/thunks/ProfileThunk";
import {fetchCatalogue} from "../../redux/reducers/thunks/CatalogueThunk";

const Cars = (props : any) => {

    const  {catalogue, isLoading, error} = useAppSelector(state => state.catalogueReducer)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCatalogue());

    }, [])

    return (
        <div>
            {JSON.stringify(catalogue.cars)}
        </div>
    )
}

export default Cars;