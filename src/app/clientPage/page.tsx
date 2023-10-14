"use client";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useSession } from "next-auth/react";

import Home from "../page";
import HeaderAuth from "../components/Headers/HeaderAuth";
import CompleteProfile from "./completeProfile/page";
import QuoteForm from "./requestQuote/page";
import QuoteHistory from "./quoteHistory/page";
import Profile from "./clientProfile/page";
// import ViewProfile from "./clientProfile/ViewProfile";

const ClientPage = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      return <a href="api/auth/signForm"></a>;
    },
  });

  if (!session) return;

  if (status === "authenticated" && session.user.role === "client") {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/Client"></Link>
            <HeaderAuth />
          </nav>
          {/* <CompleteProfile data={session} /> */}

          <Routes>
            {/* <Route path="/completeProfile" element={<CompleteProfile />} /> */}
            <Route
              path="/requestQuote"
              element={<QuoteForm data={session} />}
            />
            <Route
              path="/quoteHistory"
              element={<QuoteHistory data={session} />}
            />
            <Route path="/viewProfile" element={<Profile data={session} />} />
          </Routes>
        </div>
      </Router>
    );
  }
};

export default ClientPage;
