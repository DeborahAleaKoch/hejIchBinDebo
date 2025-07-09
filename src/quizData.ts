export type Choice = {
	text: string;
	correct: boolean;
};

export type QuizItem = {
	img?: string;
	question: string;
	choices: Choice[];
};

export const quizQuestions: QuizItem[] = [
	{
		question: "Wie viele Haustiere habe ich?",
		choices: [
			{ text: "Einen Hund.", correct: false },
			{ text: "Zwei Kater.", correct: true },
			{ text: "Drei Meerschweinchen.", correct: false },
			{ text: "Vier Wellensittiche.", correct: false },
		],
	},
	{
		question: "Ich bevorzuge welche Paprikafarbe?",
		choices: [
			{ text: "rot", correct: false },
			{ text: "gelb", correct: false },
			{ text: "orange", correct: false },
			{ text: "grün", correct: true },
		],
	},
	{
		question: "Mit welchem Betriebsystem komme ich nicht gut zurecht?",
		choices: [
			{ text: "Microsft Windows", correct: true },
			{ text: "Apple macOS", correct: false },
			{ text: "Linux", correct: false },
		],
	},
	{
		question: "Mein Lieblinsgemüse ist?",
		choices: [
			{ text: "Brokkoli", correct: false },
			{ text: "Fenchel", correct: false },
			{ text: "Pak Choi", correct: true },
			{ text: "Kürbis", correct: false },
		],
	},
	{
		question: "Welche:n Autor:in lese ich nicht",
		choices: [
			{ text: "John Irving", correct: false },
			{ text: "Haruki Murakami", correct: false },
			{ text: "J.K. Rowling", correct: true },
			{ text: "T.C. Boyle", correct: false },
		],
	},
];
