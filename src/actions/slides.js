export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE';
export const NEXT_SLIDE = 'NEXT_SLIDE';

import slides from '../slides';
import { getCurrentSlide } from '../selectors';

export const nextSlide = () => (dispatch, getState) => {
    const currentSlide = getCurrentSlide(getState());
    if (currentSlide < Object.keys(slides).length - 4) {
        return dispatch({
            type: NEXT_SLIDE,
            slide: currentSlide + 1,
        });
    }
};

export const previousSlide = () => (dispatch, getState) => {
    const currentSlide = getCurrentSlide(getState());
    if (currentSlide > 0) {
        return dispatch({
            type: PREVIOUS_SLIDE,
            slide: currentSlide - 1,
        })
    }
};
