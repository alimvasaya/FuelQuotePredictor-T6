'use client';
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Header from '../Headers/Header';
import SignForm from '../../auth/SignForm';

type Props = {};

export default function PreAuth({}: Props) {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/PreAuth"></Link>
        </nav>
        <Header />
        <SignForm />
      </div>
    </Router>
  );
}
