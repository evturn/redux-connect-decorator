import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const connectDecorator = (matchPropsToState, actions, ...args) => {
  const provideDispatch = dispatch => bindActionCreators(actions, dispatch);
  const matchDispatchToProps = !actions ? actions : provideDispatch;
  return connect(matchPropsToState, matchDispatchToProps, ...args);
};

export default connectDecorator;
