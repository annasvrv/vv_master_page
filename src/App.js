import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Hosting from "./components/Hosting";
import Services from "./components/Services";
import "./styles/App.css";

export default function App(props) {
  return (
    <Router>
      <div className="App">
        <div className="background-cover">
          <header className="App-header">
            <Header navMenu={props.navMenu} />
          </header>
          <section className="App-main">
            <Routes>
              <Route exact path="/Main" element={<Main />} />
              <Route exact path="/About" element={<About />} />
              <Route exact path="/Hosting" element={<Hosting />} />
              <Route exact path="/Services" element={<Services />} />
              <Route exact path="/Contact" element={<Contact />} />
            </Routes>
          </section>
          <footer className="App-footer">
            <Footer />
          </footer>
        </div>
      </div>
    </Router>
  );
}
