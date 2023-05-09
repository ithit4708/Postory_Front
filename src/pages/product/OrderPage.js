import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ContainerModule from "../../utils/form/ContainerModule";
import styled from  'styled-components';
import defaultTemplate from "../../utils/form/defaultTemplate";
import containerModule from "../../utils/form/ContainerModule";
import {useSelectedStore} from "../../store/SelectedOptData";
import {useProductStore} from "../../store/ProductData";

const ProductCard = styled.div` display: grid; grid-template-columns: 1fr 2fr; gap: 1rem; padding: 1rem;`;

const Thumbnail = styled.div` img { display: flex; width: 200px; height: 200px; object-fit: cover; align-items: center; justify-content: center }`;

const ProductInfo = styled.div` display: flex; flex-direction: column; justify-content: space-between;`;

const OrdPageContainer = styled.div`
  padding: 0 24px 0 24px;
`;

const OrdPageModuleWarpper = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #000;
  padding: 24px 0 44px 0;
 
`;

const OrderDetailHeader = styled.div`
  padding: 18px 24px;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  border-bottom: 1px solid rgba(0,0,0,.1);
  flex-direction: row-reverse;
`;


const OrderButton = styled.button`
  background-color: #3478FF;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 2px;
  cursor: pointer;
  padding: 10px 24px;
  border-radius: 4px;
  transition-duration: 0.4s;
  &:hover {
    background-color: #3478FF;
  }
`;

const InfoTitle = styled.div`
  box-sizing: border-box;
  padding-top: 18px;
  padding-right: 24px;
  padding-left: 24px;
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
`

const OrderPage = () => {

    const selectdStore = useSelectedStore();
    const productStore = useProductStore();
    const selectedProdData = productStore.product;
    const selectedOptData = selectdStore.selectedOptData
    const totalAmountData = selectdStore.totalAmountData;


    const [template, setTemplate] =useState(defaultTemplate);
    const [product] = useState({"adultGrdYn":true,"comProdCnclRfndRegu":"판매자 환불규정에 따라요!","crtUserId":"772d132622ba4b53953e251b2546791f","lmttProdSelerQualCertiUrl":"","ordtmSleYn":false,"prodId":"00000000000000000001","prodNm":"탈모치료제","prodStusChgDtm":"2023-04-18 08:24:43","prodTermAgreYn":false,"repImgPath":"/images/hair.jpg","selerCnclRfndReguCn":"직접 찾아오세요^^","sleEndDtm":"2023-04-18 08:24:43","sleStartDtm":"2023-04-18 08:24:43","sleStusCd":"ST01630","lmttProdSelerQualCertiYN":false});
    const [option] = useState({"prodOptId":"00000000000000000001","prodOptNm":"강려크한 탈모치료제","prodOptPrc":9999990,"prodOptImgPath":"","initInvCnt":null,"userOrdLmttQty":5,"optSleStusChgDtm":"2023-04-18 08:55:53","optImgPath":"","optCurrInvCnt":500,"prodId":"00000000000000000001"});
    const [dlvryMethods] = useState({"prodId":"00000000000000000001","dlvryMtdNm":"북산택배","dlvryExp":3000,"gthrDlvryRevtlYn":true})

    // useEffect(() => {
    //     setTemplate({
    //         ...template,
    //         layout: 'column',
    //         alignItems: 'stretch',
    //         textAlign: 'left'
    //
    //     });
    // }, []);


    

    const navigator = useNavigate();
    const clickHandler = () =>{
        navigator('/order/pay');
    }



    const [info1, setInfo1] = useState({tagType: 'VIEW', title:'주문상품'})
    // const [data1List, setData1List] = useState([]);


    const [info2, setInfo2] = useState({tagType: 'CHECKBOX', title: '배송방법'})
    const [data2, setData2] = useState([
        { id: 1, text: `${dlvryMethods.dlvryMtdNm}`, label: '배송방법', title:'배송 정보' },
    ])

    const [info3, setInfo3] = useState({tagType: 'TEXTAREA', title: ''})
    const [data3, setData3] = useState([
        { id: 1, text: "Item 1", label: '수령인', title:'배송 정보' },
        { id: 2, text: "Item 2", label: '휴대전화', title:'배송 정보'},
        { id: 3, text: "Item 3", label: '배송지 주소', title:'배송 정보'},
        { id: 4, text: "Item 4", label: '배송지 메모', title:'배송 정보'},
    ])

    const [info4, setInfo4] = useState({tagType: 'TEXTAREA', title: '추가질문'})
    const [data4, setData4] = useState([
        { id: 1, text: "Item 1", label: '반드시 주문 사항에 맞는 택배 방법을 선택해 주세요.', title:'추가 질문' },
        { id: 2, text: "Item 2", label: '합배송을 원하나?', title:'추가 질문'},
    ])
    const [info5, setInfo5] = useState({tagType: 'VIEW', title: '주문금액'})
    const [data5, setData5] = useState([
        { id: 1, text: option.prodOptPrc, label: '상품금액', title:'배송 정보' },
        { id: 2, text: dlvryMethods.dlvryExp, label: '배송비', title:'배송 정보'},
    ])

    const [info6, setInfo6] = useState({tagType: 'VIEW', title: '결제 예정 금액'})
    const [data6, setData6] = useState([
        { id: 1, text: totalAmountData+dlvryMethods.dlvryExp, label: '총 금액', title:'결제예정 금액' },
    ])

    const [info7] = useState({tagType:'VIEW', title:'유의사항'})
    const [data7] = useState([
        {id: 1, text:
            "주식회사 포스타입은 회원 상호 간 콘텐츠 거래를 위한 통신판매중개 시스템을 제공할 뿐, 통신판매자를 대리하지 않습니다. 구매한 상품에 대한 취소, 환불 등 회원 간 성립된 거래에 대한 모든 책임은 회원이 직접 부담합니다. 자세한 내용은 서비스 이용 전 동의하신 이용약관을 참고해 주세요.",   label: ''}
    ])

    // useEffect(() => {
    //     const newData1List = selectedOptData.map((selectedOptDatum) => {
    //         return [
    //             { id: 1, text: `${product.prodNm}`, label: "", title: "주문 상품" },
    //             { id: 2, text: `${selectedOptDatum.prodOptNm}`, label: "", title: "주문 상품" },
    //             { id: 3, text: selectedOptDatum.prodOptPrc, label: "", title: "주문 상품" },
    //             { id: 4, text: "| "+selectedOptDatum.count+"개", label: "", title: "주문 상품" },
    //         ];
    //     });
    //     setData1List(newData1List);
    // }, [selectedOptData]);


    return (
        <OrdPageContainer className={'OrderPageContainer'}>
            <OrderDetailHeader>
                <InfoTitle>주문하기</InfoTitle>
            </OrderDetailHeader>
            <OrdPageModuleWarpper>
                    <InfoTitle>주문 상품</InfoTitle>
                <div>
                    {selectedOptData.map((selectedOptDatum, index) => (
                        <ProductCard key={index}>
                            <Thumbnail>
                                <img src={`${selectedProdData.repImgPath}`} alt={product.prodNm} />
                            </Thumbnail>
                            <ProductInfo>
                                <ContainerModule
                                    info={info1}
                                    data={[
                                        { id: 1, text: `${product.prodNm}`, label: "", title: "주문 상품" },
                                        { id: 2, text: `${selectedOptDatum.prodOptNm}`, label: "", title: "주문 상품" },
                                        { id: 3, text: selectedOptDatum.prodOptPrc + "| "+selectedOptDatum.count + "개", label: "", title: "주문 상품" },
                                    ]}
                                    template={template}
                                />
                            </ProductInfo>
                        </ProductCard>
                    ))}

                </div>
            </OrdPageModuleWarpper>

            <OrdPageModuleWarpper>
                <div>
                    <InfoTitle>배송정보</InfoTitle>
                </div>
                <ContainerModule info={info2} data={data2} template={template} />
                <ContainerModule info={info3} data={data3} template={template} />
            </OrdPageModuleWarpper>

            <OrdPageModuleWarpper>
                <div>
                    <InfoTitle>추가 질문</InfoTitle>
                </div>
                <ContainerModule info={info4} data={data4} template={template} />
            </OrdPageModuleWarpper>

            <OrdPageModuleWarpper>
                <div>
                    <InfoTitle>주문 금액</InfoTitle>
                </div>
                <ContainerModule info={info5} data={data5} template={template} />
            </OrdPageModuleWarpper>

            <OrdPageModuleWarpper>
                    <InfoTitle>결제 예정 금액</InfoTitle>
                <ContainerModule info={info6} data={data6} template={template} />
            </OrdPageModuleWarpper>
            <OrdPageModuleWarpper>
                <div>
                    주식회사 포스타입은 회원 상호 간 콘텐츠 거래를 위한 통신판매중개 시스템을 제공할 뿐, 통신판매자를 대리하지 않습니다. 구매한 상품에 대한 취소, 환불 등 회원 간 성립된 거래에 대한 모든 책임은 회원이 직접 부담합니다. 자세한 내용은 서비스 이용 전 동의하신
                        <a href={"https://www.postype.com/tos"} target={"_blank"}>이용약관</a>
                    을 참고해 주세요.
                </div>
            </OrdPageModuleWarpper>


            <OrderButton value={"주문 하기"} onClick={clickHandler}>
                    주문 하기
                </OrderButton>

        </OrdPageContainer>
    );
};

export default OrderPage;