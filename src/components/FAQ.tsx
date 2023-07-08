import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import LeftOrangeGradient from './LeftOrangeGradient';
import RightPinkGradient from './RightPinkGradient';

const faqs = [
	{
		question:
			'Wat biedt een professionele website laten maken in de regio Arnhem, Nijmegen en Elst?',
		answer: 'Het laten maken van een professionele website in de regio Arnhem, Nijmegen en Elst biedt diverse voordelen:',
		subpoints: [
			'Online zichtbaarheid - Een professionele website vergroot de online zichtbaarheid van jouw bedrijf in de specifieke regio, waardoor lokale potentiële klanten je gemakkelijker kunnen vinden.',
			'Regionale focus - Een professionele website kan specifiek gericht worden op de lokale markt, met relevante informatie en inhoud die aansluit bij de behoeften en voorkeuren van de doelgroep in de regio.',
			'Concurrentievoordeel - Met een professionele website in de regio kun je je onderscheiden van concurrenten en lokale klanten aantrekken die op zoek zijn naar producten of diensten in Arnhem, Nijmegen en Elst.',
			'Contactmogelijkheden - Een professionele website kan contactmogelijkheden bieden die specifiek gericht zijn op de regio, zoals een lokaal telefoonnummer of een fysiek adres, waardoor potentiële klanten gemakkelijk contact kunnen opnemen.',
			'Regionale branding - Een professionele website kan bijdragen aan het opbouwen van een sterke regionale merkidentiteit en kan lokale klanten aantrekken die waarde hechten aan het ondersteunen van lokale bedrijven.',
		],
	},
	{
		question:
			'Hoe lang duurt het gemiddeld om een website te laten bouwen?',
		answer: 'De tijd die nodig is om een website te laten bouwen is afhankelijk van verschillende factoren, zoals de omvang en complexiteit van de website, de gewenste functionaliteiten en het beschikbaar stellen van content. Over het algemeen varieert de duur van enkele weken tot enkele maanden. Een grondige planning en goede communicatie tussen jou en het webontwikkelingsteam kunnen helpen om het proces efficiënt en binnen de gestelde tijdlijnen te laten verlopen. </br></br> Er zijn ook mogelijkheden om een website met spoed te laten maken, waarbij de website binnen enkele dagen wordt opgeleverd. Dit is echter alleen mogelijk voor eenvoudige websites met beperkte functionaliteiten en content.',
	},
	{
		question: 'Wat zijn de kosten voor het laten bouwen van een website?',
		answer: 'De kosten voor het laten bouwen van een website kunnen variëren afhankelijk van verschillende factoren, zoals de functionaliteiten, het ontwerp, de complexiteit en de ondersteuning die je nodig hebt. </br></br> Neem gerust <a href="/contact">contact</a> op om een offerte op maat te ontvangen op basis van jouw specifieke vereisten.',
	},
	{
		question:
			'Hoe kan ik mijn website laten optimaliseren voor zoekresultaten in de regio Arnhem, Nijmegen en Elst?',
		answer: 'Om je website te optimaliseren voor zoekresultaten in de regio Arnhem, Nijmegen en Elst, neem ik de volgende stappen:',
		subpoints: [
			'Trefwoordenonderzoek - Identificeer relevante zoekwoorden die vaak worden gebruikt door potentiële klanten in de regio.',
			'Inhoudsoptimalisatie - Optimaliseer de inhoud van je website met de gekozen zoekwoorden, zorg voor kwalitatieve en relevante content.',
			'Lokale vermeldingen - Registreer je bedrijf op lokale bedrijvengidsen en zorg voor consistente vermeldingen met de juiste adres- en contactgegevens.',
			'Linkbuilding - Werk aan het verkrijgen van relevante links van andere lokale websites en directories om de autoriteit van je website te vergroten.',
			'Responsief ontwerp - Zorg ervoor dat je website goed werkt en toegankelijk is op verschillende apparaten, waaronder mobiele apparaten, aangezien dit belangrijk is voor lokale zoekresultaten.',
		],
	},
	{
		question: 'Welke ondersteuning bied je na het bouwen van een website?',
		answer: 'Na het bouwen van een website bied ik ondersteuning op verschillende gebieden:',
		subpoints: [
			'Onderhoud - Wij zorgen voor regelmatig onderhoud en updates om ervoor te zorgen dat je website optimaal blijft werken.',
			'Beveiliging - Wij implementeren beveiligingsmaatregelen om je website te beschermen tegen mogelijke bedreigingen en aanvallen.',
			'Technische ondersteuning - Ik sta klaar om technische problemen op te lossen en je te helpen bij vragen of uitdagingen met betrekking tot je website.',
			'Contentupdates - Indien gewenst, kunnen wij je ondersteunen bij het bijwerken en toevoegen van nieuwe content op je website.',
			'Analyse en rapportage - Wij kunnen je voorzien van periodieke analyse en rapportage om inzicht te krijgen in de prestaties van je website en aanbevelingen te doen voor verdere optimalisatie.',
		],
	},
];
export default function FAQ() {
	return (
		<div className="relative overflow-x-clip">
			<LeftOrangeGradient />
			<div className="container relative z-10 py-12 sm:py-20 lg:py-24">
				<div className="mx-auto max-w-4xl divide-y divide-white/10">
					<h2 className="text-center">Veelgestelde vragen</h2>
					<dl className="mt-10 space-y-6 divide-y divide-white/10">
						{faqs.map((faq) => (
							<Disclosure
								as="div"
								key={faq.question}
								className="pt-6"
							>
								{({ open }) => (
									<>
										<dt>
											<Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
												<span className="text-base font-semibold leading-7">
													{faq.question}
												</span>
												<span className="ml-6 flex h-7 items-center">
													{open ? (
														<MinusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													) : (
														<PlusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													)}
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel
											as="dd"
											className="mt-2 pr-12"
										>
											<p className="text-base leading-7 text-gray-300">
												<span
													className="my-4 block"
													dangerouslySetInnerHTML={{
														__html: faq.answer,
													}}
												></span>
												<ol>
													{faq.subpoints?.map(
														(subpoint) => (
															<li key={subpoint}>
																{subpoint}
															</li>
														)
													)}
												</ol>
											</p>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
