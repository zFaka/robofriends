import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import thunkMiddleware from 'redux-thunk';

import {Provider} from 'react-redux';
import {createStore,  applyMiddleware, combineReducers} from 'redux';
import {searchRobots, requestRobots} from './reducers';
import {createLogger} from 'redux-logger';

import 'tachyons';
import './index.css';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots});
const store= createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
