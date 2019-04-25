import React from "react";
import PropTypes from "prop-types";
import MachineComponent from "./MachineComponent";

const MachinesComponent = ({ factoryMachinesLoaded }) =>
  factoryMachinesLoaded.map((machine, i) => (
    <MachineComponent key={i} machine={machine} />
  ));

MachinesComponent.propTypes = {
  factoryMachinesLoaded: PropTypes.array
};


export default MachinesComponent;
