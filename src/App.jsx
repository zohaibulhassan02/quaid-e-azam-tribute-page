import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/speeches/Portfolio";
// import MarqueeComponent from "./components/marquee/MarqueeComponent";
import Timeline from "./components/timeline/Timeline";
import Quotes from "./components/quotes/Quotes";
import FAQ from "./components/FAQ/FAQ";
import Contributors from "./components/contributors/Contributors";
import QuoteMarquee from "./components/quotes/QuotesCard";

// import CardComponent from "./components/Card/Card";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      {/* <MarqueeComponent /> */}
      <About />
      <FAQ />
      <Timeline />
      <Quotes />
      {/* <CardComponent /> */}
      <Contributors />

      <Portfolio />
      <QuoteMarquee />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
