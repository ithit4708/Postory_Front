import React, {useCallback, useContext, useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {useProductStore} from "../../../store/ProductData";

const ProductCard = styled.div` display: grid; grid-template-columns: 1fr 2fr; gap: 1rem; border: 1px solid #ccc; padding: 1rem; cursor: pointer;`;

const Thumbnail = styled.div` img { width: 100px; height: 100px; object-fit: cover; }`;

const ProductInfo = styled.div` display: flex; flex-direction: column; justify-content: space-between;`;

const ProductName = styled.div` font-size: 1.2rem; font-weight: bold;`;

const ProductDetails = styled.div` font-size: 0.9rem;`;

const ProductListItem = ({ product }) => {
    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);
    const productStore = useProductStore();


    const handleClick = useCallback(() => {
        setClicked(true);
        productStore.setProduct(product);
        navigate(`/store/product/${product.prodId}`,{state: {product}});
    }, [navigate, product]);

    return (
        <ProductCard onClick={handleClick}>
            <Thumbnail>
                <img src={`${product.repImgPath}`} alt={product.prodNm}/>
            </Thumbnail>
            <ProductInfo>
                <ProductName>{product.prodNm}</ProductName>
                <ProductDetails>
                    <div>판매 시작 일시: {product.sleStartDtm}</div>
                    <div>판매 종료 일시: 상시 판매</div>
                    <div>{(product.sleStusCd == 'ST01630') ? '판매중':''}</div>
                </ProductDetails>
            </ProductInfo>
        </ProductCard>
    );
}
export default
// React.memo(
    ProductListItem;
// )
