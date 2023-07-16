import Link from '@/components/presets/Link';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Button from './Button';

export default function DoubleText({ topTitle, title, left, right }: any) {
	return (
		<div className="overflow-hidden px-6 py-16 lg:px-8 xl:py-20">
			<div className="mx-auto max-w-max lg:max-w-7xl">
				<div className="relative z-10 mb-8 md:mb-2 md:px-6">
					<div className="max-w-prose text-base lg:max-w-none">
						<h2 className="mt-2 text-white ">
							<span className="gradient-text">{topTitle}</span>
							<br></br>
							{title}
						</h2>
					</div>
				</div>
				<div className="relative [&_p]:mb-6">
					<div className="relative md:p-6">
						<div className="lg:grid lg:grid-cols-2 lg:gap-6">
							<div
								className=" basecolor lg:max-w-none"
								dangerouslySetInnerHTML={{ __html: left }}
							></div>
							<div
								className=" basecolor mt-6 lg:mt-0"
								dangerouslySetInnerHTML={{ __html: right }}
							></div>
						</div>
						<div className="mt-8 inline-flex rounded-md shadow">
							<Button
								as={Link}
								href="/contact"
								className="group flex w-max items-center bg-white !px-4 font-semibold text-black lg:!px-12"
							>
								Neem contact op
								<ArrowRightCircleIcon className="ml-4 h-6 w-6 transition group-hover:translate-x-2" />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
