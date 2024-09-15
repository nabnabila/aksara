import "../../App.css";
import "../../style/ArrangeWords.css";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import NgaturUkaraSandhangan from "../../components/isikuissandhangan/NgaturUkaraSandhangan";
function IsiKuis2E() {
  return (
    <div>
      {/* Navigation Bar Container */}
      <div className="navbar-container">
        {/* Back Arrow */}
        <Link to="/sandhangan/kuis5" className="back-arrow-navbar">
          <i className="bi bi-arrow-left"></i>
        </Link>

        {/* Navigation Bar */}
        <div className="navbar-center">
          <NavigationBar />
        </div>
      </div>
      {/* mode */}
      <div>
        <NgaturUkaraSandhangan />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis2E;
