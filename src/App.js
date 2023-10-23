import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import ClubTemplate from "./ClubPage/ClubTemplate";
import NotFoundPage from "./NotFoundPage"; // Optional: Add a not found page component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/:clubName" element={<ClubTemplate />} />
        <Route path="*" element={<NotFoundPage />} />{" "}
        {/* Optional: Show a not found page for unknown URLs */}
      </Routes>
    </Router>
  );
}

export default App;
