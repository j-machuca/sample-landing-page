import Title from "./Title.component";

import { tours } from "../utils/data";

const getImgUrl = (image) => {
	return new URL(`../assets/images/${image}`, import.meta.url).href;
};

const Tours = () => {
	return (
		<section className="section" id="tours">
			<Title title="featured" subTitle="tours" />

			<div className="section-center featured-center">
				{tours.map((tour, i) => {
					return (
						<article key={i} className="tour-card">
							<div className="tour-img-container">
								<img src={getImgUrl(tour.image)} className="tour-img" alt="" />
								<p className="tour-date">{tour.date}</p>
							</div>
							<div className="tour-info">
								<div className="tour-title">
									<h4>{tour.title}</h4>
								</div>
								<p>{tour.info}</p>
								<div className="tour-footer">
									<p>
										<span>
											<i className={tour.icon}></i>
										</span>{" "}
										{tour.location}
									</p>
									<p>{tour.duration} days</p>
									<p>from ${tour.cost}</p>
								</div>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Tours;
