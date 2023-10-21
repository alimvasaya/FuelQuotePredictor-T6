"use client";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

import HeaderAuth from "../components/Headers/HeaderAuth";
import CompleteProfile from "./completeProfile/page";
import QuoteForm from "./requestQuote/page";
import QuoteHistory from "./quoteHistory/page";
import Profile from "./clientProfile/page";

const ClientPage = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      return;
    },
  });

  useEffect(() => {
    toast.success("Welcome!");
  }, []);

  if (status === "authenticated" && session.user.role === "client") {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/Client"></Link>
            <HeaderAuth />
          </nav>
          <CompleteProfile />

          <Routes>
            <Route path="/completeProfile" element={<CompleteProfile />} />
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
