import "../../App.css"; // Adjust the path if necessary
import "../../style/ArrangeWords.css";
import NavigationBar from "../../components/NavigationBar";
import NgaturUkaraPasanganMurda from "../../components/isikuispasanganmurda/NgaturUkaraPasanganMurda";
function IsiKuis2D() {
  return (
    <div>
      {/* navigation bar */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* mode */}
      <div>
        <NgaturUkaraPasanganMurda />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis2D;
