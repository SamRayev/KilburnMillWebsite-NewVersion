import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Header from "./Components/Navbar/header";
import Footer from "./Components/Footer/footer";
import Directory from "./Pages/directory";
import Entertainment from "./Pages/entertainment";
import Weddings from "./Pages/weddings";
import Contact from "./Pages/contact";
import Gallery from "./Pages/gallery";
import Events from "./Pages/events";
import Leasing from "./Pages/leasing";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/directory" element={<Directory />}></Route>
            <Route path="/entertainment" element={<Entertainment />}></Route>
            <Route path="/weddings" element={<Weddings />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/leasing" element={<Leasing />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
