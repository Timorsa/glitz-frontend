import './styles/main.scss';
import Header from './components/header';
import Sidebar from './components/sidebar';
import AppContent from './components/appContent';
import NotificationCenter from './components/notificationCenter';

function App() {
	return (
		<div>
			<div className='app-container'>
				<Sidebar />
				<Header />
				<AppContent/>
				<NotificationCenter />
			</div>
		</div>
	);
}

export default App;
