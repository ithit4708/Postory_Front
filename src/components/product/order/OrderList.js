import React, {useState} from "react";
import {Link} from "react-router-dom";
import OrderDetailPage from "../../../pages/order/OrderDetailPage";
import styled from "styled-components";
import OrderListItem from "./OrderListItem";

const OrderItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 1rem;
`;

function OrderList({ orders }) {
    const [clickedOrdId, setClickedOrdId] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleClick = (ordId) => {
        const order = orders.find((p) => p.ordId === ordId);
        setSelectedOrder(order);
        setClickedOrdId(ordId);
    };

    if (!orders) {
        return <div>Loading...</div>;
    }

    return (
        <OrderItemList>
            {orders.map((order) => (
                <OrderListItem
                    key={order.ordId}
                    order={order}
                    handleClick={handleClick}
                    clicked={clickedOrdId === order.ordId}
                />
            ))}
            {clickedOrdId && selectedOrder && <OrderDetailPage/>}
        </OrderItemList>
    );
}

export default OrderList;
