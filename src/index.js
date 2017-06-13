// let's go!
import React from 'react';
import {BrowserRouter, Match, Miss} from 'react-router'
import {render} from 'react-dom';
import 'material-design-icons';
import Login from './components/Login';
import App from './components/App';
import NotFound from './components/NotFound';
import {} from 'materialize-css';


const Root = ()=> {
	return (
	<BrowserRouter>

		<div>
			<Match exactly pattern="/" component={Login} />
			<Match exactly pattern="/home/:storeId" component={App} />
			<Miss component={NotFound} />
		</div>
	</BrowserRouter>)
}

render(<Root />, document.querySelector('#main'));