import PropTypes from 'prop-types';
import CourseTag from './CourseTag';
import StatBadge from './StatBadge';

function StudentCard(props) {
  return (
    <article className="student-card">
      <div className="student-avatar">
        {props.student.avatar}
      </div>

      <div className="student-info">
        <h2>{props.student.name}</h2>

        <p className="student-major">
          {props.student.major}
        </p>

        <p className="student-id">
          Student ID: {props.student.id}
        </p>

        <div className="student-stats">
          <StatBadge
            label="GPA"
            value={props.student.gpa}
          />

          <StatBadge
            label="Credits"
            value={props.student.credits}
          />
        </div>

        <div className="course-list">
          {props.student.courses.map((course) => (
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
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    gpa: PropTypes.number.isRequired,
    major: PropTypes.string.isRequired,
    credits: PropTypes.number.isRequired,
    courses: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default StudentCard;