import UtakAtikGathukNglegena from "../../components/isikuisnglegena/UtakAtikGathukNglegena";
import "../../App.css"; // Adjust the path if necessary
import "../../style/LandingPage.css";
import NavigationBar from "../../components/NavigationBar";
function IsiKuis3A() {
  return (
    <div>
      {/* navigation bar */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* mode */}
      <div>
        <UtakAtikGathukNglegena />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis3A;
