import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Layout } from "./layout/Layout";
import { AboutMe } from "./pages/AboutMe";
import { RouterProvider } from "react-router";
import { Home } from "./pages/Home";
import { Quiz } from "./pages/Quiz";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Layout />}>
				{/* hier kommen dann die Routen hin */}
				<Route index element={<Home />} />
				<Route path='aboutme' element={<AboutMe />} />
				<Route path='quiz' element={<Quiz />} />
			</Route>
		)
	);

	return (
		<main>
			<RouterProvider router={router} />

			{/* <div>
				<a href='https://vite.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div> */}
		</main>
	);
}

export default App;
