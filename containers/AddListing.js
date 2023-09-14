import { connect } from 'react-redux';
import { addListing } from '../redux/actions';
import Add from '../src/components/Add';

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (bizInfo) => dispatch(addListing(bizInfo)),
  };
};

export default connect(null, mapDispatchToProps)(Add);
