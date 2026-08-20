import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

function SearchBar() {
  const { query, setQuery } = useContext(StudentContext);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name or major..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;