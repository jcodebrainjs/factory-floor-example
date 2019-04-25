import { connect } from "react-redux";
import { OrdersComponent } from "components";
import { selectors } from "modules/factory";

const mapStateToProps = state => ({
  factoryOrders: selectors.getFactoryOrdersComplete(state)
});

const OrdersContainer = connect(mapStateToProps)(OrdersComponent);

export default OrdersContainer;
