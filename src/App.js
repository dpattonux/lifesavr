import React from "react";
import "./App.css";
import Features from "./Components/Features";
import Hero from "./Components/Hero";
import Topbar from "./Components/Topbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Topbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}

export default App;
