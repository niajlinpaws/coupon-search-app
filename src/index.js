/* Importing Package Dependencies */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";

/* Importing Store Variables */
import configureStore from "./stores/configureStore";

/* Imorting Application CSS */
import './App.css';

/* Importing Service Worker 
    for  Offline Support & 
    Page Speed Improvements 
*/
import * as serviceWorker from './serviceWorker';

/* Importing Top Level 
   Components for Routing 
*/
import { Home } from './containers';
import { NotFound } from './components';

/* Top Level Component */
const Root = () => {

    const { store } = configureStore();

    return (
        /* 
            Connecting Redux Store a.k.a state 
            with the Application
        */
        <Provider store={store}>
            {/* Mounting BrowserRouter 
                to avail History API 
                Benefits 
            */}
            <BrowserRouter>
                {/* Using Switch to navigate 
                a enable a single route 
                at any particular time  
            */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </Provider>
        /* End of Component */
    );
}

/* Rendering the component over UI */
render(<Root />, document.getElementById('root'));

/* Registering the service Worker */
serviceWorker.register();
