import React from "react";

interface CarouselItem{
    image:string,
    header?:string,
    text?:string,
    buttonHref?:string,
    buttonName?: string
}
const CarouselItem = (props : CarouselItem ) =>{
    return (
        <div className="carousel-item active">
            <img src={require(`./../../../images/home/${props.image}`)} className="d-block w-100" alt="..."/>
            <div className="container">
                <div className="carousel-caption text-left">
                    <h1>{props.header}</h1>
                    <p>{props.text}</p>
                    {props.buttonName ?
                        <p><a className="btn btn-lg btn-primary" href={props.buttonHref} role="button">{props.buttonName}</a></p>
                        : null
                    }

                </div>
            </div>
        </div>
    )
}

export default CarouselItem;