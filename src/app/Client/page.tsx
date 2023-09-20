import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HeaderAuth from "../components/HeaderAuth";
import ProfileForm from "./Profile_forms/ProfileForm";
import QuoteForm from "./Request_Quote_Form/QuoteForm";
import QuoteHist from "./Quote_History/QuoteHist";
import ViewProfile from "./Client_profile/ViewProfile";
import Profile from "./Client_profile/ViewProfile";

const ClientPage = () => {
  return (
    <Router>
      <div>
        <nav>
          <HeaderAuth />
        </nav>

        <Routes>
          <Route path="/profile-form" element={<ProfileForm />} />
          <Route path="/quote-form" element={<QuoteForm />} />
          <Route path="/quote-hist" element={<QuoteHist />} />
          <Route path="/view-profile" element={<ViewProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default ClientPage();
