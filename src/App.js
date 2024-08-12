import "./App.css";
import "./style/LandingPage.css";
import HomePage from "./Pages/Homepage";
import AksaraNglegena from "./Pages/AksaraNglegena";
import PasanganAksaraNglegena from "./Pages/PasanganAksaraNglegena";
import AksaraMurda from "./Pages/AksaraMurda";
import PasanganAksaraMurda from "./Pages/PasanganAksaraMurda";
import Sandhangan1 from "./Pages/Sandhangan1";
import Sandhangan2 from "./Pages/Sandhangan2";
import Belajar1 from "./Pages/Belajar1";
import Kuis1 from "./Pages/Kuis1";
import Kuis2 from "./Pages/Kuis2";
import Kuis3 from "./Pages/Kuis3";
import Kuis4 from "./Pages/Kuis4";
import Kuis5 from "./Pages/Kuis5";
import Kuis6 from "./Pages/Kuis6";

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
        <Route path="/belajar1" Component={Belajar1} />
        <Route path="/kuis1" Component={Kuis1} />
        <Route path="/kuis2" Component={Kuis2} />
        <Route path="/kuis3" Component={Kuis3} />
        <Route path="/kuis4" Component={Kuis4} />
        <Route path="/kuis5" Component={Kuis5} />
        <Route path="/kuis6" Component={Kuis6} />
      </Routes>
    </div>
  );
}

export default App;
