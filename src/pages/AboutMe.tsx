import { Headline } from "../components/Headline";

export const AboutMe = () => {
	return (
		<>
			<Headline title='about me' />
			<div className='mx-10 my-5 md:mx-48 md:my-5 font-light flex flex-col gap-10 text-xl'>
				<section className='flex justify-between gap-10 items-center flex-wrap'>
					<img
						src='../../public/img/debo.png'
						alt='Bild von mir.'
						className=' rounded-full  bg-gray-50 '
					/>
					<article className=' md:w-1/2 text-justify '>
						<div className=''>
							Ich heiße Deborah Alea Koch und bin 1990 in Lünen geboren und
							aufgewachsen. Von den meisten werde ich Debo genannt und bin damit
							voll fein.{" "}
							{/* Der Name <span>Deborah</span> kommt aus dem hebräischen und beudeutet <span>die fleißige Biene</span>.  */}
							Inzwischen wohne ich in Bochum und habe zwei Kater. In meiner
							Freizeit mache ich Sport.
							{/* lese oder koche was leckeres. */}{" "}
						</div>
					</article>
				</section>
				<div>
					<h3 className='underline'>fun-facts:</h3>
					<li>
						Meine Tassen passen leider nicht alle in einen Schrank, dafür gibt
						es einen zweiten.{" "}
					</li>
					<li>
						Der Name Deborah stammt aus dem hebräischen und bedeutet so viel wie
						fleißige Biene 🐝
					</li>
				</div>
			</div>
		</>
	);
};
