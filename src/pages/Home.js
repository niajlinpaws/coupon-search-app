/* Importing Package Dependencies */
import React, { PureComponent } from 'react';
import SearchBar from 'material-ui-search-bar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Loader from 'react-loader';

/* Importing Logo, Store 
    & Coupon Card for listing 
*/
import { Logo, StoreCard, CouponCard } from './../components';

/* Home page is built on 
    Material UI theme and 
    utilises custom search bar 
    and loader components  
*/
class Home extends PureComponent {
    render() {
        const {
            state: {
                loading,
                stores,
                coupons,
                isFailed,
                searchInput
            },
            getCoupons,
            searchInputChange

        } = this.props;

        return (
            /* Material UI theme 
                bulit on provider component 
            */
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <div className="container">
                    {/* Header Layout
                        containing
                        Logo & Search Bar
                    */}
                    <div className="heading">
                        <Logo />
                        <SearchBar
                            onChange={val => searchInputChange(val)}
                            onRequestSearch={() => getCoupons(searchInput)}
                        />
                    </div>
                    {/* Loader visibility is altered with 
                        @prop {Boolean} loaded
                        While loading, children are not visible   
                    */}
                    <Loader loaded={!loading}>
                        {/* Show error message on 
                            unwanted or 500 issues  
                        */}
                        {isFailed ?
                            (<p>Something Went Wrong, Please Try Again</p>) :
                            (
                                <div className="results-container">
                                    {/* Conditioninal rendering 
                                        on stores and coupons 
                                    */}
                                    {
                                        stores ? stores.map(store => (
                                            <StoreCard
                                                key={store}
                                                name={store}
                                                getCoupons={getCoupons}
                                            />
                                        )) : coupons ? coupons.map(coupon => (
                                            <CouponCard
                                                key={coupon.id}
                                                data={coupon}
                                            />
                                        )) : (<p>No Results Found</p>)
                                    }
                                </div>
                            )
                        }
                    </Loader>
                </div>
            </MuiThemeProvider>
        );
    }
}

export { Home };