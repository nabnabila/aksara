import "../../App.css"; // Adjust the path if necessary
import "../../style/Crossword.css";
import NavigationBar from "../../components/NavigationBar";
import UtakAtikGathukSandhangan from "../../components/isikuissandhangan/UtakAtikGathukSandhangan";
function IsiKuis3() {
  return (
    <div>
      {/* navigation bar */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* mode */}
      <div>
        <UtakAtikGathukSandhangan />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis3;
