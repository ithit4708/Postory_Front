import React, { useEffect, useState } from "react";
import call from "../../../api/ApiService";
import ProductOption from "./ProductOption";

const ProductOptionList = ({onOptionChange}) => {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchPostAllOptions = () => {
            call("/store/product/opt", "GET")
                .then((response) => {
                    setOptions(response);
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        fetchPostAllOptions();
    }, []);

    const handleOptionClick = (e) => {
        // option들 중 e.target.value와 pordOptNM이 일치하는 option이 있다면 부모에 함수 매개변수로 넘겨준다.
        const selectedOption = options.find((option) => option.prodOptNm === e.target.value);
        onOptionChange(selectedOption);
    };

    return(
        <div>
            <select id="options" value="" onChange={handleOptionClick}>
                <option value="" disabled>Select an option</option>
                {options.map((opt) => (
                    <ProductOption key={opt.prodOptId} opt={opt} />
                ))}
            </select>
        </div>
    )
};

export default ProductOptionList;
