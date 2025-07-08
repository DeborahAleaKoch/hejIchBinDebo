export interface Props {
	title: string;
}

export const Headline: React.FC<Props> = ({ title }) => {
	return (
		<div className='mx-48 text-center'>
			<div className='text-3xl mt-2 font-semibold italic dark:text-(--color-secondary) text-(--color-secondary) py-3'>
				<span className='relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-(--color-primary)'>
					<h1 className='relative text-white dark:text-gray-950'>{title}</h1>
				</span>
			</div>
		</div>
	);
};
