import "../../App.css"; // Adjust the path if necessary
import "../../style/ArrangeWords.css";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import NgaturUkaraNglegena from "../../components/isikuisnglegena/NgaturUkaraNglegena";
function IsiKuis2A() {
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
        <NgaturUkaraNglegena />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis2A;
