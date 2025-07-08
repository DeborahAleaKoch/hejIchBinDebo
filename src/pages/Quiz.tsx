import { Headline } from "../components/Headline";
import { QuizBox } from "../components/QuizBox";
import { quizQuestions } from "../quizData";

export const Quiz = () => {
	return (
		<>
			<section>
				<Headline title=' Yay, Quiz Time!' />

				{quizQuestions.map((item) => (
					<QuizBox item={item} />
				))}
			</section>
		</>
	);
};
