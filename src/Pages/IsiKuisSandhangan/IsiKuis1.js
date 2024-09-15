import "../../App.css"; // Adjust the path if necessary
import "../../style/WordSearch.css";
import NavigationBar from "../../components/NavigationBar";
import NggolekiTembang from "../../components/isikuissandhangan/NggolekiTembangSandhangan";
function IsiKuis1E() {
  return (
    <div>
      {/* navigation bar */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* mode */}
      <div>
        <NggolekiTembang />
      </div>
      {/* mode */}
    </div>
  );
}

export default IsiKuis1E;
