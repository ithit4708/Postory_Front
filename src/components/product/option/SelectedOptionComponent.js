import React, {useContext} from 'react';
import styled from 'styled-components';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';



const DecreaseButton = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 11px;
  padding: 0;
  width: 20px;
  height: 20px;
  margin-right: 8px; // Add margin-right here

`;

const IncreaseButton = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
  font-size: 11px;
  padding: 0;
  width: 20px;
  height: 20px;
  margin-left: 8px; // Add margin-right here

`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  border-bottom: 1px solid #ccc; // Add underline here
  padding-top: 8px;
  padding-bottom: 1rem;
`;


const SelectedList = styled.div``;

const SelectedHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SelectedTitle = styled.div``;

const CloseButton = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: pointer;
  width: 20px;
  height: 20px;
`;



const ExceededStock = styled.div``;

const AmountController = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #000;
`;

const SelectedController = styled.div`
  display: flex;
`;

const Decrease = styled.div`
  cursor: pointer;
`;

const Amount = styled.div`

`;

const Increase = styled.div`
  cursor: pointer;
`;

const SelectedPrice = styled.div``;

const TotalSummary = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div``;

const TotalAmount = styled.div``;

const SelectedOptionComponent = ({
                                     selectedOption,
                                     onRemoveSelectedOption,
                                     onIncreaseCount,
                                     onDecreaseCount,
                                 }) => {

    const isOutOfStock = selectedOption.optCurrInvCnt === 0;
    const isCountIncreaseDisabled = selectedOption.count >= selectedOption.optCurrInvCnt;
    const isCountDecreaseDisalbed = selectedOption.count <= 1;



    return (
        <SelectWrapper>
            <SelectedList>
                {selectedOption && (
                    <>
                        <SelectedHeader>
                            <SelectedTitle>{selectedOption.prodOptNm}</SelectedTitle>
                            <CloseButton onClick={onRemoveSelectedOption}>
                                <MdClose />
                            </CloseButton>
                        </SelectedHeader>
                        {isOutOfStock && (
                            <ExceededStock>
                                <div>재고가 부족합니다. 수량을 변경해주세요.</div>
                                <div>(재고 : {selectedOption.optCurrInvCnt}개 남음)</div>
                            </ExceededStock>
                        )}
                        <AmountController>
                            <SelectedController>
                                <DecreaseButton
                                    className={isCountDecreaseDisalbed ? 'disabled' : ''}
                                    onClick={onDecreaseCount}
                                >
                                    <FaMinus />
                                </DecreaseButton>
                                <Amount> {selectedOption.count}  </Amount>
                                <IncreaseButton
                                    className={isCountIncreaseDisabled ? 'disabled' : ''}
                                    onClick={onIncreaseCount}
                                >
                                    <FaPlus />
                                </IncreaseButton>
                            </SelectedController>
                            <SelectedPrice>
                                {selectedOption.prodOptPrc *
                                    selectedOption.count}
                                원
                            </SelectedPrice>
                        </AmountController>
                    </>
                )}
            </SelectedList>
            {/*<TotalSummary>*/}
            {/*    <Title>주문 금액</Title>*/}
            {/*    <TotalAmount>*/}
            {/*        {selectedOption*/}
            {/*            ? `${selectedOption.prodOptPrc * selectedOption.count}원`*/}
            {/*            : "0원"}*/}
            {/*    </TotalAmount>*/}
            {/*</TotalSummary>*/}
        </SelectWrapper>
    );
};

export default SelectedOptionComponent;
