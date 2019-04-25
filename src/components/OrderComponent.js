import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-flexbox-grid";
import "../Orders.css";

const OrderComponent = ({ order }) => (
  <Row className="Order-row">
    <Col xs>{order.id}</Col>
    <Col xs>{order.name}</Col>
    <Col xs>{order.parts.join(",")}</Col>
    <Col xs>
      {order.totalParts > 0
        ? Math.floor(
            ((order.totalParts - order.parts.length) / order.totalParts) * 100
          )
        : 100}
      %
    </Col>
  </Row>
);

OrderComponent.propTypes = {
  order: PropTypes.object
};

export default OrderComponent;
