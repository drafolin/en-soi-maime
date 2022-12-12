/* @refresh reload */
import { render } from 'preact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.scss';
import Index from "./root";
import Layout from "./layout";
import Login from "./login";

render(() =>
	<BrowserRouter>
		<Routes>
			<Route
				element={Layout}
				path="/"
			>
				<Route
					element={Index}
					path="/"
				/>
				<Route
					element={Login}
					path="/login"
				/>
			</Route>
		</Routes>
	</BrowserRouter>,
	document.getElementById('root') as HTMLElement
);
