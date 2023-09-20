"use client";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import QuoteHistory from "./Fuel_Quote_History/page";
import ClientProfiles from "./Client_profiles/page";
import Analytics from "./Analytics/page";
import Form from "../components/Forum/page"; // Import the Form component

const AdminPage = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Admin">Admin</Link>
            </li>
            <li>
              <Link to="/quote-history">Fuel Quote History</Link>
            </li>
            <li>
              <Link to="/client-profiles">Client Profiles</Link>
            </li>
            <li>
              <Link to="/analytics">Analytics</Link>
            </li>
            <li>
              <Link to="/form">Form</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/quote-history" element={<QuoteHistory />} />
          <Route path="/client-profiles" element={<ClientProfiles />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AdminPage;
