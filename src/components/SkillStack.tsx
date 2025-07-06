import type { Tech } from "../data";

interface Props {
	skill: Tech;
}

export const SkillStack: React.FunctionComponent<Props> = ({ skill }) => {
	return (
		<div
			className='flex flex-col-reverse items-center gap-2 tooltip'
			data-tip={skill.tooltip}
		>
			{skill.text}
			<img src={`${skill.logo}`} alt={skill.text} className='w-21 ' />
		</div>
	);
};
