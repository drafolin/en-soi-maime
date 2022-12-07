/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route, Routes } from '@solidjs/router';

import './index.scss';
import Index from "./root";
import Layout from "./layout";

render(() =>
	<Router>
		<Routes>
			<Route
				element={Layout}
				path="/"
			>
				<Route
					element={Index}
					path="/"
				/>
			</Route>
		</Routes>
	</Router>,
	document.getElementById('root') as HTMLElement
);
