"use client";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import QuoteHistory from "./Fuel_Quote_History/page";
import ClientProfiles from "./Client_profiles/page";
import Analytics from "./Analytics/page";
import Form from "../components/Forum/page"; // Import the Form component
import HeaderAuthAdmin from "../components/HeaderAuthAdmin";

const AdminPage = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/Admin">Admin</Link>
          <HeaderAuthAdmin />
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
