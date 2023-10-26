import { Outlet } from 'react-router-dom';
import Header from '../constants/header/Header';

const Layout = () => {
	return (
		<>
			<Header title='CABECERA DE MI WEB'></Header>
			<Outlet></Outlet>
		</>
	);
};

export default Layout;
