import { faqs } from '@/data/faqs';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import LeftOrangeGradient from './LeftOrangeGradient';

export default function FAQ({ ids }: { ids?: number[] }) {
	let posts = faqs;
	if (ids) {
		posts = ids.map((id) => faqs[id - 1]);
	}

	return (
		<div className="relative overflow-x-clip">
			<LeftOrangeGradient />
			<div className="container relative z-10 py-12 sm:py-20 lg:py-24">
				<div className="mx-auto max-w-4xl divide-y divide-white/10">
					<h2 className="text-center">Veelgestelde vragen</h2>
					<dl className="mt-10 space-y-6 divide-y divide-white/10">
						{posts.map((faq) => (
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
											<div
												className="hidden"
												dangerouslySetInnerHTML={{
													__html: faq.answer,
												}}
											></div>
										</dt>
										<Disclosure.Panel
											as="dd"
											className="mt-2 pr-12"
										>
											<div
												className="styled-text text-base leading-7 text-gray-300 [&_p]:mb-4"
												dangerouslySetInnerHTML={{
													__html: faq.answer,
												}}
											></div>
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
