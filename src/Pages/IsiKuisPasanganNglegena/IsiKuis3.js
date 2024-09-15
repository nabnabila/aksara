import "../../App.css"; // Adjust the path if necessary
import "../../style/Crossword.css";
import NavigationBar from "../../components/NavigationBar";
import UtakAtikGathukPasanganNglegena from "../../components/isikuispasangannglegena/UtakAtikGathukPasanganNglegena";
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
        <UtakAtikGathukPasanganNglegena />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis3;
