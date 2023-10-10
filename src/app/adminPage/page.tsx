"use client";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Navigate,
  Routes,
} from "react-router-dom";
import { useSession } from "next-auth/react";

import HeaderAuthAdmin from "../components/Headers/HeaderAuthAdmin";
import QuoteHistoryTable from "./quoteHistoryTable/page";
import ProfileTable from "./profileTable/page";
import Analytics from "./analytics/page";
import QuoteForm from "../components/requestQuote/page";
import CheckSupportTickets from "./supportTickets/page";

const AdminPage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      return "Unauthenticated";
    },
  });

  if (!session) return;

  return (
    <Router>
      <div>
        <nav>
          <Link to="/adminPage"></Link>
          <HeaderAuthAdmin />
        </nav>

        <Routes>
          <Route path="/historyTable" element={<QuoteHistoryTable />} />
          <Route path="/profileTable" element={<ProfileTable />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/quoteForm" element={<QuoteForm />} />
          <Route path="/supportTickets" element={<CheckSupportTickets />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AdminPage;
