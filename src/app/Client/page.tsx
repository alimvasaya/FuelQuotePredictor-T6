"use client";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "../components/Header";
import HeaderAuth from "../components/HeaderAuth";
import ProfileForm from "./Profile_forms/ProfileForm";
import EditProfile from "./Profile_forms/EditProfile";
import QuoteForm from "./Request_Quote_Form/QuoteForm";
import QuoteHist from "./Quote_History/QuoteHist";
import ViewProfile from "./Client_profile/ViewProfile";

const ClientPage = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/Client"></Link>
          <Header />
          <HeaderAuth />
        </nav>

        <Routes>
          <Route path="/profile-form" element={<ProfileForm />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/quote-form" element={<QuoteForm />} />
          <Route path="/quote-hist" element={<QuoteHist />} />
          <Route path="/view-profile" element={<ViewProfile/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default ClientPage;
