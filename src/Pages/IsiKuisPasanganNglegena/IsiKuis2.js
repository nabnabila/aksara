import "../../App.css"; // Adjust the path if necessary
import "../../style/ArrangeWords.css";
import NavigationBar from "../../components/NavigationBar";
import NgaturUkaraPasanganNglegena from "../../components/isikuispasangannglegena/NgaturUkaraPasanganNglegena";
function IsiKuis2B() {
  return (
    <div>
      {/* navigation bar */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* mode */}
      <div>
        <NgaturUkaraPasanganNglegena />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis2B;
