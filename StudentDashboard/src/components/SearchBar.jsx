import PropTypes from 'prop-types';

function SearchBar(props) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name or major..."
        value={props.query}
        onChange={(event) => props.setQuery(event.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default SearchBar;