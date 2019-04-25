import React from "react";
import PropTypes from "prop-types";

const NextButtonComponent = ({ steps, isComplete, nextStep, init }) => {
  return isComplete ? (
    <button onClick={init}>
      Restart Test
    </button>
  ) : (
    <button onClick={nextStep}>
      {steps === 0 && !isComplete ? "Start Tests" : "Next Step"}
    </button>
  );
};

NextButtonComponent.propTypes = {
  parts: PropTypes.array
};

export default NextButtonComponent;
