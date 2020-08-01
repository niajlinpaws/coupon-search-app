/* Importing home page constants */
import {
    STORE_LIST_REQUESTED,
    STORE_LIST_SUCCESS,
    STORE_LIST_FAILED,
    STORE_COUPON_REQUESTED,
    STORE_COUPON_SUCCESS,
    STORE_COUPON_FAILED,
    SEARCH_INPUT_CHANGE
} from './../constants/types';

/* Setting up initial state 
    to be used for the 
    first time before any
    dispatch of action   
*/
const initialState = {
    searchInput: null,
    stores: null,
    coupons: null,
    isFailed: false,
    loading: false
};

/* Exporting the function 
    to perform operations on:
    - Fetching available stores list
    - Fetching Coupons for individual store
    - Updating search input on user interaction 
*/
export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case STORE_LIST_REQUESTED:
            return {
                ...state,
                isFailed: false,
                loading: true
            };
        case STORE_LIST_SUCCESS:
            return {
                ...state,
                stores: payload.data,
                isFailed: false,
                loading: false
            };
        case STORE_LIST_FAILED:
            return {
                ...state,
                isFailed: true,
                loading: false
            };

        case STORE_COUPON_REQUESTED:
            return {
                ...state,
                isFailed: false,
                loading: true
            };
        case STORE_COUPON_SUCCESS:
            return {
                ...state,
                coupons: payload.data.total_count ? payload.data.offers : null,
                stores: null,
                isFailed: false,
                loading: false
            };
        case STORE_COUPON_FAILED:
            return {
                ...state,
                isFailed: true,
                loading: false
            };
        case SEARCH_INPUT_CHANGE:
            return {
                ...state,
                searchInput: payload.searchInput
            };

        default:
            return state;
    }
};