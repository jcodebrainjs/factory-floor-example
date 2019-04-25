import React from "react";
import { MachinesContainer } from "containers";
import { Row, Col } from "react-flexbox-grid";
import "../Machines.css";

const MachinesView = () => (
  <>
    <h1>Machines</h1>
    <div>
      <Row className="Machines-header-row">
        <Col xs>Name</Col>
        <Col xs>In Use</Col>
        <Col xs>Order ID</Col>
      </Row>
      <MachinesContainer />
    </div>
  </>
);

MachinesView.propTypes = {};

export default MachinesView;
