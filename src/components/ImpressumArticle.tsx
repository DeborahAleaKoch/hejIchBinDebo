export interface Props {
	title: string;
	text: string;
}

export const ImpressumArticle: React.FunctionComponent<Props> = ({
	title,
	text,
}) => {
	return (
		<div className="text">
			<h2 className='font-semibold text-lg text-(--color-secondary-light) mb-5'>
				{title}
			</h2>
			<p>{text}</p>
		</div>
	);
};
