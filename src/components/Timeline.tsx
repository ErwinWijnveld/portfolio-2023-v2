import RightPinkGradient from './RightPinkGradient';

const Timeline = ({ items, title }: any) => {
	return (
		<section className="relative overflow-x-clip">
			<RightPinkGradient className="-bottom-1/2 translate-x-32 lg:-bottom-[175%]" />
			<div className="container  py-32">
				<div className="mb-20 text-center">
					<p className="gradient-text text-lg font-semibold">
						Stappenplan
					</p>
					<h2 className="mt-2">{title}</h2>
				</div>
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
					{items.map((item: any, index: number) => (
						<div key={index}>
							<div className="flex items-center text-sm font-semibold leading-6 text-indigo-600">
								<svg
									viewBox="0 0 4 4"
									className="mr-4 h-1 w-1 flex-none"
									aria-hidden="true"
								>
									<circle
										cx={2}
										cy={2}
										r={2}
										fill="currentColor"
									/>
								</svg>
								Stap {index + 1}
								<div
									className="absolute -ml-2 h-px w-screen -translate-x-full bg-zinc-100/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
									aria-hidden="true"
								/>
							</div>
							<p className="mt-6 text-[17px] font-semibold leading-8 tracking-tight text-white">
								{item.title}
							</p>
							<p className="mt-1 text-sm leading-7 text-zinc-100/80">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Timeline;
