import PropTypes from 'prop-types';

function SortControls(props) {
  return (
    <div className="sort-controls">
      <select
        value={props.sortBy}
        onChange={(event) => props.setSortBy(event.target.value)}
      >
        <option value="default">Default</option>
        <option value="name">Name A-Z</option>
        <option value="gpa">GPA High → Low</option>
      </select>
    </div>
  );
}

SortControls.propTypes = {
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
};

export default SortControls;