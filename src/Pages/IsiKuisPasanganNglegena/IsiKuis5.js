import "../../App.css";
import "../../style/SoundMatchGame.css";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import SwaraPasanganNglegena from "../../components/isikuispasangannglegena/SwaraPasanganNglegena";
function IsiKuis5() {
  return (
    <div>
      {/* Navigation Bar Container */}
      <div className="navbar-container">
        {/* Back Arrow */}
        <Link to="/pasanganaksaranglegena/kuis2" className="back-arrow-navbar">
          <i className="bi bi-arrow-left"></i>
        </Link>

        {/* Navigation Bar */}
        <div className="navbar-center">
          <NavigationBar />
        </div>
      </div>
      {/* mode */}
      <div>
        <SwaraPasanganNglegena />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis5;
