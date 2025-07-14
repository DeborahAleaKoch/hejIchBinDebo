import { ImpressumMap } from "../components/ImpressumMap";

export const Impressum = ({}) => {
	return (
		<div className='md:mx-40 mx-10 text-justify py-5 font-light'>
			<h1 className='text-4xl mb-8 font-extralight'>Impressum</h1>
			<section className='flex flex-col gap-7'>
				<p>Angaben gemäß § 5 DDG</p>
				<article>
					<p>Deborah Alea Koch, Paulstraße 9, 44803 Bochum</p>
					<p>Email: hej(dot)ichbindebo(at)gmail(dot)com</p>
					<p>Internetseite: hhtps://www.hejichbindebo.de</p>
				</article>
				<p>
					Für den Inhalt nach §55 Abs. 2 RSTV ist verantwortlich: Deborah Alea
					Koch
				</p>

				<ImpressumMap />
				{/*
				<ImpressumArticle
					title='Haftung für Inhalte'
					text='Die Inhalte meiner Seite wurde mit größter Sorgfalt erstellt. Für
						die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich
						jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß §
						7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den
						allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG bin ich
						als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
						gespeicherte fremde Informationen zu überwachen oder nach Umständen
						zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
						Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
						Informationen nach den allgemeinen Gesetzen bleiben hiervon
						unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
						Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
						Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese
						Inhalte umgehend entfernen.'
				/>
				<ImpressumArticle
					title='Haftung für Links'
					text='Mein Angebot enthält Links zu externen Webseiten Dritter, auf deren
						Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden
						Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
						Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
						verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
						Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
						Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
						permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
						ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
						Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links
						umgehend entfernen.'
				/>
				<ImpressumArticle
					title='Urheberrecht'
					text='Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
						diesen Seiten unterliegen dem deutschen Urheberrecht. Die
						Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
						Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
						schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
						Downloads und Kopien dieser Seite sind nur für den privaten, nicht
						kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
						Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
						Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
						gekennzeichnet. Sollten Sie trotzdem auf eine
						Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
						entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
						werden wir derartige Inhalte umgehend entfernen.'
				/>
				<ImpressumArticle
					title='Datenschutz'
					text='Die Nutzung meiner Webseite ist in der Regel ohne Angabe
						personenbezogener Daten möglich. Soweit auf meiner Seiten
						personenbezogene Daten (beispielsweise Name, Anschrift oder
						eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
						auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
						Zustimmung nicht an Dritte weitergegeben. Ich weise darauf hin, dass
						die Datenübertragung im Internet (z.B. bei der Kommunikation per
						E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der
						Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung
						von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten
						durch Dritte zur Übersendung von nicht ausdrücklich angeforderter
						Werbung und Informationsmaterialien wird hiermit ausdrücklich
						widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich
						rechtliche Schritte im Falle der unverlangten Zusendung von
						Werbeinformationen, etwa durch Spam-Mails, vor.'
				/> */}

				<p>
					Erstellt mit{" "}
					<a
						href='https://impressum-generator.de'
						rel='dofollow'
						className='italic'
					>
						Impressum-Generator.de
					</a>
					, dem Tool für Impressum und{" "}
					<a
						href='https://impressum-generator.de/datenschutz-generator'
						rel='dofollow'
						className='italic'
					>
						Datenschutz-Erklärung
					</a>
					. Nach einer Vorlage der{" "}
					<a
						href='https://www.kanzlei-hasselbach.de/'
						rel='dofollow'
						className='italic'
					>
						Kanzlei Hasselbach
					</a>
					.
				</p>
			</section>
		</div>
	);
};
