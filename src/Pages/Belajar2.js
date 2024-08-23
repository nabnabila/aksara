import "../App.css"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar"; // Adjust the path if necessary
import "../style/CardCarousel.css"; // Adjust the path if necessary
import IsiBelajar2 from "../components/IsiBelajar2"; // Adjust the path if necessary

function Belajar2() {
  return (
    <div>
      {/* intro section */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}
      {/* category section */}
      <div>
        <IsiBelajar2 />
      </div>
      {/* end of category section */}
    </div>
  );
}

export default Belajar2;
