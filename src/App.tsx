import { Route, Routes } from "react-router";
import Layout from "./layouts";
import { EligibilityForm, Home } from "./pages";

function App() {
  return (
    <>
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
