import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
	return (
		<>
			<GlobalStyles></GlobalStyles>

			<BrowserRouter>
				<Router></Router>
			</BrowserRouter>
		</>
	);
};

export default App;
