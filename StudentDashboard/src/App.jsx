import DashboardHeader from './components/DashboardHeader';
import StudentCard from './components/StudentCard';
import StatBadge from './components/StatBadge';

const students = [
  {
    name: 'Ishrak',
    id: '101',
    avatar: 'I',
    gpa: 3.8,
    major: 'Computer Science',
    courses: [
      { name: 'React', color: '#2563eb' },
      { name: 'JavaScript', color: '#eab308' },
      { name: 'Database', color: '#16a34a' },
    ],
  },
  {
    name: 'Rifat',
    id: '102',
    avatar: 'R',
    gpa: 3.6,
    major: 'Computer Science',
    courses: [
      { name: 'React', color: '#2563eb' },
      { name: 'Node.js', color: '#16a34a' },
    ],
  },
  {
    name: 'Polok',
    id: '103',
    avatar: 'P',
    gpa: 3.9,
    major: 'Software Engineering',
    courses: [
      { name: 'React', color: '#2563eb' },
      { name: 'Python', color: '#eab308' },
    ],
  },
  {
    name: 'Sabbir',
    id: '104',
    avatar: 'S',
    gpa: 3.7,
    major: 'Computer Science',
    courses: [
      { name: 'JavaScript', color: '#eab308' },
      { name: 'Database', color: '#16a34a' },
    ],
  },
];

function App() {
  return (
    <>
      <DashboardHeader
        title="Student Dashboard"
        tagline="Manage and view student information"
      />

      <main className="dashboard-container">
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
          {students.map((student) => (
            <StudentCard
              key={student.id}
              {...student}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;