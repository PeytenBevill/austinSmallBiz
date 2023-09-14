// containers/Home.js
import { connect } from "react-redux";
import Home from "../src/components/Home";
import { deleteListing } from '../redux/actions';


const mapStateToProps = (state) => {
  return {
    bizInfo: state.bizInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteListing: (bizName) => dispatch(deleteListing(bizName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);