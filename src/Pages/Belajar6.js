import "../App.css"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar"; // Adjust the path if necessary
import "../style/CardCarousel.css"; // Adjust the path if necessary
import IsiBelajar6 from "../components/IsiBelajar6"; // Adjust the path if necessary

function Belajar6() {
  return (
    <div>
      {/* intro section */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}
      {/* category section */}
      <div>
        <IsiBelajar6 />
      </div>
      {/* end of category section */}
    </div>
  );
}

export default Belajar6;
