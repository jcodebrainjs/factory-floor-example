import React from "react";
import { OrdersContainer } from "containers";
import { Row, Col } from "react-flexbox-grid";
import '../Orders.css'

const OrdersView = () => (
  <>
    <h1>Orders</h1>
    <Row className="Orders-header-row">
      <Col xs>ID</Col>
      <Col xs>Part</Col>
      <Col xs>Tests To Complete</Col>
      <Col xs>Tests Complete</Col>
    </Row>
    <OrdersContainer />
  </>
);

OrdersView.propTypes = {};

export default OrdersView;
