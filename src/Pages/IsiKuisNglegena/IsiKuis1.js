import "../../App.css"; // Adjust the path if necessary
import "../../style/WordSearch.css";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import NggolekiTembang from "../../components/isikuisnglegena/NggolekiTembangNglegena";
function IsiKuis1A() {
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

      {/* Mode */}
      <div>
        <NggolekiTembang />
      </div>
    </div>
  );
}

export default IsiKuis1A;
