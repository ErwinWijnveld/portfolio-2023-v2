import { reversedProjecten } from '@/data/projecten';
import LeftOrangeGradient from './LeftOrangeGradient';
import ProjectCard from './ProjectCard';
import RightPinkGradient from './RightPinkGradient';

const CardMasonry = () => {
	return (
		<section className="relative overflow-hidden">
			<RightPinkGradient />
			<LeftOrangeGradient />
			<div className="container pb-32 pt-48">
				<div className="text-center">
					<p className="gradient-text text-lg font-semibold">
						Projecten
					</p>
					<h1 className="monument mb-4 mt-2">
						Uitgelichte projecten
					</h1>
					<p className="">
						Mijn projecten uitgelischt, wil jij een website die er
						ook zo uit ziet?<br></br>Neem dan contact op!
					</p>
				</div>
			</div>
			<div className="container gap-x-6 md:columns-2 lg:columns-3">
				{reversedProjecten.map((project, index) => (
					<ProjectCard {...project} key={index} />
				))}
			</div>
		</section>
	);
};
export default CardMasonry;
