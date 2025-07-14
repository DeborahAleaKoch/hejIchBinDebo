import { Link } from "react-router";
import "../index.css";
import { Nav } from "./Nav";
// import "../assets/fonts/Josefin_Sans/JosefinSans-VariableFont_wght.ttf";

export const Header = () => {
	return (
		<div>
			<section className='font-[JosefinSans] flex justify-between flex-wrap px-10 pt-10 pb-2 mb-2 border-b-2 border-slate-400'>
				<Link to={`/`}>
					<p className=' text-xl text-orange-300 hover:text-(--color-secondary)'>
						Deborah Koch
					</p>
				</Link>

				<Nav />
			</section>
		</div>
	);
};
