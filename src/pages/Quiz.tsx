import { QuizBox } from "../components/QuizBox";
import { quizQuestions } from "../quizData";

export const Quiz = () => {
	return (
		<>
			<section>
				<h1 className=' text-3xl text-center mt-2 font-semibold italic dark:text-(--color-secondary) text-(--color-secondary)'>
					Yay,{" "}
					<span className='relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-(--color-primary)'>
						<span className='relative text-white dark:text-gray-950'>
							Quiz Time!
						</span>
					</span>
				</h1>
				{quizQuestions.map((item) => (
					<QuizBox item={item} />
				))}
			</section>
		</>
	);
};
