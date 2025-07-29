import { Route, Routes, useLocation } from "react-router";
import Layout from "./layouts";
import { EligibilityForm, Home } from "./pages";
import { useEffect } from "react";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // Use 'auto' for instant scroll, 'smooth' for animated
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/eligibility-form" element={<EligibilityForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
