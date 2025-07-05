import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Layout = () => {
	return (
		<div className='flex flex-col min-h-screen bg-white text-(--color-secondary)'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};
