import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
      <div className="wrapper-main">
      
        <div className="background-overlay"></div>

        <div className="wrapper">
          <div className="section-1">
            <Navbar />
            <Navbar />
          </div>
          <div className="section-2">
            <Navbar />
            <Navbar />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
