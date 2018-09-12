import React from "react";
import ReactDOM from "react-dom";

import reducers from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createHistory from "history/createBrowserHistory";
import { Route} from "react-router";
import {
    ConnectedRouter,
    routerMiddleware
} from "react-router-redux";

import Home from './components/home'

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(middleware, thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={Home} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);