import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import IndoorCricket from "pages/IndoorCricket";
import Padel from "pages/Padel";
import Badminton from "pages/Badminton";
import Volleyball from "./pages/Volleyball";
import Football from "./pages/football";
import TableTennis from "./pages/TableTennis";
import Facilty from "./pages/Facility";
import LeaguesAndTournaments from "./pages/LeaguesAndTournaments";
import TrainingAndCoaching from "./pages/TrainingAndCoaching";
import CorporateAndParties from "./pages/CorporateAndParties";
import ContactUs from "./pages/ContactUs";
import WhatsAppButton from "./components/WhatsAppButton";
import { APP_ROUTES } from "./utils/constants";

function App() {
  return (
    <HelmetProvider>
      <Router>
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<Home />} />
        <Route path={APP_ROUTES.FACILITY} element={<Facilty />} />
        <Route path={APP_ROUTES.INDOOR_CRICKET} element={<IndoorCricket />} />
        <Route path={APP_ROUTES.PADEL} element={<Padel />} />
        <Route path={APP_ROUTES.BADMINTON} element={<Badminton />} />
        <Route path={APP_ROUTES.VOLLEYBALL} element={<Volleyball />} />
        <Route path={APP_ROUTES.FOOTBALL} element={<Football />} />
        <Route path={APP_ROUTES.TABLE_TENNIS} element={<TableTennis />} />
        <Route
          path={APP_ROUTES.LEAGUES_AND_TOURNAMENTS}
          element={<LeaguesAndTournaments />}
        />
        <Route
          path={APP_ROUTES.TRAINING_AND_COACHING}
          element={<TrainingAndCoaching />}
        />
        <Route
          path={APP_ROUTES.CORPORATE_AND_PARTIES}
          element={<CorporateAndParties />}
        />
        <Route path={APP_ROUTES.CONTACT_US} element={<ContactUs />} />
      </Routes>
      <WhatsAppButton />
      </Router>
    </HelmetProvider>
  );
}

export default App;
