import React, {useEffect, useState} from "react";
import Cars from "./Cars";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchCatalogue} from "../../redux/reducers/thunks/CatalogueThunk";
import style from './Catalogue.module.css'

const Catalogue = () => {

    const {catalogue, isLoading, error} = useAppSelector(state => state.catalogueReducer)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCatalogue());

        for(let i =2; i <= catalogue.pageViewModel.TotalPages; i++ ){
            setPages([...pages, i]);
        }
    }, [])


    const [pages, setPages] = useState([1]);


    return (
            <div className={style.Catalogue}>
                <div></div>
                <div className={style.Cars}>

                    {isLoading && <h2>Loading ...</h2>}
                    {error && <h2>{error}</h2> }
                    <Cars cars={catalogue.cars}/>

                    <div>
                        {pages.map(p => (
                            <span key={p}> {p} </span>
                            ))}
                    </div>


                </div>
                <div></div>
            </div>
    )
}


export default Catalogue;
