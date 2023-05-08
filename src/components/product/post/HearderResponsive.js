import React, {useContext, useEffect, useReducer, useState} from 'react';
import styled from 'styled-components';
import ProductThumbnail from './ProductThumbnail';
import ProductOptionList from '../option/ProductOptionList';
import SelectedOptionComponent from "../option/SelectedOptionComponent";
import TotalAmountComponent from "./TotalAmountComponent";
import {useNavigate} from "react-router-dom";
import {useProductStore} from "../../../store/ProductData";
import {useSelectedStore} from "../../../store/SelectedOptData";


const Badge = styled.div`
  font-weight: 500!important;
  display: inline-block;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  padding: 2px 6px;
  border-radius: 3px;
  transition: background-color .15s ease-in-out;
  color: #3478FF;
  background: #EBF4FF;
  border-color: #EBF4FF;
  font-size: 14px;
`
const HeaderResponsiveContainer = styled.div`
  color: black;
  display: flex;
  max-width: 740px;
  margin: auto;
  margin-top: auto;
  margin-right: auto;
  margin-bottom: auto;
  margin-left: auto;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 40px 20px 0;
  order-color: rgba(0,0,0,.05);
  border-top-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid #ccc;
  border-left-color: rgba(0, 0, 0, 0.05);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const OrderButton = styled.button`
  background-color: #000;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #333;
  }
`;

const PostHeader = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  margin: 0;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 32px;
`;

const HeaderTitle = styled.div`
  color : black;
  display: flex;
  flex-direction: column;
  margin: 0px 0px 20px;
  border-width: 310px;
  
`;

const TitleWrapper = styled.div`
    
`
const PostHeaderSummary = styled.div`
    padding-bottom: 1rem;
`

const HeaderResponsive = (props) => {

    const {showModal} = props;

    const productStore = useProductStore();
    const product = productStore.product;

    const selectedStore = useSelectedStore();
    const selectedOptData = selectedStore.selectedOptData;
    const totalAmountData = selectedStore.totalAmountData;

    const navigate = useNavigate();



    const [selectedOptions, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'ADD_OPTION':
                return [...state, { ...action.option, count: 1 }];
            case 'REMOVE_OPTION':
                return state.filter((_, index) => index !== action.index);
            case 'INCREASE_COUNT':
                return state.map((option, index) =>
                    index === action.index ? { ...option, count: option.count + 1 } : option
                );
            case 'DECREASE_COUNT':
                return state.map((option, index) =>
                    index === action.index ? { ...option, count: option.count <=1 ? 1 :option.count - 1 } : option
                );
            default:
                return state;
        }
    }, []);



    useEffect(() => {
        selectedStore.setSelectedOptData(selectedOptions);
    }, [selectedOptions, selectedStore.setSelectedOptData]);


    const clickHandler = () => {
        navigate(`/store/product/${product.prodId}`);
    };

    const handleOptionChange = (option) => {
        if (!option) return;
        // option이 없다면 반환.

        // 선택된 옵션 중 넘겨받은 옵션과 같은 ID가 있냐.
        const optionExists = selectedOptions.some(
            (selectedOption) => selectedOption.prodOptId === option.prodOptId
        );


        if (optionExists) {
            alert("이미 선택한 옵션입니다.");
        } else {
            //없다면 추가한다.
            dispatch({ type: 'ADD_OPTION', option });
        }
    };


    const handleRemoveSelectedOption = (index) => {
        dispatch({ type: 'REMOVE_OPTION', index });
    };

    const handleIncreaseCount = (index) => {
        dispatch({ type: 'INCREASE_COUNT', index });
    };

    const handleDecreaseCount = (index) => {
        dispatch({ type: 'DECREASE_COUNT', index });
    };


    return (
        <HeaderResponsiveContainer>
            {/*반응형 헤더 컨테이너는
                프로덕트 썸네일과
                포스트 헤더로 나뉘고
            */}
            <ProductThumbnail repImgPath={product.repImgPath} />

            <PostHeader>
                {/* 포스트 헤더는
                1. 상품옵션리스트와
                2. 상품옵션리스트에서 선택된 옵션을 보여준다.
                3. 상품옵션리스트에서 옵션을 선택하면
                */}
                <TitleWrapper>
                    <Badge>
                        판매중
                    </Badge>
                    <HeaderTitle>
                        <h1>{product.prodNm}</h1>
                    </HeaderTitle>
                </TitleWrapper>
                <PostHeaderSummary>포스타입 오리지널</PostHeaderSummary>
                <ProductOptionList onOptionChange={handleOptionChange} />
                {selectedOptions.map((selectedOption, index) => (
                    <SelectedOptionComponent
                        key={index}
                        selectedOption={selectedOption}
                        onRemoveSelectedOption={() => handleRemoveSelectedOption(index)}
                        onIncreaseCount={() => handleIncreaseCount(index)}
                        onDecreaseCount={() => handleDecreaseCount(index)}
                    />
                ))}
                <TotalAmountComponent/>

                <ButtonContainer>
                    <OrderButton onClick={showModal}>주문 하기</OrderButton>
                </ButtonContainer>

            </PostHeader>
        </HeaderResponsiveContainer>
    );
};

export default HeaderResponsive;
