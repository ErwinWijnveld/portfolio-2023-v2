import { faqs } from '@/data/faqs';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';
import LeftOrangeGradient from './LeftOrangeGradient';

export default function FAQ({ ids }: { ids?: number[] }) {
	let posts = faqs;
	if (ids) {
		posts = ids.map((id) => faqs[id - 1]);
	} else {
		posts = faqs.slice(0, 5);
	}

	// faq in json serp format sting
	// {
	//     "@type": "Question",
	//     "name": "How long does it take to process a refund?",
	//     "acceptedAnswer": {
	//       "@type": "Answer",
	//       "text": "We will reimburse you for returned items in the same way you paid for them. For example, any amounts deducted from a gift card will be credited back to a gift card. For returns by mail, once we receive your return, we will process it within 4–5 business days. It may take up to 7 days after we process the return to reflect in your account, depending on your financial institution's processing time."
	//     }
	//   }

	const jsonString = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: [
			...posts.map((post) => ({
				'@type': 'Question',
				name: post.question,
				acceptedAnswer: {
					'@type': 'Answer',
					text: post.answer,
				},
			})),
		],
	});

	return (
		<div className="relative overflow-x-clip">
			{/* faq in serps  */}
			<Head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: jsonString }}
				/>
			</Head>
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
												<h3 className="text-sm font-semibold leading-7 xs:text-base">
													{faq.question}
												</h3>
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
