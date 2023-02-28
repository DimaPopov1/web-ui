import React, {useEffect, useState} from "react";
import Cars from "./Cars";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchCatalogue} from "../../redux/reducers/thunks/CatalogueThunk";
import Pagination from "./Pagination";
import style from './Catalogue.module.css'
import SearchBar from "./SearchBar";
import SortedList from "./SortedList/SortedList";

const Catalogue = () => {

    const {catalogue, pageHandler, isLoading, error} = useAppSelector(state => state.catalogueReducer)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCatalogue(pageHandler));
    }, [])


    return (
            <div className={style.Catalogue}>
                <div>
                    <SortedList {...catalogue.sortViewModel} />
                </div>
                <div >

                    {isLoading && <h2>Loading ...</h2>}
                    {error && <h2>{error}</h2> }
                    <SearchBar />
                    <Cars cars={catalogue.cars}/>
                    <Pagination  {...catalogue.pageViewModel} />

                </div>
                <div></div>
            </div>
    )
}


export default Catalogue;
