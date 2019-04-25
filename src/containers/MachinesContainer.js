import { connect } from "react-redux";
import { MachinesComponent } from "components";
import { selectors } from "modules/factory";

const mapStateToProps = state => ({
  factoryMachinesLoaded: selectors.getFactoryMachinesLoaded(state) || []
});

const MachinesContainer = connect(mapStateToProps)(MachinesComponent);

export default MachinesContainer;
