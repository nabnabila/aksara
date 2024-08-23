import "../App.css"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar"; // Adjust the path if necessary
import "../style/CardCarousel.css"; // Adjust the path if necessary
import IsiBelajar5 from "../components/IsiBelajar5"; // Adjust the path if necessary

function Belajar5() {
  return (
    <div>
      {/* intro section */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}
      {/* category section */}
      <div>
        <IsiBelajar5 />
      </div>
      {/* end of category section */}
    </div>
  );
}

export default Belajar5;
