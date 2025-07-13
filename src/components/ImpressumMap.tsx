import { impressum } from "../impressum";
import { ImpressumArticle } from "./ImpressumArticle";

export const ImpressumMap = () => {
	return (
		<>
			<div>
				{impressum.map((entry) => {
					return <ImpressumArticle content={entry} />;
				})}
			</div>
		</>
	);
};
