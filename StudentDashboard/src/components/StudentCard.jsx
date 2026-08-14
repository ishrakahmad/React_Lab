import PropTypes from 'prop-types';
import CourseTag from './CourseTag';
import StatBadge from './StatBadge';

function StudentCard({
  name,
  id,
  avatar,
  gpa,
  major,
  courses,
}) {
  return (
    <article className="student-card">
      <div className="student-avatar">
     {avatar}
     </div>

      <div className="student-info">
        <h2>{name}</h2>

        <p className="student-major">{major}</p>

        <p className="student-id">Student ID: {id}</p>

        <div className="student-stats">
          <StatBadge label="GPA" value={gpa} />
          <StatBadge label="Credits" value={90} />
        </div>

        <div className="course-list">
          {courses.map((course) => (
            <CourseTag
              key={course.name}
              courseName={course.name}
              color={course.color}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

StudentCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  gpa: PropTypes.number.isRequired,
  major: PropTypes.string.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StudentCard;