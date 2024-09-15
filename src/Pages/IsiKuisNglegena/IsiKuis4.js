import "../../App.css"; // Adjust the path if necessary
import "../../style/ImageMatch.css";
import NavigationBar from "../../components/NavigationBar";
import NyocokakeGambar from "../../components/isikuisnglegena/GambarNglegena";
function IsiKuis4A() {
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
          nextPagePath={"/aksaranglegena/kuis1/nyocokakeswara"}
        />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis4A;
