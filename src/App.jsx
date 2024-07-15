import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Head from "./components/Head.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
