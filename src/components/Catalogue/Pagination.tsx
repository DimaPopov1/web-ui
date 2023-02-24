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
        if (pages.length === 0) {
            for (let i = 1; i <= props?.totalPages; i++) {
                setPages(oldPages => [...oldPages, i]);
            }
        }
    },[pages])

    const changePage = (page:number) => {
        dispatch(fetchCatalogue({...pageHandler, page : page}))
    }

    return (
        <div className={style.Pages}>
            {pages.map(p => (
                <span className={props.pageNumber === p && style.CurrentPage}
                      key={p}
                        onClick={() =>  changePage(p)}> {p} </span>

            ))}
        </div>
    )
}

export default Pagination;