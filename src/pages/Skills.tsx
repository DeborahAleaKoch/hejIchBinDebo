import { TechSkill } from "../components/TechSkill";
import { goodSkills, techStackData, wantToLearn } from "../data";

export const Skills = () => {
	return (
		<div className='mx-48 text-center'>
			<div className='text-3xl mt-2 font-semibold italic dark:text-(--color-secondary) text-(--color-secondary) py-3'>
				<span className='relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-(--color-primary)'>
					<h1 className='relative text-white dark:text-gray-950'>Tech Stack</h1>
				</span>
			</div>

			<section className=' text-left '>
				<article className=''>
					<TechSkill skills={goodSkills} text='Erfahrungen' />
				</article>

				<article>
					<TechSkill skills={techStackData} text='bin dran' />
				</article>

				<article>
					<TechSkill skills={wantToLearn} text='möchte ich noch lernen' />
				</article>
			</section>
		</div>
	);
};
