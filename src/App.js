import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

import Landing from "./pages/Landing";
import Apply from "./pages/Apply";
import Faq from "./pages/Faq";
import OurStory from "./pages/OurStory";
import PastEvents from "./pages/PastEvents";
import Sponsorships from "./pages/Sponsorships";
import Admin from "./pages/Admin";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/past-events" element={<PastEvents />} />
          <Route exact path="/apply" element={<Apply />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/our-story" element={<OurStory />} />
          <Route exact path="/sponsorships" element={<Sponsorships />} />
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
