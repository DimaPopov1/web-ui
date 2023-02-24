import React, {useEffect, useState} from "react";
import {IPageViewModel} from "../../types/types";
import style from "./Catalogue.module.css";

const Pagination = (props: IPageViewModel) => {

    const [pages, setPages] = useState([] as number[]);

    useEffect(() => {
    }, [])

    useEffect(() => {
        if (pages.length === 0) {
            for (let i = 1; i <= props?.totalPages; i++) {
                setPages(oldPages => [...oldPages, i]);
            }
        }
    },[pages])

    return (
        <div className={style.Pages}>
            {pages.map(p => (
                <span className={props.pageNumber === p && style.CurrentPage} key={p}> {p} </span>
            ))}
        </div>
    )
}

export default Pagination;