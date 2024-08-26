import "../../App.css"; // Adjust the path if necessary
import "../../style/SoundMatchGame.css";
import NavigationBar from "../../components/NavigationBar";
import SwaraSandhangan from "../../components/isikuissandhangan/SwaraSandhangan";
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
        <SwaraSandhangan />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis5;
