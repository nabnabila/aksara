import "../../App.css"; // Adjust the path if necessary
import "../../style/SoundMatchGame.css";
import NavigationBar from "../../components/NavigationBar";
import SwaraPasanganMurda from "../../components/isikuispasanganmurda/SwaraPasanganMurda";
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
        <SwaraPasanganMurda />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis5;
