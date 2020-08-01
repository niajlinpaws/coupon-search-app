/* Importing Package Dependencies */
import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";

/* Importing HomePage and its actions */
import { Home as HomePage } from "../pages";
import { storeList, storeCoupons, searchInputChange } from "./../actions";

/* HomeContainer will connect 
  with redux store and 
  dispatch actions 
  from Homepage 
*/
class HomeContainer extends PureComponent {
  componentDidMount() {
    this.props.storeList();
  }
  render() {
    const {
      loading,
      stores,
      coupons,
      isFailed,
      searchInput
    } = this.props.home;

    return (
      <HomePage
        state={{
          loading,
          stores,
          coupons,
          isFailed,
          searchInput
        }}
        getCoupons={this.props.storeCoupons}
        searchInputChange={this.props.searchInputChange}
      />
    );
  }
}

/* Validating Prop Types for HomeContainer */
HomeContainer.propTypes = {
  home: PropTypes.object,
};

const mapStateToProps = state => ({
  home: state.home
});

const mapDispatchToProps = dispatch => ({
  storeList: () => dispatch(storeList()),
  storeCoupons: (store) => dispatch(storeCoupons({ store })),
  searchInputChange: (searchInput) => dispatch(searchInputChange({ searchInput }))
});

/* Connecting State 
  and actions with 
  HomeContainer 
*/
export const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);