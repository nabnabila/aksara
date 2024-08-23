import "../App.css"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar"; // Adjust the path if necessary
import "../style/CardCarousel.css"; // Adjust the path if necessary
import IsiBelajar3 from "../components/IsiBelajar3"; // Adjust the path if necessary

function Belajar3() {
  return (
    <div>
      {/* intro section */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}
      {/* category section */}
      <div>
        <IsiBelajar3 />
      </div>
      {/* end of category section */}
    </div>
  );
}

export default Belajar3;
