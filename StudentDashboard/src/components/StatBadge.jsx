import PropTypes from 'prop-types';

function StatBadge(props) {
  return (
    <div className="stat-badge">
      <span className="stat-label">{props.label}</span>
      <strong className="stat-value">{props.value}</strong>
    </div>
  );
}

StatBadge.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default StatBadge;