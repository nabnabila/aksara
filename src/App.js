import "./App.css";
import "./style/LandingPage.css";
import HomePage from "./Pages/Homepage";
import AksaraNglegena from "./Pages/AksaraNglegena";
import PasanganAksaraNglegena from "./Pages/PasanganAksaraNglegena";
import AksaraMurda from "./Pages/AksaraMurda";
import PasanganAksaraMurda from "./Pages/PasanganAksaraMurda";
import Sandhangan1 from "./Pages/Sandhangan1";
import Sandhangan2 from "./Pages/Sandhangan2";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/aksaranglegena" Component={AksaraNglegena} />
        <Route
          path="/pasanganaksaranglegena"
          Component={PasanganAksaraNglegena}
        />
        <Route path="/aksaramurda" Component={AksaraMurda} />
        <Route path="/pasanganaksaramurda" Component={PasanganAksaraMurda} />
        <Route path="/sandhangan1" Component={Sandhangan1} />
        <Route path="/sandhangan2" Component={Sandhangan2} />
      </Routes>
    </div>
  );
}

export default App;
