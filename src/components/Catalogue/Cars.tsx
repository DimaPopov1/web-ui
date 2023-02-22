import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchProfile} from "../../redux/reducers/thunks/ProfileThunk";
import {fetchCatalogue} from "../../redux/reducers/thunks/CatalogueThunk";

const Cars = (props: any) => {

    const {catalogue, isLoading, error} = useAppSelector(state => state.catalogueReducer)

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCatalogue());

    }, [])
    function string2Bin(str: string) {
        var result = [];
        for (var i = 0; i < str.length; i++) {
            result.push(str.charCodeAt(i).toString(2));
        }
        return result;
    }
    function toBase64(dataArr: string){
        return btoa(dataArr.reduce((data, val)=> {
            return data + String.fromCharCode(val);
        }, ''));
    }
    return (
        <div>
            {
                catalogue.cars.map(car => {
                        return (
                            <div>
                                {car.name}
                                {car.price}
                               {/* {<img src={`data:image/jpg;base64,${btoa(String.fromCharCode(...new Uint8Array(car.image)))}`} />}*/}

                            </div>
                        )
                    }
                )


            }
        </div>
    )
}

export default Cars;