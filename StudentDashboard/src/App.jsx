import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import StatBadge from './components/StatBadge';
import SearchBar from './components/SearchBar';
import SortControls from './components/SortControls';
import StudentForm from './components/StudentForm';
import { useContext, useEffect, useState } from 'react';
import { StudentContext } from './context/StudentContext';

function App() {
  const {
    students,
    query,
    sortBy,
    favoriteCount,
  } = useContext(StudentContext);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filteredStudents = students.filter(
    (student) =>
      student.name
        .toLowerCase()
        .includes(query.toLowerCase()) ||
      student.major
        .toLowerCase()
        .includes(query.toLowerCase())
  );

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === 'gpa') {
      return b.gpa - a.gpa;
    }

    return 0;
  });

  useEffect(() => {
    document.title = `Dashboard — ${filteredStudents.length} Students`;
  }, [filteredStudents.length]);

  return (
    <>
      <DashboardHeader
        title="Student Dashboard"
        tagline="Manage and view student information"
        favoriteCount={favoriteCount}
      />

      <main className="dashboard-container">

        <StudentForm />

        <SearchBar />

        <SortControls />

        {loading ? (
          <div className="loading">
            <div className="loading-spinner"></div>
            <p>Loading students...</p>
          </div>
        ) : (
          <>
            <section className="dashboard-stats">
              <StatBadge
                label="Total Students"
                value={students.length}
              />

              <StatBadge
                label="Average GPA"
                value="3.75"
              />
            </section>

            <section className="student-grid">
              {sortedStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                />
              ))}
            </section>
          </>
        )}

      </main>
    </>
  );
}

export default App;