import React, {useEffect, useState} from "react";
import {IPageViewModel} from "../../types/types";
import style from "./Catalogue.module.css";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchCatalogue} from "../../redux/reducers/thunks/CatalogueThunk";

const Pagination = (props: IPageViewModel) => {

    const [pages, setPages] = useState([] as number[]);
    const {pageHandler} = useAppSelector(state => state.catalogueReducer)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!pages.length) {
                setPages(Array.from({length: props.totalPages}, (_, i) => i + 1));
        }
    })

    const changePage = (page:number) => {
        dispatch(fetchCatalogue({...pageHandler, page: page}))
    }

    return (
        <div className={style.Pages}>
            <span onClick={() => {
                if (props.pageNumber > 1) changePage(props.pageNumber - 1)
            }}> &lt; </span>
            {pages.map(p => (
                <span className={props.pageNumber === p ? style.CurrentPage : style.Page}
                      key={p}
                        onClick={() =>  changePage(p)}> {p} </span>

            ))}
            <span onClick={() => {
                if (props.pageNumber < props.totalPages) changePage(props.pageNumber + 1)
            }}> &gt; </span>
        </div>
    )
}

export default Pagination;