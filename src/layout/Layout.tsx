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
				"Hallo! Schön dass du vorbei schaust. Hier sollte alles aufgeräumt sein, ich habe nämlich mit Besuch gerechnet. Möchtest du einen Kaffee?? ;-)"
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
