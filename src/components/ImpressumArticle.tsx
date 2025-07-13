import type { ImpressText } from "../impressum";

export interface Props {
	content: ImpressText;
}

export const ImpressumArticle: React.FunctionComponent<Props> = ({
	content
}) => {
	return (
		<div className='text'>
			<h2 className='font-semibold text-lg text-(--color-secondary-light) my-5'>
				{content.headline}
			</h2>
			<p>{content.text}</p>
		</div>
	);
};
