import { PREVIOUS_SLIDE, NEXT_SLIDE } from './actions/slides';

const initialState = {
    currentSlide: 0,
};

const slides = (state = initialState, action) => {
    switch(action.type) {
        case PREVIOUS_SLIDE:
            return {
                ...state,
                currentSlide: action.slide,
            };
        case NEXT_SLIDE:
            return {
                ...state,
                currentSlide: action.slide,
            };
        default:
            return state;
    }
};

const balance = (state = 0, action) => {
    switch (action.type) {
        case 'DEPOSIT':
            return state + action.value;
        case 'WITHDRAW':
            return state - action.value;
        default:
            return state;
    }
};

const cats = (state = { images: [], isFetching: false }, action) => {
    switch (action.type) {
        case 'FETCH_CAT_REQUEST':
            return {
                ...state,
                isFetching: true,
            };
        case 'FETCH_CAT_SUCCESS':
            return {
                ...state,
                isFetching: false,
                images: state.images.concat([action.cat.url]),
            };
        case 'FETCH_CAT_ERROR':
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default {
    balance,
    cats,
    slides,
};
