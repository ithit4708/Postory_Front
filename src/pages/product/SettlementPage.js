import {useState} from "react";
import ContainerModule from "../../utils/form/ContainerModule";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const SetlButton = styled.button`
  background-color:  #3478FF;
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
    background-color:  #3478FF;
  }
`;

const SetlHeader = styled.div`

`

const OrderNumber = styled.div`
`

const SetlHeaderTitle = styled.div`
`

const SetlTitle = styled.div`
  widith:100%;
  font-weight: 600;
  font-size: 18px;
  lignt-height: 1;
  color: #000;
  margin: 0 0 20px; // Increase the bottom margin
  padding: 4px 0;
  white-space: nowrap;


`

const SetlHeaderDescription = styled.div`

`
const FlexContainer = styled.div`
  display: flex;
  align-items: center; // Optional, to align items vertically centered
  margin-bottom: 20px; // Optional, to add some space between sections
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;



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

const SetlInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0 60px;
  margin: 60px 0 0;
`

const Spacer = styled.div`
  height: 20px; // Adjust the height as needed
  padding: 60px;
`;


const ModuleWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const SettlementPage = () =>{

    const navigator = useNavigate();
    const clickHandler = () => {
        navigator('/order/pay/ready');
    }

    const template = {
        labelFontStyle: 'BOLD',
        textFontStyle: 'normal',
        labelTextAlign: 'left',
        textTextAlign: 'left',
        layout: 'column', // or 'row'
        width: '100%',
    };

    const [orderInfo, setorderInfo] = useState({tagType: 'VIEW', title:'주문상품'})
    const [orderData, setOrderData] = useState([
        { id: 1, text: "00000000000000000001", label: '주문번호', title:'주문 상품' },
        { id: 2, text: "주문이 접수 되었어요.", label: '', title:'주문 상품'},
        { id: 3, text: "결제를 이어서 진행해주세요. 2023.04.26 12:33까지 [My 메뉴]> [주문내역]에서도 결제를 진행할 수 있습니다.", label: '', title:'주문 상품'},
    ])

    const [setlInfo, setSetlInfo] = useState({tagType: 'VIEW', title:'주문상품'})
    const [setlData, setSetlData] = useState([
        { id: 1, text: "김정호", label: '이름', title:'주문 상품' },
        { id: 2, text: "rightlightfg@gmail.com", label: '이메일 ', title:'주문 상품'},
        { id: 3, text: "01031755959", label: '연락처', title:'주문 상품'},
    ])

    const [setlMtdInfo, setSetlMtdInfo] = useState({tagType: 'CHECKBOX', title:'주문상품'})
    const [setlMtdData, setSetlMtdData] = useState([
        { id: 1, text: "카드 간편 결제", label: '카드 간편 결제', title:'주문 상품' },
        { id: 2, text: "신용카드", label: '신용카드', title:'주문 상품'},
    ])

    const [smplCardInfo, setSmplCardInfo] = useState({tagType: 'OPTION', title:'주문상품'})
    const [smplCardData, setSmplCardData] = useState([
        { id: 1, text: "신한카드(5594)", label: '', title:'주문 상품' },
    ])


    const [setlAmtInfo, setSetlAmtInfo] = useState({tagType: 'VIEW', title:'주문상품'})
    const [setlAmtData, setSetlAmtData] = useState([
        { id: 1, text: "9999000", label: '상품 금액', title:'주문 상품' },
        { id: 2, text: "3000", label: '', title:'주문 상품'},
        { id: 3, text: "37,8000원", label: '최종 결제 금액', title:'주문 상품'},
    ])


    const [concernInfo, setConcernInfo] = useState({tagType: 'VIEW', title:'주문상품'})
    const [concernData, setConcernData] = useState([
        { id: 1, text: "결제 시 개인정보 제공에 동의합니다.", label: '', title:'주문 상품' },
        { id: 2, text: "내용보기URL", label: '', title:'주문 상품'},
        { id: 3, text: "주식회사 포스타입은 회원 상호 간 콘텐츠 거래를 위한 통신판매중개 시스템을 제공할 뿐, 통신판매자를 대리하지 않습니다. 구매한 상품에 대한 취소, 환불 등 회원 간 성립된 거래에 대한 모든 책임은 회원이 직접 부담합니다. 자세한 내용은 서비스 이용 전 동의하신 이용약관을 참고해주세요.", label: '', title:'주문 상품'},
        { id: 4, text: "이용약관URL", label: '', title:'주문 상품'},
    ])

    const [agreInfo, setAgreInfo] = useState({tagType: 'CHECKBOX', title:'주문상품'})
    const [agreData, setAgreData] = useState([
        { id: 1, text: "결제 내용을 확인했으며, 정보 제공 등에 동의합니다.", label: '', title:'주문 상품' },
    ])

    return (
        <Container>
            <SetlHeader>
                <OrderNumber>{orderData[0].text}</OrderNumber>
                <SetlHeaderTitle>{orderData[1].text}</SetlHeaderTitle>
                <SetlHeaderDescription>{orderData[2].text}</SetlHeaderDescription>
            </SetlHeader>
            <SetlInfoWrapper>
                <TitleWrapper>
                    <SetlTitle>결제 정보</SetlTitle>
                    <Spacer/>
                    <ContainerModule info = {setlInfo} data={ setlData} template={template}/>
                </TitleWrapper>
            </SetlInfoWrapper>
            <ModuleWrapper>
                <TitleWrapper>
                    <SetlTitle>결제 방법</SetlTitle>
                    <Spacer/>
                    <ContainerModule info = {setlMtdInfo} data={setlMtdData} template={template}/>
                </TitleWrapper>
            </ModuleWrapper>
            <ModuleWrapper>
                <TitleWrapper>
                    <SetlTitle>결제 방법</SetlTitle>
                    <Spacer/>
                    <ContainerModule info = {smplCardInfo} data={smplCardData}  template={template}/>
                </TitleWrapper>
            </ModuleWrapper>
            <ModuleWrapper>
                <TitleWrapper>
                    <SetlTitle>결제 금액</SetlTitle>
                    <Spacer/>
                    <ContainerModule info = {setlAmtInfo} data={setlAmtData}  template={template}/>
                </TitleWrapper>
            </ModuleWrapper>
            <ModuleWrapper>
                <TitleWrapper>
                    <SetlTitle>유의 사항</SetlTitle>
                    <Spacer/>
                    <ContainerModule info = {concernInfo} data={concernData}  template={template}/>
                </TitleWrapper>

            </ModuleWrapper>
            <SetlButton value={'결제 하기'} onClick={clickHandler}>결제 하기</SetlButton>
        </Container>
    )
}

export default SettlementPage;