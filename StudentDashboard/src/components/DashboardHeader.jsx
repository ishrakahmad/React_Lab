import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function DashboardHeader(props) {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="dashboard-header">
      <div className="header-content">
        <h1>{props.title}</h1>

        <p>{props.tagline}</p>

        <p className="favorite-count">
          Favorites: {props.favoriteCount}
        </p>
      </div>

      <div className="header-actions">
        <nav className="dashboard-nav">
          <a href="#home">Home</a>
          <a href="#students">Students</a>
          <a href="#courses">Courses</a>
        </nav>

        <button
          className="theme-button"
          onClick={toggleTheme}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
    </header>
  );
}

DashboardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  favoriteCount: PropTypes.number.isRequired,
};

export default DashboardHeader;