import "../../App.css"; // Adjust the path if necessary
import "../../style/ArrangeWords.css";
import NavigationBar from "../../components/NavigationBar";
import NgaturUkaraNglegena from "../../components/isikuisnglegena/NgaturUkaraNglegena";
function IsiKuis2A() {
  return (
    <div>
      {/* navigation bar */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* mode */}
      <div>
        <NgaturUkaraNglegena />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis2A;
