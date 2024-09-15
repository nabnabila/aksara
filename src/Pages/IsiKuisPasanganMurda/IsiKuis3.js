import "../../App.css"; // Adjust the path if necessary
import "../../style/Crossword.css";
import NavigationBar from "../../components/NavigationBar";
import UtakAtikGathukPasanganMurda from "../../components/isikuispasanganmurda/UtakAtikGathukPasanganMurda";
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
        <UtakAtikGathukPasanganMurda />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis3;
