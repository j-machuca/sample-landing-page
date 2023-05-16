import PropTypes from "prop-types";

const Service = ({ service }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={service.icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{service.title}</h4>
        <p className="service-text">{service.text}</p>
      </div>
    </article>
  );
};

Service.propTypes = {
  service: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  }),
};

export default Service;
