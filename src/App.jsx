import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import { initializeAnalytics, trackPageView } from "./services/analytics";

function AnalyticsListener() {
  const location = useLocation();

  useEffect(() => {
    const enabled = initializeAnalytics();
    if (!enabled) return;

    const path = `${location.pathname}${location.search || ""}`;
    setTimeout(() => {
      trackPageView(path, document.title);
    }, 0);
  }, [location.pathname, location.search]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnalyticsListener />
      <div className="flex flex-col min-h-screen relative">
        <Header />
        <main className="flex-grow pt-20 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
