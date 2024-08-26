import "../../App.css"; // Adjust the path if necessary
import "../../style/ImageMatch.css";
import NavigationBar from "../../components/NavigationBar";
import NyocokakeGambar from "../../components/isikuispasanganmurda/GambarPasanganMurda";
function IsiKuis4D() {
  return (
    <div>
      {/* navigation bar */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* mode */}
      <div>
        <NyocokakeGambar
          nextPagePath={"/pasanganaksaramurda/kuis4/nyokakeswara"}
        />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis4D;
