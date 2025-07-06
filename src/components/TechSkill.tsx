import type { Tech } from "../data";
import { SkillStack } from "./SkillStack";

interface Props {
	skills: Tech[];
	text: string;
}

export const TechSkill: React.FC<Props> = ({ skills, text }) => {
	return (
		<div className={`border-b-1 border-(--color-primary) `}>
			<h2 className='text-2xl my-4 italic font-extralight border-(--color-primary) border-b-2 inline-block '>
				{text}
			</h2>
			<p className={`flex flex-wrap gap-14 py-6 `} >
				{skills.map((skill) => (
					<SkillStack skill={skill} />
				))}
			</p>
		</div>
	);
};
