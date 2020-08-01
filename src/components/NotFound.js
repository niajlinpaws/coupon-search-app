/* Importing Package Dependencies */
import React, { PureComponent } from 'react';

/* component will be 
    displayed for 
    incorrect address 
*/
class NotFound extends PureComponent {
    render() {
        return (
            <div className="results-container imgbox">
                <img className="center-fit" src="404-not-found.png" alt="Page Not Found" />
            </div>
        );
    }
}

export { NotFound };