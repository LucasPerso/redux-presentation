import { connect } from 'vitaminjs/react-redux';

import { getCat } from '../actions/account';

import CatDisplayer from '../components/CatDisplayer';

const mapStateToProps = (state, ownProps) => ({
    cats: state.cats.images,
    isFetchingCat: state.cats.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
    getCatAction: () => dispatch(getCat()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CatDisplayer);
