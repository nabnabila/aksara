import UtakAtikGathukNglegena from "../../components/isikuisnglegena/UtakAtikGathukNglegena";
import "../../App.css"; // Adjust the path if necessary
import "../../style/Crossword.css";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
function IsiKuis3A() {
  return (
    <div>
      {/* Navigation Bar Container */}
      <div className="navbar-container">
        {/* Back Arrow */}
        <Link to="/aksaranglegena/kuis1" className="back-arrow-navbar">
          <i className="bi bi-arrow-left"></i>
        </Link>

        {/* Navigation Bar */}
        <div className="navbar-center">
          <NavigationBar />
        </div>
      </div>

      {/* mode */}
      <div>
        <UtakAtikGathukNglegena />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis3A;
