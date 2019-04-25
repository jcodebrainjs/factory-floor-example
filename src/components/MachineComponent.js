import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-flexbox-grid";

const MachineComponent = ({ machine }) => (
  <Row>
    <Col xs>{machine.name}</Col>
    <Col xs>{machine.inUse ? "Yes" : "No"}</Col>
    <Col xs>{machine.parts.join(",")}</Col>
  </Row>
);

MachineComponent.propTypes = {
  machine: PropTypes.object
};

export default MachineComponent;
