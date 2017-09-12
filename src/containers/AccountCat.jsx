import { Component } from 'react';
import { connect } from 'vitaminjs/react-redux';

import { deposit, getCat, withdraw } from '../actions/account';

import Account from '../components/Account';
import CatDisplayer from '../components/CatDisplayer';

class AccountContainer extends Component {
    render() {
        return (
            <div>
                <CatDisplayer
                    cats={this.props.cats}
                    getCat={() => this.props.getCatClick()}
                    isFetching={this.props.isFetchingCat}
                />
                <Account
                    balance={this.props.balance}
                    depositAction={this.props.onDepositClick()}
                    withdrawAction={this.props.onWithdrawClick()}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    balance: state.account,
    cats: state.cats.images,
    isFetchingCat: state.cats.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
    onGetCatClick: () => dispatch(getCat()),
    onDepositClick: () => dispatch(deposit()),
    onWithdrawClick: () => dispatch(withdraw())
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
