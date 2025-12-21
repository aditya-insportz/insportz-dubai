import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import IndoorCricket from "pages/IndoorCricket";
import Padel from "pages/Padel";
import Badminton from "pages/Badminton";
import Volleyball from "./pages/Volleyball";
import Football from "./pages/football";
import TableTennis from "./pages/TableTennis";
import Facilty from "./pages/Facility";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facility" element={<Facilty />} />
        <Route path="/indoor-cricket" element={<IndoorCricket />} />
        <Route path="/padel" element={<Padel />} />
        <Route path="/badminton" element={<Badminton />} />
        <Route path="/volleyball" element={<Volleyball />} />
        <Route path="/football" element={<Football />} />
        <Route path="/table-tennis" element={<TableTennis />} />
      </Routes>
    </Router>
  );
}

export default App;
