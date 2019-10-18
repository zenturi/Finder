import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../common/history';
import HomePage from '../components/Home/Home';

export default () => (
	<Router history={history}>
		<div>
			<Route exact path="/" component={HomePage} />
		</div>
	</Router>
);
