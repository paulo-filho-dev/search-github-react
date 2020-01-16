import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../../App';

const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}/>
            <Route path="/result/:?filter" component={App}/>
            <Route path="/not-found" component={App}/>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root