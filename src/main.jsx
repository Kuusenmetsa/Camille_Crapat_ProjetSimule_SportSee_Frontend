import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './global.scss';

import Home from './pages/Home';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Error from './pages/Error';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router>
			<Header />
			<SideBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</Router>
	</React.StrictMode>
);
