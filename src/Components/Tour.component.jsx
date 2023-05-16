import PropTypes from "prop-types";

const getImgUrl = (image) => {
  return new URL(`../assets/images/${image}`, import.meta.url).href;
};

const Tour = ({ tour }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img
          src={getImgUrl(tour.image)}
          className="tour-img"
          alt={tour.title}
        />
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
};

Tour.propTypes = {
  tour: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    icon: PropTypes.string,
    info: PropTypes.string,
    location: PropTypes.string,
    duration: PropTypes.string,
    cost: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default Tour;
