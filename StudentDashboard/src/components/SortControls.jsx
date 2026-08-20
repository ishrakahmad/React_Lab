import { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

function SortControls() {
  const { sortBy, setSortBy } = useContext(StudentContext);

  return (
    <div className="sort-controls">
      <select
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
      >
        <option value="default">Default</option>
        <option value="name">Name A-Z</option>
        <option value="gpa">GPA High → Low</option>
      </select>
    </div>
  );
}

export default SortControls;