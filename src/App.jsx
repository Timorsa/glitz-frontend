import './styles/main.scss';
import Sidebar from './components/sidebar';
import Header from './components/header';
import NotificationCenter from './components/notificationCenter';

function App() {
	return (
		<div>
			<div className='app-container'>
				<Sidebar />
				<Header />
				<NotificationCenter />
			</div>
		</div>
	);
}

export default App;
