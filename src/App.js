import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Hosting from "./components/Hosting";
import Services from "./components/Services";
import Other from "./components/Other";
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
              <Route exact path="/" element={<Main />} />
              <Route exact path="./components/Main" element={<Main />} />
              <Route exact path="./components/About" element={<About />} />
              <Route exact path="./components/Hosting" element={<Hosting />} />
              <Route
                exact
                path="./components/Services"
                element={<Services />}
              />
              <Route exact path="./components/Contact" element={<Contact />} />
              <Route path="*" element={<Other />} />
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
