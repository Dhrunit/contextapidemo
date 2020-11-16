import './App.css';
import Navbar from './Navbar';
import Form from './Form';
import PageContent from './PageContent';
import ThemeProvider from './contexts/ThemeContext';

function App() {
	return (
		<ThemeProvider>
			<div className='App'>
				<PageContent>
					<Navbar />
					<Form />
				</PageContent>
			</div>
		</ThemeProvider>
	);
}

export default App;
