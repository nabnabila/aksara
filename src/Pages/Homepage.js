import "../App.css"; // Adjust the path if necessary
import NavigationBar from "../components/NavigationBar"; // Adjust the path if necessary
import Intro from "../components/Intro"; // Adjust the path if necessary
import "../style/LandingPage.css"; // Adjust the path if necessary
import CategorySection from "../components/CategorySection"; // Adjust the path if necessary

function HomePage() {
  return (
    <div>
      {/* intro section */}
      <div className="bg">
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro section */}

      {/* category section */}
      <div className="category">
        <CategorySection />
      </div>
      {/* end of category section */}
    </div>
  );
}

export default HomePage;
