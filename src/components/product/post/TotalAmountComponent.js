// TotalAmountComponent.js
import React, {useContext, useEffect} from 'react';
import styled from 'styled-components';
import {useProductStore} from "../../../store/ProductData";
import {useSelectedStore} from "../../../store/SelectedOptData";

const TotalSummary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px; // Add margin-top here
`;


const Title = styled.div``;

const TotalAmount = styled.div``;

const TotalAmountComponent = () => {
    // Initialize selectedStore before using it
    const selectedStore = useSelectedStore();
    const selectedOptions = selectedStore.selectedOptData;

    const totalAmount = selectedOptions.reduce((sum, option) => {
        if(option.count <= 0)
            return 0;
        return sum + option.prodOptPrc * option.count;
    }, 0);

    useEffect(() => {
        selectedStore.setTotalAmountData(totalAmount);
    }, [selectedStore.totalAmountData, selectedStore.setTotalAmountData]);

    return (
        selectedStore.totalAmountData === 0 ?   '' :
            <TotalSummary>
                <Title>주문 금액</Title>
                <TotalAmount>{selectedStore.totalAmountData}원</TotalAmount>
            </TotalSummary>
    );
};

export default TotalAmountComponent;

