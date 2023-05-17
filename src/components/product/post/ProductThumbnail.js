import React from 'react';
import styled from 'styled-components';

const ProductThumbnailContainer = styled.div`
  width: 358px;
  height: 268px;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
`;

const ThumbnailImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ProductThumbnail = ({ repImgPath }) => {
    return (
        <ProductThumbnailContainer>
            <ThumbnailImage src={repImgPath} alt="Product Thumbnail" />
        </ProductThumbnailContainer>
    );
};

export default ProductThumbnail;
