import Link from '@/components/presets/Link';

const navigation = {
	solutions: [
		{ name: 'Webdesign', href: '/diensten/webdesign' },
		{ name: 'Webontwikkeling', href: '/diensten/webontwikkeling' },
		{ name: 'Optimalisatie', href: '/diensten/optimalisatie' },
		{ name: 'Totaalpakket', href: '/diensten/totaalpakket' },
	],
	support: [
		{ name: 'Over mij', href: '/over-mij' },
		{ name: 'Projecten', href: '/projecten' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Contact', href: '/contact' },
	],
	company: [
		{
			name: 'Website laten maken Arnhem',
			href: '/website-laten-maken-arnhem',
		},
		{
			name: 'Website laten maken Nijmegen',
			href: '/website-laten-maken-nijmegen',
		},
		{
			name: 'Website laten maken Elst',
			href: '/website-laten-maken-elst',
		},
		{
			name: 'Goedkope website laten maken',
			href: '/goedkope-website-laten-maken',
		},
	],
	social: [
		// {
		// 	name: 'Facebook',
		// 	href: '#',
		// 	icon: (props: any) => (
		// 		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
		// 			<path
		// 				fillRule="evenodd"
		// 				d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
		// 				clipRule="evenodd"
		// 			/>
		// 		</svg>
		// 	),
		// },
		{
			name: 'Instagram',
			href: 'https://www.instagram.com/erwinwijnveld/',
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		// {
		// 	name: 'Twitter',
		// 	href: '#',
		// 	icon: (props: any) => (
		// 		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
		// 			<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
		// 		</svg>
		// 	),
		// },
		{
			name: 'GitHub',
			href: 'https://github.com/ErwinWijnveld',
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		// {
		// 	name: 'YouTube',
		// 	href: '#',
		// 	icon: (props: any) => (
		// 		<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
		// 			<path
		// 				fillRule="evenodd"
		// 				d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
		// 				clipRule="evenodd"
		// 			/>
		// 		</svg>
		// 	),
		// },
	],
};

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer
			className="mt-12 bg-zinc-900 md:mx-8 md:rounded-t-4xl"
			aria-labelledby="footer-heading"
		>
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="container pb-8 pt-16 sm:pt-24 lg:pt-32">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div className="space-y-8">
						<svg
							viewBox="0 0 389 287"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-auto"
						>
							<g clipPath="url(#clip0_507_8)">
								<path
									d="M186.65 128.16L220.4 185.49H366.4L385.52 151.34C385.52 151.34 392.02 142.34 385.52 128.16C385.92 128.56 313.52 7.39 313.52 7.39C313.52 7.39 308.69 -3.61 287.52 -4H71.57L0 88.71H126.87L117.11 107L75.23 107.82C75.23 107.82 59 128.56 59.37 142C59.74 155.44 74.82 176.16 74.82 176.16H127.28L137.85 194.87H11.39L81.33 286.77H282.56C282.56 286.77 305.79 286.77 319.62 265.62L344.42 224.96L177.3 224.15L130.12 141.39L176.12 60.68H270.86L308.68 127.77L186.65 128.16Z"
									fill="#ffffff"
								/>
							</g>
							<defs>
								<clipPath id="clip0_507_8">
									<rect
										width="388.39"
										height="290.75"
										fill="white"
										transform="translate(0 -4)"
									/>
								</clipPath>
							</defs>
						</svg>
						<p className="text-sm leading-6 text-gray-300">
							Freelance designer & developer. Wil jij een
							supermoderne website laten bouwen in de regio
							Arnhem, Nijmegen en Elst, neem dan{' '}
							<Link href="/contact">contact</Link> op.
						</p>
						<div className="flex space-x-6">
							{navigation.social.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									target="_blank"
									className="text-gray-500 hover:text-gray-400"
								>
									<span className="sr-only">{item.name}</span>
									<item.icon
										className="h-6 w-6"
										aria-hidden="true"
									/>
								</Link>
							))}
						</div>
					</div>
					<div className="mt-16 grid gap-8 sm:grid-cols-2 xl:col-span-2 xl:mt-0">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold leading-6 text-white">
									Diensten
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.solutions.map((item) => (
										<li key={item.name}>
											<Link
												href={item.href}
												className="text-sm leading-6 text-gray-300 hover:text-white"
											>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="text-sm font-semibold leading-6 text-white">
									Informatief
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.support.map((item) => (
										<li key={item.name}>
											<Link
												href={item.href}
												className="text-sm leading-6 text-gray-300 hover:text-white"
											>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="">
							<div>
								<h3 className="text-sm font-semibold leading-6 text-white">
									Relevant
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.company.map((item) => (
										<li key={item.name}>
											<Link
												href={item.href}
												className="text-sm leading-6 text-gray-300 hover:text-white"
											>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
							{/* <div className="mt-10 md:mt-0">
								<h3 className="text-sm font-semibold leading-6 text-white">
									Legal
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.legal.map((item) => (
										<li key={item.name}>
											<Link
												href={item.href}
												className="text-sm leading-6 text-gray-300 hover:text-white"
											>
												{item.name}
											</Link>
										</li>
									))}
								</ul>
							</div> */}
						</div>
					</div>
				</div>
				<div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
					<p className="text-xs leading-5 text-gray-400">
						&copy; {year} Erwin Wijnveld, alle rechten voorbehouden.
					</p>
				</div>
			</div>
		</footer>
	);
}
