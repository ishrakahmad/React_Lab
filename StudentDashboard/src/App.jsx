import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import StatBadge from './components/StatBadge';
import SearchBar from './components/SearchBar';
import { useEffect, useState } from 'react';

const studentData = [
  {
    name: 'Ishrak',
    id: '101',
    avatar: 'I',
    gpa: 3.8,
    major: 'Computer Science',
    credits: 90,
    courses: [
      {
        name: 'React',
        color: '#2563eb',
      },
      {
        name: 'JavaScript',
        color: '#eab308',
      },
      {
        name: 'Database',
        color: '#16a34a',
      },
    ],
  },

  {
    name: 'Rifat',
    id: '102',
    avatar: 'R',
    gpa: 3.6,
    major: 'Computer Science',
    credits: 87,
    courses: [
      {
        name: 'React',
        color: '#2563eb',
      },
      {
        name: 'Node.js',
        color: '#16a34a',
      },
    ],
  },

  {
    name: 'Polok',
    id: '103',
    avatar: 'P',
    gpa: 3.9,
    major: 'Software Engineering',
    credits: 93,
    courses: [
      {
        name: 'React',
        color: '#2563eb',
      },
      {
        name: 'Python',
        color: '#eab308',
      },
    ],
  },

  {
    name: 'Sabbir',
    id: '104',
    avatar: 'S',
    gpa: 3.7,
    major: 'Computer Science',
    credits: 89,
    courses: [
      {
        name: 'JavaScript',
        color: '#eab308',
      },
      {
        name: 'Node.js',
        color: '#16a34a',
      },
      {
        name: 'Database',
        color: '#16a34a',
      },
    ],
  },
];

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setStudents(studentData);
      setLoading(false);
    }, 1500);
  }, []);
 
  


  function handleFavoriteChange(isFavorite) {
    if (isFavorite) {
      setFavoriteCount((count) => count + 1);
    } else {
      setFavoriteCount((count) => count - 1);
    }
  }

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(query.toLowerCase()) ||
      student.major.toLowerCase().includes(query.toLowerCase())
  );


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

        <SearchBar
          query={query}
          setQuery={setQuery}
        />

        {loading ? (
          <div className="loading">
            Loading students...
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
              {filteredStudents.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  onFavoriteChange={handleFavoriteChange}
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