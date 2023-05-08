import React, {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import HeaderResponsive from "../../components/product/post/HearderResponsive";
import OrderPage from "./OrderPage";
import ContainerModule from "../../utils/form/ContainerModule";
import defaultTemplateStyles from "../../utils/form/defaultTemplate";
import {useProductStore} from "../../store/ProductData";
import {useSelectedStore} from "../../store/SelectedOptData";

const ProdPostContainer = styled.div`
  font-family: "Pretendard", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.13px;
  color: rgba(0, 0, 0, 0.47);
  width: 100%;
  box-sizing: border-box;

`;


const SaleInfo = styled.div`
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.13px;
  color: rgba(0, 0, 0, 0.47);
  border-bottom: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
`;





const CustomSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProductThumbnail = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const ShippingInfo = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  object-fit: cover;
  width: 100%;
  box-sizing: border-box;
`;

const ProductPostPage = () => {
    const productStore = useProductStore();
    const product = productStore.product;

    const [modalOpen, setModalOpen] = useState(false);


    const showModal = () => {
        setModalOpen(true);
    }


    // const product = productData;
    const [template, setTemplate] = useState(defaultTemplateStyles);

    const [trsInfo, setTrsInfo] = useState({tagType:"VIEW", title: '배송안내'});
    const [trsData, setTrsData] = useState([
        {id:1, text: '판매자의 정책이니 꼼꼼하게 확인해주세요.', label: '', title: ''}],
    );

    const [cnclRfndInfo, setCnclRfndInfo] = useState({tagType:"VIEW", title:'취소 및 환불 안내'});
    const [cnclRfndData, setCnclRfndData] = useState([
        {id:1, text:"주문서 내 일부 상품의 부분 환불은 불가합니다. 개별 상품의 환불을 원하실 경우에도 주문서에 있는 모든 상품의 환불을 신청해 주셔야 합니다. 환불을 원하실 경우, 배송 완료일로부터 7일 이내에 구매 내역에서 '환불 요청'을 신청하신 후 포스타입 도움 센터로 문의해 주세요. 단, 경우에 따라 환불이 어려울 수 있습니다.", label:'', title:''}
    ]);


    useEffect(() => {
        setTemplate({
            ...template,
            backgroundColor: "#F7F7F7",
            fontSize: 'SMALL',
            width: 'auto',
            alignItems: 'stretch',
            labelTextAlign: 'left',
            textAlign: 'left',
            textTextAlign: 'left',
        });
    }, []);


    const [isOrderPage, setIsOrderPage] = useState(false);
    const toggleOrderPage = () => {
        setIsOrderPage(!isOrderPage);
    };


    if (!product) {
        return <div>Loading...</div>; // or whatever fallback UI you want to show
    }


    return (

        <ProdPostContainer className={'productPostContainer'}>
            {modalOpen && <OrderPage/>}
            <ProductInfo>
                <HeaderResponsive showModal={showModal}></HeaderResponsive>
            </ProductInfo>


            <SaleInfo>
                <p>판매 오픈: {product.sleStartDtm}</p>
                <p>판매 종료: {product.sleEndDtm}</p>
            </SaleInfo>
            <CustomSection>
                <p>-----인태형 파트-----</p>
                <div>
                    <Title>제목</Title>
                    <p>상품소개</p>
                    <ProductThumbnail src="/images/juhomin.jpg" />
                </div>
                <p>-----인태형 파트-----</p>
            </CustomSection>
            <ShippingInfo>
                <h2>{trsInfo.title}</h2>
                <ContainerModule info={trsInfo} data={trsData} template ={template}></ContainerModule>
                <h2>{cnclRfndInfo.title}</h2>
                <ContainerModule info={cnclRfndInfo} data={cnclRfndData} template = {template}></ContainerModule>
            </ShippingInfo>
            <CustomSection>
                <p>-----인태형 파트-----</p>
                <p>채널정보</p>
                <p>-----인태형 파트-----</p>
            </CustomSection>
        </ProdPostContainer>
    );
};
export default ProductPostPage;