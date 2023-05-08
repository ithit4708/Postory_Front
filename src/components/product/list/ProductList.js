import React, { useState } from "react";
import styled from "styled-components";
import ProductListItem from "./ProductListItem";
import ProductPage from "../../../pages/product/ProductPostPage.js";

const StoreItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 1rem;
`;

function ProductList({ products }) {
    const [clickedProdId, setClickedProdId] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleClick = (prodId) => {
        const product = products.find((p) => p.prodId === prodId);
        setSelectedProduct(product);
        setClickedProdId(prodId);
    };

    if (!products) {
        return <div>Loading...</div>;
    }

    return (
        <StoreItemList>
            {products.map((product) => (
                <ProductListItem
                    key={product.prodId}
                    product={product}
                    handleClick={handleClick}
                    clicked={clickedProdId === product.prodId}
                />
            ))}
            {clickedProdId && selectedProduct && <ProductPage product={selectedProduct} />}
        </StoreItemList>
    );
}

export default ProductList;
