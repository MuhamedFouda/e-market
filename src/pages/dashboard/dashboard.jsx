import axios from "axios";
import Card from "./components/card";
import "./dashboard.scss"
import usestate from "usestate";
import { useState } from "react";

export default function Dashboard(){
    const[products ,setproduct]=useState([])
    axios.get("https://fakestoreapi.com/products").then((res)=>{
    setproduct(res.data)
    })
    return(
        <div className="dashboard">
            <h1> Product <span>Store</span> </h1>
           <div>
            {
                products.map((product)=>{
                    return (
                        <div className="card">
                            <Card title={product.title} price={product.price} category={product.category} image={product.image}/>
                            
                             </div>
                    )

                })
            }
           </div>
        </div>
    )
}