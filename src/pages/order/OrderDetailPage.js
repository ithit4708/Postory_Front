
import {useLocation, useNavigate, useParams} from "react-router-dom";
import React, {useState} from "react";

import ContainerModule from "../../utils/form/ContainerModule";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Pretendard", "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
`;

const ModuleWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
const OrderDetailPage = () => {
    const { ordId } = useParams();
    const location = useLocation();
    const order = location.state?.order;


    const template = {
        labelFontStyle: 'BOLD',
        textFontStyle: 'normal',
        labelTextAlign: 'left',
        textTextAlign: 'left',
        layout: 'column', // or 'row'
    };

    const [ordDetlInfo] = useState({tagType:'VIEW',title:'주문내역'})
    const [ordDetlData] = useState([
            {id: 1, text:'결제취소완료', label:''},
            {id: 2, text:'890', label:'주문번호'},
            {id: 3, text:'1:1 메시지', label:''},
            {id: 4, text:'결제사 정책에 따라 환불 금액 입금까지 일부 기간이 소요될 수 있어요', label:''},
        ]
    )
    const [ordProdInfo] = useState({tagType:'VIEW',title:'주문내역'})
    const [ordProdData] = useState([
            {id: 1, text:'이미지', label:''},
            {id: 2, text:'강려크한 탈모 치료제', label:''},
            {id: 3, text:'강려크한 탈모 치료제', label:''},
            {id: 4, text:'12,000', label:''},
            {id: 5, text:'1개', label:''}
        ]
    )
    const [ordInfo] = useState({tagType:'VIEW',title:'주문내역'})
    const [ordData] = useState([
            {id: 1, text:'2023.03.18. 17:26:21', label:'주문 시각'},
            {id: 2, text:'2023.03.18. 17.26.49', label:'결제 시각'},
            {id: 3, text:'강려크한 탈모 치료제', label:'김정호'},
        ]
    )
    const [setlInfo] = useState({tagType:'VIEW',title:'주문내역'})
    const [setlData] = useState([
            {id: 1, text:'9,999,000원', label:'상품 금액'},
            {id: 2, text:'3,000원', label:'배송비'},
            {id: 3, text:'10,002,000원', label:'최종 결제 금액'},
        ]
    )

    const [setlMtdInfo] = useState({tagType:'VIEW',title:'주문내역'})
    const [setlMtdData] = useState([
        {id: 1, text:'10,002,000원', label:'간편결제'}
    ])

    const [trsInfo] = useState({tagType:'VIEW',title:'주문내역'})
    const [trsData] = useState([
        {id: 1, text:'북산 택배', label:'배송 방법'},
        {id: 2, text:'김정호', label:'수령인'},
        {id: 3, text:'010-3175-5959', label:'휴대 전화'},
        {id: 4, text:'신촌로1길 42-7 501호', label:'주소'},
        {id: 5, text:'잘 배송하시게!', label:'배송 메모'}
    ])

    if (!order) {
        return <div>Loading...</div>; // or whatever fallback UI you want to show
    }

    return (
        <Container>

            <ModuleWrapper>
                <h1></h1>
                <ContainerModule info={ordDetlInfo} data={ordDetlData} template={template} />
            </ModuleWrapper>

            <ModuleWrapper>
                <h1>주문상품</h1>
                <div>
                    <ContainerModule info={ordProdInfo} data={ordProdData} template={template} />
                </div>
            </ModuleWrapper>
            <ModuleWrapper>
                <h1>주문정보</h1>
                <div>
                    <ContainerModule info={ordInfo} data={ordData} template={template} />
                </div>
            </ModuleWrapper>
            <ModuleWrapper>
                <h1>배송정보</h1>
                <div>
                    <ContainerModule info={trsInfo} data={trsData} template={template} />
                </div>
            </ModuleWrapper>
            <ModuleWrapper>
                <h1>결제정보</h1>
                <div>
                    <ContainerModule info={setlInfo} data={setlData} template={template} />
                </div>
            </ModuleWrapper>
            <ModuleWrapper>
                <h1>결제방법</h1>
                <div>
                    <ContainerModule info={setlMtdInfo} data={setlData} template={template} />
                </div>
            </ModuleWrapper>
        </Container>
    );
};

export default OrderDetailPage;


