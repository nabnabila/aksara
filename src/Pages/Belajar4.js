import "../App.css"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar"; // Adjust the path if necessary
import "../style/CardCarousel.css"; // Adjust the path if necessary
import IsiBelajar4 from "../components/IsiBelajar4"; // Adjust the path if necessary

function Belajar4() {
  return (
    <div>
      {/* intro section */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}
      {/* category section */}
      <div>
        <IsiBelajar4 />
      </div>
      {/* end of category section */}
    </div>
  );
}

export default Belajar4;
