import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import { HashRouter as Router} from 'react-router-dom'

import App from './components/app'
import ErrorBoundary from './components/error-boundary'
import Bookstoreservice  from './services/bookstore-service'
import {BookstoreServiceProvider} from './components/bookstore-service-context'
import store from './store'


const bookstoreService = new Bookstoreservice();



ReactDOM.render(
    <Provider store = {store}>
      <ErrorBoundary>
        <BookstoreServiceProvider value={bookstoreService}>
            <Router>
              <App/>
            </Router>
        </BookstoreServiceProvider>
      </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
 
);


