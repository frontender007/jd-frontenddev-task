import { useState, useEffect } from "react";
import axios from 'axios';
import Product from "./Product";


const NewReleases = () => {

    const [products, setProducts] = useState([]);
    
    useEffect( () => {
        axios.get("https://size-client-resources.s3.amazonaws.com/Dev-Task/FE-Dev-Task-Data.json")
            .then( response => {
                if(response.request.statusText === "OK") {
                    setProducts(response.data.dataExample);
                } else {
                    throw new Error("Server saying no way");
                }
            })
            .catch(error => console.error(error.message));
            
    }, []);

    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center text-uppercase">Upcoming Rleases</h1>
            </div>
            <Product listItems = {products} />
        </div>
    )

}

export default NewReleases;