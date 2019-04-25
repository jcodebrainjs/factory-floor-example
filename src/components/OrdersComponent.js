import React from "react";
import PropTypes from "prop-types";
import OrderComponent from "./OrderComponent";

const OrdersComponent = ({ factoryOrders }) =>
  factoryOrders.map((order, indx) => <OrderComponent key={indx} order={order} />);

OrdersComponent.propTypes = {
  factoryOrders: PropTypes.array
};

export default OrdersComponent;
