import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const OrderCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  cursor: pointer;
`;

const OrderThumbnail = styled.div`
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const OrderDetails = styled.div`
  font-size: 0.9rem;
`;

const OrderButton = styled.button`
  /* Add any custom styles for the button here */
`;

const OrderListItem = ({ order }) => {

    const navigate = useNavigate();
    const [clicked, setClicked] = useState(false);

    const handleClick = useCallback(() => {
        setClicked(true);
        navigate(`/order/detail/${order.ordId}`, { state: { order } });
    }, [navigate, order]);


    return (
        <OrderCard onClick={handleClick}>
            <OrderThumbnail>
                <img src={order.repImgPath} alt={order.prodNm} />
            </OrderThumbnail>
            <OrderInfo>
                <div>Status Code: {`${order.stus}`}</div>
                <OrderDetails>
                    <div>Status Change Date: {order.stusChgDtm}</div>
                    <div>Product Name: {`${order.prodNm}`}</div>
                    <div>{}</div>
                    <div>Order Amt: {order.ordAmt}</div>
                </OrderDetails>
                <OrderButton value={"orderDetail"}>주문상세</OrderButton>
            </OrderInfo>
        </OrderCard>
    );
};

export default OrderListItem;
