import OrderListContainer from "../../containers/product/OrderListContainer";
import {useState} from "react";
import ContainerModule from "../../utils/form/ContainerModule";
import styled from "styled-components";
import defaultTemplate from "../../utils/form/defaultTemplate";

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
const OrderListPage = () => {
    const [template] = useState(defaultTemplate);

    const [ordTrsInfo] = useState({tagType:"VIEW", title:'주문/배송 안내'})
    const [ordTrsData] = useState([
            {id: 1, text:"주문이 접수된 상태입니다. 안내된 결제기한까지 꼭 결제를 완료해주세요. 배송지 변경, 주문취소가 가능해요.", label:'결제 대기'},
            {id: 2, text:"결제가 완료되었어요. 판매자가 주문을 확인하고 상품을 준비합니다. 배송지 변경, 결제 취소 요청이 가능해요.", label:'결제 완료'},
            {id: 3, text:"상품을 포장하고 택배 업체로 전달하기 위해 준비하고 있어요. 배송지 변경, 결제 취소 요청이 불가능해요.", label:'배송 준비중'},
            {id: 4, text:"판매자가 상품을 택배 업체로 전달하여 배송이 시작되었어요.", label:'배송중'},
            {id: 5, text:"배송이 완료되었어요. 배송 완료 후 7일까지 환불 신청이 가능하며, 7일이 지난 후에는 자동으로 구매가 확정돼요.", label:'배송 완료'},
        ]
    )

    const [cnclRfndInfo] = useState({tagType:"VIEW", title:'취소/환불 안내'})
    const [cnclRfndData] = useState([
            {id: 1, text:"결제 대기 단계에서 주문을 즉시 취소할 수 있어요. 주문 후 안내된 결제기한까지 결제를 완료하지 않으면 주문이 자동으로 취소돼요.", label:'결제 전 취소'},
            {id: 2, text:"결제 완료 단계에서 판매자에게 결제 취소를 요청할 수 있어요. 사전에 협의되지 않은 경우, 판매자에 따라 요청이 거절될 수 있습니다.", label:'결제 취소'},
            {id: 3, text:"배송 완료 단계에서 판매자에게 환불을 요청할 수 있어요. 판매자가 사전에 고지한 정책에 따르며, 교환문의는 판매자에게 직접 문의해주세요", label:'환불'},
        ]
    )



    return(
        <Container>

            <ModuleWrapper>
                <OrderListContainer></OrderListContainer>
            </ModuleWrapper>

            <ModuleWrapper>
                <h1>{ordTrsInfo.title}</h1>
                <ContainerModule info={ordTrsInfo} data={ordTrsData} template={template}/>
            </ModuleWrapper>
            <ModuleWrapper>
                <h1>{cnclRfndInfo.title}</h1>
                <ContainerModule info={cnclRfndInfo} data={cnclRfndData} template={template}/>
            </ModuleWrapper>
        </Container>

    );
}

export default OrderListPage;