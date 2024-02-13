
import axios from "axios"
import "./card.scss"
import { useState } from "react";


export default function Card(props) {
    return (


        <div className="cardd">
            <img src={props.image} className="card-img-top" alt="..." />

            <div className="card-body">
                <h5 className="card-title" />{props.title}
                <h4 className="card-title" />{props.price}$
                <span className="card-text" /> category:{props.category}
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>



    )
}