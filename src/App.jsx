import { BrowserRouter } from 'react-router-dom';
import './styles/main.scss';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Router from './components/appContent';
import NotificationCenter from './components/notificationCenter';

function App() {
	return (
		<BrowserRouter>
			<div className='app-container'>
				<Sidebar />
				<Header />
				<Router />
				<NotificationCenter />
			</div>
		</BrowserRouter>
	);
}

export default App;
