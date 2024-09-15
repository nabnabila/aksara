import "../../App.css"; // Adjust the path if necessary
import "../../style/SoundMatchGame.css";
import NavigationBar from "../../components/NavigationBar";
import SwaraMurda from "../../components/isikuismurda/SwaraMurda";
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
        <SwaraMurda />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis5;
