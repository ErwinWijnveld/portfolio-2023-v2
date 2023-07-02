import RightPinkGradient from './RightPinkGradient';

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Newsletter() {
	return (
		<div className="relative py-8 sm:py-12">
			<RightPinkGradient />

			<div className="container">
				<div className="relative isolate overflow-hidden bg-zinc-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
					<h2 className="mx-auto mb-3 max-w-2xl text-center">
						Laat mij contact met je opnemen
					</h2>
					<p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
						Laat je e-mailadres achter en ik neem zo snel mogelijk
						contact met je op, zodat we samen je wensen kunnen
						bespreken.
					</p>
					<form className="mx-auto mt-10 flex max-w-md gap-x-4">
						<label htmlFor="email-address" className="sr-only">
							Email address
						</label>
						<input
							id="email-address"
							name="email"
							type="email"
							autoComplete="email"
							required
							className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
							placeholder="Voor hier je e-mailadres in"
						/>
						<button
							type="submit"
							className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
						>
							Verstuur
						</button>
					</form>
					<svg
						viewBox="0 0 1024 1024"
						className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
						aria-hidden="true"
					>
						<circle
							cx={512}
							cy={512}
							r={512}
							fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
							fillOpacity="0.7"
						/>
						<defs>
							<radialGradient
								id="759c1415-0410-454c-8f7c-9a820de03641"
								cx={0}
								cy={0}
								r={1}
								gradientUnits="userSpaceOnUse"
								gradientTransform="translate(512 512) rotate(90) scale(512)"
							>
								<stop stopColor="#FFBB00" />
								<stop
									offset={1}
									stopColor="#FF29A8"
									stopOpacity={0}
								/>
							</radialGradient>
						</defs>
					</svg>
				</div>
			</div>
		</div>
	);
}
