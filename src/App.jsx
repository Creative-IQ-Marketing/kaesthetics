import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import MobileDock from "./components/layout/MobileDock";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import { initializeAnalytics, trackPageView } from "./services/analytics";

const HERO_ROUTES = ["/", "/services", "/booking", "/contact"];

function AnalyticsListener() {
  const location = useLocation();

  useEffect(() => {
    const enabled = initializeAnalytics();
    if (!enabled) return;
    const path = `${location.pathname}${location.search || ""}`;
    setTimeout(() => trackPageView(path, document.title), 0);
  }, [location.pathname, location.search]);

  return null;
}

function AppShell() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      {!HERO_ROUTES.includes(location.pathname) && <Header />}
      <main className={`flex-grow pb-[4.5rem] lg:pb-0`}>
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
      <MobileDock />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnalyticsListener />
      <AppShell />
    </Router>
  );
}

export default App;
