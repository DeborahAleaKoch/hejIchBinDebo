import { Headline } from "../components/Headline";
import { ProjectBox } from "../components/ProjectBox";

import { ProjectBoxMobile } from "../components/ProjectBoxMobil";
import myGifSSP from "../../public/gifs/iPhone-13-PRO-localhost-eojkg3lfro59nw.gif";
import myGifBeer from "../../public/gifs/Macbook-Air-localhost-iujvmfa0t0k5ig.gif";
import silentMoon from "../../public/gifs/iPhone-13-PRO-localhost-zdep8weyl8e6jg.gif";
import recipes from "../../public/gifs/Macbook-Air-localhost-10awcduupio-hw.gif";
import mov from "../../public/gifs/iPhone-13-PRO-localhost-pjobeg9dgab-jt.gif";

export const Projects = () => {
	return (
		<div>
			<Headline title='Projekte' />
			<section
				className=' md:mx-36 mx-10
			text-(--color-secondary) font-light  '
			>
				<div className='flex flex-col '>
					<p className='text-center text-xl/8 py-12'>
						Hier ist eine kleine Auswahl von Projekten, die ich während meines
						Kurses gemacht habe. Für mich war die Logik und das Verstehen des
						Codes wichtiger als die grafische Darstellung.
					</p>

					<ProjectBoxMobile
						title='Silent Moon'
						description='Yoga und Meditations App, mit Videos und Audios.'
						text='Abschluss Project'
						img={silentMoon}
					/>

					<ProjectBox
						title='Beer WebApp'
						description='Verschiedene Biersorten wurden über eine API gefetched. Favoriten können markiert und auf einer neuen Seite angezeigt werden. '
						text=''
						img={myGifBeer}
					/>

					<ProjectBoxMobile
						title='Schere - Stein - Papier'
						description='Jeder hat schon mal Schere-Stein-Papier gespielt. '
						text=''
						img={myGifSSP}
					/>

					<ProjectBox
						title='Rezepte App'
						description='Nach einloggen können Rezepte hinzugefügt und angepasst werden. '
						text=''
						img={recipes}
					/>

					<ProjectBoxMobile
						title='.MOV'
						text='Hier können die aktuellen Filmvorschauen angesehen werden.'
						description=''
						img={mov}
					/>
				</div>
			</section>
		</div>
	);
};
