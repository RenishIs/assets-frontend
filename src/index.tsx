import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css"

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={configureStore}>
			<App />
		</Provider>
	</React.StrictMode>
);


