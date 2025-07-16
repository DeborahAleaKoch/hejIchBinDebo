import { Link } from "react-router";

export const Nav = () => {
	return (
		<div className='flex justify-between gap-5 text-slate-700 text-lg'>
			<Link
				to={`aboutme`}
				className=' hover:text-orange-300 hover:delay-50 hover:ease-linear'
			>
				about me
			</Link>
			<Link
				to={`projects`}
				className=' hover:text-orange-300 hover:delay-50 hover:ease-linear'
			>
				projects
			</Link>
			<Link
				to={`skills`}
				className=' hover:text-orange-300 hover:delay-50 hover:ease-linear'
			>
				skills & tech
			</Link>
			<Link
				to={`quiz`}
				className=' hover:text-orange-300 hover:delay-50 hover:ease-linear'
			>
				quiz
			</Link>
		</div>
	);
};
