import "../App.css"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar"; // Adjust the path if necessary
import "../style/CardCarousel.css"; // Adjust the path if necessary
import IsiBelajar1 from "../components/IsiBelajar1"; // Adjust the path if necessary

function Belajar1() {
  return (
    <div>
      {/* intro section */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}
      {/* category section */}
      <div>
        <IsiBelajar1 />
      </div>
      {/* end of category section */}
    </div>
  );
}

export default Belajar1;
