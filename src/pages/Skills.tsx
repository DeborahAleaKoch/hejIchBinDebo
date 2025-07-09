import { Headline } from "../components/Headline";
import { TechSkill } from "../components/TechSkill";
import { goodSkills, techStackData, wantToLearn } from "../data";

export const Skills = () => {
	return (
		<div className='mx-10  md:mx-48 text-center'>
			<Headline title='Tech Stack' />

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
