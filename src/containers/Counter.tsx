import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { CounterState, add, decrement, increment } from "../modules/Counter";
import Counter from "../components/Counter";
// import { CounterState } from "../modules/counter";

interface StateProps {
  count: number;
}

interface DispatchProps {
  add: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
}

const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators({ add, decrement, increment }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
