import React from 'react';

const ProductOption = ({ opt }) => {
    return (
        <option value={opt.prodOptNm}>{opt.prodOptNm}    {opt.prodOptPrc}</option>
    );
};

export default ProductOption;
