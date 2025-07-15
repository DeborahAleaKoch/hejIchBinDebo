import { Link } from "react-router";

export const Footer = () => {
	return (
		<div className='mt-auto'>
			<footer className='footer sm:footer-horizontal bg-orange-300 text-slate-700 items-center px-8 py-4'>
				<aside className='grid-flow-col items-center gap-5'>
					<p className='text-c'>
						Copyright © {new Date().getFullYear()} - All right reserved
					</p>
					<div className='font-semibold flex gap-4'>
						<Link
							to={`impressum`}
							className=' hover:underline hover:ease-linear'
						>
							Impressum
						</Link>
						<Link to={`contact`} className='hover:underline'>
							Kontakt
						</Link>
					</div>
				</aside>
				<nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
					<a
						href='https://github.com/DeborahAleaKoch'
						className=''
						target='_blanket'
					>
						<img
							src='/logos/github-mark.svg'
							alt='GitHub Logo.'
							className='h-7 w-7 transition delay-150 duration-300 ease-in-out hover:translate hover:scale-140 '
						/>
					</a>
					<a
						href='https://www.linkedin.com/in/deborah-koch'
						className='linkedIn Logo'
						target='_blanket'
					>
						<img
							src='/public/logos/iconmonstr-linkedin-3.svg'
							alt=''
							className='h-7 w-7 transition delay-150 duration-300 ease-in-out hover:translate hover:scale-140 '
						/>
					</a>
					<a></a>
				</nav>
			</footer>
		</div>
	);
};
