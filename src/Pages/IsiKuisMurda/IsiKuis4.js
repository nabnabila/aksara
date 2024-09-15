import "../../App.css"; // Adjust the path if necessary
import "../../style/ImageMatch.css";
import NavigationBar from "../../components/NavigationBar";
import NyocokakeGambar from "../../components/isikuismurda/GambarMurda";
function IsiKuis4C() {
  return (
    <div>
      {/* navigation bar */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* mode */}
      <div>
        <NyocokakeGambar nextPagePath={"/aksaramurda/kuis3/nyocokakeswara"} />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis4C;
