import PropTypes from 'prop-types';

function DashboardHeader({ title, tagline }) {
  return (
    <header className="dashboard-header">
      <div className="header-content">
        <h1>{title}</h1>
        <p>{tagline}</p>
      </div>

      <nav className="dashboard-nav">
        <a href="#home">Home</a>
        <a href="#students">Students</a>
        <a href="#courses">Courses</a>
      </nav>
    </header>
  );
}

DashboardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
};

export default DashboardHeader;