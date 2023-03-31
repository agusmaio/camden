import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Skills } from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const placeId = "ChIJeeHIJC23vJURESUAM1_3d3A";

  return (
    <div className="App">
      <NavBar />
      <Home />
      <Projects />
      <Skills />
      {/* <PlaceReviews placeId={placeId} /> */}
      {/* <CompanyLocation /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
