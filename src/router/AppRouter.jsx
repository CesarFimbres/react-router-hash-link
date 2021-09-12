import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	/* 
		Link,
		useRouteMatch,
		useParams,
	 */
} from 'react-router-dom';

import { BlogScreen } from '../containers/pages/BlogScreen';
import { Error404 } from '../containers/pages/Error404';
import { HomeScreen } from '../containers/pages/HomeScreen';

export default function AppRouter() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/home" component={HomeScreen} />

					<Route exact path="/blog" component={BlogScreen} />

					<Redirect exact from="/" to="/home" />

					<Route path="*" component={Error404} />
				</Switch>
			</div>
		</Router>
	);
}
