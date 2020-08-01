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

/* Exporting the functions
    to dispatch actions on:
    - Fetching available stores list
    - Fetching Coupons for individual store
    - Updating search input on user interaction 
*/

export const storeList = () => ({
    types: [
        STORE_LIST_REQUESTED,
        STORE_LIST_SUCCESS,
        STORE_LIST_FAILED
    ],
    payload: {
        client: "default",
        request: {
            method: "GET",
            url: "/coupons"
        }
    }
});

export const storeCoupons = ({ store }) => ({
    types: [
        STORE_COUPON_REQUESTED,
        STORE_COUPON_SUCCESS,
        STORE_COUPON_FAILED
    ],
    payload: {
        client: "default",
        request: {
            method: "POST",
            url: "/coupons",
            data : {
                store
            }
        }
    }
});

export const searchInputChange = ({ searchInput }) => ({
    type: SEARCH_INPUT_CHANGE,
    payload: {
        searchInput
    }
});