import PropTypes from "prop-types";

const Title = ({ title, subTitle }) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default Title;
