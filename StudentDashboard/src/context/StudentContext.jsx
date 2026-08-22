import { createContext, useEffect, useState } from 'react';

export const StudentContext = createContext();

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

function StudentProvider(props) {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem('students');

    if (savedStudents) {
      return JSON.parse(savedStudents);
    }

    return [];
  });

  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (students.length > 0) {
      localStorage.setItem(
        'students',
        JSON.stringify(students)
      );
    }
  }, [students]);

  function loadStudents() {
    if (students.length === 0) {
      setStudents(studentData);
    }
  }

  function addStudent(student) {
    setStudents((currentStudents) => [
      ...currentStudents,
      student,
    ]);
  }

  function removeStudent(studentId) {
    setStudents((currentStudents) =>
      currentStudents.filter(
        (student) => student.id !== studentId
      )
    );

    setFavorites((currentFavorites) =>
      currentFavorites.filter(
        (id) => id !== studentId
      )
    );
  }

  function handleFavoriteChange(studentId) {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(studentId)) {
        return currentFavorites.filter(
          (id) => id !== studentId
        );
      }

      return [...currentFavorites, studentId];
    });
  }

  const favoriteCount = favorites.length;

  return (
    <StudentContext.Provider
      value={{
        students,
        setStudents,
        loadStudents,
        addStudent,
        removeStudent,

        query,
        setQuery,

        sortBy,
        setSortBy,

        favorites,
        favoriteCount,
        handleFavoriteChange,
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
}

export default StudentProvider;