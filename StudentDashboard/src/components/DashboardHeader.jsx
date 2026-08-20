import PropTypes from 'prop-types';

function DashboardHeader(props) {
  return (
    <header className="dashboard-header">
      <div className="header-content">
        <h1>{props.title}</h1>
        <p>{props.tagline}</p>

        <p className="favorite-count">
          Favorites: {props.favoriteCount}
        </p>
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
  favoriteCount: PropTypes.number.isRequired,
};

export default DashboardHeader;