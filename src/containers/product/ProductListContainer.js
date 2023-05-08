import ProductList from "../../components/product/list/ProductList";
import {useEffect, useState} from "react";
import {call}from "../../api/ApiService";


const ProductListContainer = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const getAllProducts = () =>
        {
            call('/test/store', 'GET')
                .then((response) => {
                    setProducts(response);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        getAllProducts();
        }, []);

    return (
        <ProductList products={products}/>
    )
}

export default ProductListContainer;
