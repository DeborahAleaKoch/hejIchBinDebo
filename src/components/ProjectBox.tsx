interface Props {
	title: string;
	description: string;
	text: string;
	img: string;
}

export const ProjectBox: React.FunctionComponent<Props> = ({
	title,
	description,
	text,
	img,
}) => {
	return (
		<div className='flex flex-wrap md:flex-nowrap justify-around items-center border-t-2 border-(--color-secondary-light) py-15 gap-5'>
			<img src={img} alt='' className='w-150 pb-10' />

			<article>
				<h1 className='text-3xl font-semibold text-(--color-primary) text-center pb-2'>
					{title}
				</h1>
				<div className='text-center text-xl'>
					<p>{description}</p>
					<p> {text}</p>
				</div>
			</article>
		</div>
	);
};
