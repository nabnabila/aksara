import SwaraNglegena from "../../components/isikuisnglegena/SwaraNglegena";
import "../../App.css"; // Adjust the path if necessary
import "../../style/SoundMatchGame.css";
import NavigationBar from "../../components/NavigationBar";
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
        <SwaraNglegena />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis5;
