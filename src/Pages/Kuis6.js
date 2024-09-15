import "../App.css"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar"; // Adjust the path if necessary
import PilihanKuis6 from "../components/PilihanKuis6";
import "../style/LandingPage.css"; // Adjust the path if necessary

function kuis6() {
  return (
    <div>
      {/* intro section */}
      <div>
        <NavigationBar />
      </div>
      {/* end of intro section */}

      {/* category section */}
      <div>
        <PilihanKuis6 />
      </div>
      {/* end of category section */}
    </div>
  );
}

export default kuis6;
