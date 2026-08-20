import { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';

function StudentForm() {
  const { addStudent } = useContext(StudentContext);

  const [name, setName] = useState('');
  const [major, setMajor] = useState('');
  const [gpa, setGpa] = useState('');

  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!major.trim()) {
      newErrors.major = 'Major is required';
    }

    if (!gpa) {
      newErrors.gpa = 'GPA is required';
    } else if (Number(gpa) < 0 || Number(gpa) > 4) {
      newErrors.gpa = 'GPA must be between 0 and 4';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      addStudent({
        name: name.trim(),
        id: Date.now().toString(),
        avatar: name.trim().charAt(0).toUpperCase(),
        gpa: Number(gpa),
        major: major.trim(),
        credits: 0,
        courses: [],
      });

      setName('');
      setMajor('');
      setGpa('');
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
        <label>Name</label>

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter student name"
        />

        {errors.name && (
          <p className="form-error">
            {errors.name}
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

      <button type="submit">
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;