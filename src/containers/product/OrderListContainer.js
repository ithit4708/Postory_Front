import {useEffect, useState} from "react";
import call, {getAllorders} from "../../api/ApiService";
import OrderList from "../../components/product/order/OrderList";


const OrderListContainer = () => {
    const [productData, setProductData] = useState({"adultGrdYn":true,"comProdCnclRfndRegu":"판매자 환불규정에 따라요!","crtUserId":"772d132622ba4b53953e251b2546791f","lmttProdSelerQualCertiUrl":"","ordtmSleYn":false,"prodId":"00000000000000000001","prodNm":"탈모치료제","prodStusChgDtm":"2023-04-18 08:24:43","prodTermAgreYn":false,"repImgPath":"/images/hair.jpg","selerCnclRfndReguCn":"직접 찾아오세요^^","sleEndDtm":"2023-04-18 08:24:43","sleStartDtm":"2023-04-18 08:24:43","sleStusCd":"ST01630","lmttProdSelerQualCertiYN":false})
    const [orderData,setOrderData] = useState([{"prodOrdId":"00000000000000000001","bfSetlOrderDetlSaveDtm":"2023-04-19 18:02:10","setlCnclRefusResnCn":"","prodOrdDcsnYn":null,"prodOrdDcsnTlmtDtm":"2023-04-19 18:02:10","prodOrdDcsnTlmtExtsnTlmtDtm":"2023-04-19 18:02:10","prodOrdDtm":"2023-04-19 18:02:10","prodOrdStausCd":"ST00910","prodStusChgDtm":"2023-04-19 18:02:10","prodOrdAtm":9999990,"userId":"772d132622ba4b53953e251b2546791f","ordStusCd":"ST00910"}]);
    const [orderDetails, setOrderDetails] = useState([{"prodOptOrdDetlId":"00000000000000000001","ordQty":1,"ordPrc":9999990,"pordOrdId":"00000000000000000001","prodOptId":"00000000000000000001"}]);
    const [orders, setOrders] = useState([{...(orderData[0]),...(orderDetails[0]),...productData}])

    // const [orders, setOrders] = useState([{
    //     prodId: '00000000000000000001', ordId:'00000000000000000001',stus:'결제 전',stusChgDtm: Date(), prodNm: '강려크한 탈모약', optNm:'강려크한 탈모약', ordAtm: 9999000,repImgPath:'/images/hair.jpg' }
    // ]);

    // useEffect(()=> {
    //     const fetchOrderList = () => {
    //         call("/test/orders", "GET")
    //             .then((response) => {
    //                 setOrders(response);
    //             })
    //             .catch((error) => {
    //                 console.error(error);
    //             });
    //     };
    //
    //     const fetchOrderDetails = () => {
    //         call("/test/order/details","GET").then((response) =>{
    //             setOrderDetails(response);
    //         }).catch((error) => {
    //             console.error(error);
    //         })
    //     }
    //
    //     fetchOrderList();
    //     fetchOrderDetails();
    //
    //     orderDetails.map((orderDetail)=> {(combinedData.push([{...orders[0] ,...orderDetail}]));})
    //     console.dir(combinedData);
    //
    //
    // },[])

    return (
        <div>
            <OrderList orders={orders}/>

        </div>
    )
    }

export default OrderListContainer;