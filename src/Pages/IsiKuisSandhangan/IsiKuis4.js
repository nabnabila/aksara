import "../../App.css"; // Adjust the path if necessary
import "../../style/ImageMatch.css";
import NavigationBar from "../../components/NavigationBar";
import NyocokakeGambar from "../../components/isikuissandhangan/GambarSandhangan";
function IsiKuis4E() {
  return (
    <div>
      {/* navigation bar */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* mode */}
      <div>
        <NyocokakeGambar nextPagePath={"/sandhangan/kuis5/nyocokakeswara"} />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis4E;
