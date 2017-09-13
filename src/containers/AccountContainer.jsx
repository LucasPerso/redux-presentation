import { connect } from 'vitaminjs/react-redux';

import { deposit, withdraw } from '../actions/account';

import Account from '../components/Account';

const mapStateToProps = (state, ownProps) => ({ balance: state.balance});

const mapDispatchToProps = (dispatch) => ({
    depositAction: () => dispatch(deposit()),
    withdrawAction: () => dispatch(withdraw())
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
