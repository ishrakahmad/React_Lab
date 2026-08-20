import { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';

function StudentForm() {
  const {
    addStudent,
    students,
  } = useContext(StudentContext);

  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [major, setMajor] = useState('');
  const [gpa, setGpa] = useState('');
  const [courses, setCourses] = useState('');

  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Full Name is required';
    }

    if (!studentId.trim()) {
      newErrors.studentId = 'Student ID is required';
    } else if (!/^\d+$/.test(studentId)) {
      newErrors.studentId = 'Student ID must be numeric';
    } else if (
      students.some((student) => student.id === studentId)
    ) {
      newErrors.studentId = 'Student ID already exists';
    }

    if (!major.trim()) {
      newErrors.major = 'Major is required';
    }

    if (!gpa) {
      newErrors.gpa = 'GPA is required';
    } else if (Number(gpa) < 0 || Number(gpa) > 4) {
      newErrors.gpa = 'GPA must be between 0 and 4';
    }

    if (!courses.trim()) {
      newErrors.courses = 'Courses are required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const courseList = courses
        .split(',')
        .map((course) => course.trim())
        .filter((course) => course !== '');

      addStudent({
        name: name.trim(),
        id: studentId.trim(),
        avatar: name.trim().charAt(0).toUpperCase(),
        gpa: Number(gpa),
        major: major.trim(),
        credits: 0,
        courses: courseList.map((course, index) => ({
          name: course,
          color: index % 2 === 0 ? '#2563eb' : '#16a34a',
        })),
      });

      setName('');
      setStudentId('');
      setMajor('');
      setGpa('');
      setCourses('');
      setErrors({});
    }
  }

  return (
    <form
      className="student-form"
      onSubmit={handleSubmit}
    >
      <h2>Add Student</h2>

      <div className="form-group">
        <label>Full Name</label>

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter full name"
        />

        {errors.name && (
          <p className="form-error">
            {errors.name}
          </p>
        )}
      </div>

      <div className="form-group">
        <label>Student ID</label>

        <input
          type="text"
          value={studentId}
          onChange={(event) => setStudentId(event.target.value)}
          placeholder="Enter student ID"
        />

        {errors.studentId && (
          <p className="form-error">
            {errors.studentId}
          </p>
        )}
      </div>

      <div className="form-group">
        <label>Major</label>

        <input
          type="text"
          value={major}
          onChange={(event) => setMajor(event.target.value)}
          placeholder="Enter major"
        />

        {errors.major && (
          <p className="form-error">
            {errors.major}
          </p>
        )}
      </div>

      <div className="form-group">
        <label>GPA</label>

        <input
          type="number"
          step="0.1"
          value={gpa}
          onChange={(event) => setGpa(event.target.value)}
          placeholder="Enter GPA"
        />

        {errors.gpa && (
          <p className="form-error">
            {errors.gpa}
          </p>
        )}
      </div>

      <div className="form-group">
        <label>Courses</label>

        <input
          type="text"
          value={courses}
          onChange={(event) => setCourses(event.target.value)}
          placeholder="React, JavaScript, Database"
        />

        {errors.courses && (
          <p className="form-error">
            {errors.courses}
          </p>
        )}
      </div>

      <button type="submit">
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;