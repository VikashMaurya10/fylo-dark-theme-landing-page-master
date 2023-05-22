import { BrowserRouter } from "react-router-dom";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Hero from "./pages/Hero";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
