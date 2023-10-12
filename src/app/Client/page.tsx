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

import HeaderAuth from "../components/Headers/HeaderAuth";
import QuoteForm from "./requestQuote/page";
import CompleteProfile from "./completeProfile/page";
import QuoteHistory from "./quoteHistory/page";
import EditProfile from "./editProfile/page";
import ViewProfile from "./viewProfile/page";

const ClientPage = () => {
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
          <Link to="/Client"></Link>
          <HeaderAuth />
        </nav>
        <CompleteProfile session={session} />

        <Routes>
          {/* <Route path="/completeProfile" element={<CompleteProfile />} /> */}
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/requestQuote" element={<QuoteForm />} />
          <Route path="/quoteHistory" element={<QuoteHistory />} />
          <Route path="/viewProfile" element={<ViewProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default ClientPage;
