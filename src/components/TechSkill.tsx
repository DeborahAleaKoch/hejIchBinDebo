import type { Tech } from "../data";
import { SkillStack } from "./SkillStack";

interface Props {
	skills: Tech[];
	text: string;
}

export const TechSkill: React.FC<Props> = ({ skills, text }) => {
	return (
		<div className={`border-b-1 border-(--color-primary) `}>
			<h2 className='text-2xl my-5  italic font-extralight border-(--color-primary) border-b-2 inline-block hover:font-bold hover:text-(--color-primary) hover:border-(--color-secondary) hover:border-b-2'>
				{text}
			</h2>
			<div className={`flex flex-wrap gap-14 py-6 `}>
				{skills.map((skill, text) => (
					<SkillStack skill={skill} key={text} />
				))}
			</div>
		</div>
	);
};
