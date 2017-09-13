export const deposit = () => ({
    type: 'DEPOSIT',
    value: 10,
});

export const withdraw = () => ({
    type: 'WITHDRAW',
    value: 10,
});

const requestCat = () => ({
    type: 'FETCH_CAT_REQUEST',
});

const receiveCat = cat => ({
    type: 'FETCH_CAT_SUCCESS',
    cat,
});

const failureCat = error => ({
    type: 'FETCH_CAT_ERROR',
    error,
});

export const getCat = () => (dispatch, getState) => {
    if (getState().account < 5) {
        return;
    }
    dispatch(requestCat());
    return fetch('http://localhost:1212/cat-api')
        .then(res => res.json())
        .then(cat => dispatch(receiveCat(cat)))
        .catch(error => dispatch(failureCat(error)));
};

