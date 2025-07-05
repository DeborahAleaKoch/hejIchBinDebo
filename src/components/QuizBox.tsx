import { useState } from "react";
import type { Choice, QuizItem } from "../quizData";
import classNames from "classnames";

interface Props {
	item: QuizItem;
}

export const QuizBox: React.FC<Props> = ({ item }) => {
	const [answered, setAnswered] = useState<Choice | undefined>(undefined);

	return (
		<div className='flex flex-col items-center gap-3 rounded-xl mx-48 my-8 py-3 shadow-lg shadow-orange-100 hover: hover:ease-linear text-(--color-secondary) hover:shadow-3xl hover:shadow-orange-200 dark:text-slate-500 bg-amber-50'>
			<p className='text-xl mb-2.5'>{item.question}</p>
			<div className='md:flex md:flex-col'>
				<p className='flex gap-5 flex-col lg:flex-row'>
					{item.choices.map((choice) => (
						<button
							disabled={!!answered}
							className={classNames(
								"border-orange-400  rounded-xl cursor-pointer px-3 mx-2 py-2 hover:bg-orange-100 dark:text-slate-500 text-lg",
								{
									"bg-orange-200 hover:bg-orange-200":
										answered && choice.correct,
								},
								{
									"bg-slate-50 hover:bg-slate-50 ": answered && !choice.correct,
								},
								{
									"outline-2 outline-orange-300 border-orange-400 ":
										answered?.text === choice.text,
								}
							)}
							onClick={() => {
								setAnswered(choice);
							}}
						>
							{choice.text}
						</button>
					))}
				</p>
			</div>
		</div>
	);
};
