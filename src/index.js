import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const connectDecorator = (matchPropsToState, actions) => {
  const provideDispatch = dispatch => bindActionCreators(actions, dispatch);
  const matchDispatchToProps = !actions ? actions : provideDispatch;
  return connect(matchPropsToState, matchDispatchToProps);
};

export default connectDecorator;