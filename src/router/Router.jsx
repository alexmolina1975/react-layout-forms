import { Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Contact from '../pages/Contact';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout></Layout>}>
				<Route index element={<h1>Home</h1>}></Route>
				<Route path='/contact' element={<Contact />}></Route>
			</Route>
		</Routes>
	);
};

export default Router;
