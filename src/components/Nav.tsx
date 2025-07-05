import { Link } from "react-router";

export const Nav = () => {
	return (
		<div className='flex justify-between gap-5 text-slate-700 text-lg'>
			<a
				href={`aboutme`}
				className=' hover:text-orange-300 hover:delay-50 hover:ease-linear'
			>
				about me
			</a>
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
				skills
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
