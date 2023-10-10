"use client";
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { UserProvider } from "../context/UserContext";

import Header from "./Headers/Header";
import SignForm from "../auth/SignForm";

type Props = {};

export default function PreAuth({}: Props) {
  return (
    <Router>
      <UserProvider>
        <div>
          <nav>
            <Link to="/PreAuth"></Link>
          </nav>
          <Header />
          <SignForm />
        </div>
      </UserProvider>
    </Router>
  );
}
