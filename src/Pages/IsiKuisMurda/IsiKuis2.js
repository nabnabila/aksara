import "../../App.css"; // Adjust the path if necessary
import "../../style/ArrangeWords.css";
import NavigationBar from "../../components/NavigationBar";
import NgaturUkaraMurda from "../../components/isikuismurda/NgaturUkaraMurda";
function IsiKuis2C() {
  return (
    <div>
      {/* navigation bar */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* mode */}
      <div>
        <NgaturUkaraMurda />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis2C;
