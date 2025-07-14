import { Headline } from "../components/Headline";

export const Home = () => {
	return (
		<div className=' mx-10 '>
			<Headline title='Hej! Ich bin Debo!' />
			<section className='flex justify-around py-8 lg:gap-3 flex-wrap'>
				<article className='rounded lg:w-1/2 text-xl/8 font-light text-justify '>
					<p className='text-2xl'>
						Ich bin <span className='italic '>Frondend Web Developerin. </span>
					</p>
					<br />
					<div className=''>
						Seit 2024 befinde ich mich in meiner beruflichen Umorientierung. Im
						Juni 2024 absolvierte ich einen vier wöchigen{" "}
						<a
							href='/document/cimdata-Zertifikat.pdf'
							className='text-(--color-primary) tooltip'
							data-tip='Das Zertifikat kann hier angesehen werden. '
							target='_blanked'
						>
							JavaScript Kurs
						</a>{" "}
						und im Mai 2025 beendete ich ein{" "}
						<a
							href='/document/Deborah-Alea-Koch - Zertifikat.pdf'
							className='text-(--color-primary) tooltip'
							data-tip='Das Zertifikat kann hier angesehen werden.'
							target='_blanked'
						>
							Bootcamp
						</a>{" "}
						- mit den Schwerpunkten{" "}
						{/* <span className='relative inline-block before:absolute before:-inset-0.5 before:block before:-skew-y-3 before:bg-orange-300'>
							<span className='relative font-medium text-slate-700 dark:text-gray-950'> */}
						<span className='font-bold italic'>React</span>{" "}
						{/* </span>
						</span>{" "} */}
						und{" "}
						{/* <span className='relative inline-block before:absolute before:-inset-0.5 before:block before:-skew-y-3 before:bg-orange-300'>
							<span className='relative font-medium text-slate-700 dark:text-gray-950'> */}
						<span className='font-bold italic'>TypeScript</span>
						{/* </span>
						</span>{" "} */}
						. Dort lernte ich unter anderem den Umgang mit supabase. Wobei mich
						das Anlegen eines Backends ohne{" "}
						<span className=' italic'>Backend as a Service</span> mehr
						interessiert, weswegen ich auch gerne{" "}
						<span className='font-bold italic'>PHP</span> lernen möchte.
					</div>
					<br />
					<p></p>
					<p>
						Ich bin ausgebildete Gesundheits- und Kinderkrankenpflegerin und
						habe zuletzt im Evangelischen Krankenhaus in Hattingen in der
						neurophysiologischen Abteilung gearbeitet.{" "}
					</p>
				</article>

				<img
					src='/img/27640991-925C-43F5-856A-AF16E5AE9F38_1_105_c.jpeg'
					alt='Bild von Debo.'
					className='rounded-2xl object-cover md:w-lg '
				/>
			</section>
		</div>
	);
};
