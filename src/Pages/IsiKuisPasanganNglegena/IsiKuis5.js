import "../../App.css"; // Adjust the path if necessary
import "../../style/SoundMatchGame.css";
import NavigationBar from "../../components/NavigationBar";
import SwaraPasanganNglegena from "../../components/isikuispasangannglegena/SwaraPasanganNglegena";
function IsiKuis5() {
  return (
    <div>
      {/* navigation bar */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* mode */}
      <div>
        <SwaraPasanganNglegena />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis5;
