import { connect } from 'react-redux';
import BizInfo from '../src/components/BizInfo';

const mapStateToProps = (state) => {
  return {
    bizInfo: state.bizInfo,
  };
};


export default connect(mapStateToProps)(BizInfo);
