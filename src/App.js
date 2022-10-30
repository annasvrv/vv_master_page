import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <div className="background-cover">
        <header className="App-header">
          <Header />
        </header>
        <main className="App-main">
          <Main />
        </main>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
