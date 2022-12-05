import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hosting from "./components/Hosting/Hosting";
import Services from "./components/Services/Services";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Other from "./components/Errors/Other";
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
              <Route exact path="/Main" element={<Main />} />
              <Route exact path="/About" element={<About />} />
              <Route exact path="/Hosting" element={<Hosting />} />
              <Route exact path="/Services" element={<Services />} />
              <Route exact path="/Contact" element={<Contact />} />
              <Route exact path="/Login" element={<Login />} />
              <Route exact path="/Register" element={<Register />} />
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
