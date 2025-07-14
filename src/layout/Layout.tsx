import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useContext, useEffect } from "react";
import { mainContext } from "../context/MainProvider";

export const Layout = () => {
	const { isFirstRender, setNotFirstRender } = useContext(mainContext);

	useEffect(() => {
		if (isFirstRender) {
			console.log(
				"%cHallo! Schön dass du vorbei schaust.\nHier sollte alles aufgeräumt sein, ich habe nämlich mit Besuch gerechnet.🤓\nMöchtest du einen Kaffee ☕️?? ",
				"font-size:1.1rem; font-family: sans-serif; font-weight:lighter; line-height:1.5rem"
			);
			setNotFirstRender();
		}
	}, [isFirstRender, setNotFirstRender]);

	return (
		<div className='flex flex-col min-h-screen bg-white text-(--color-secondary)'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};
