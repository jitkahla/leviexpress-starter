import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Home } from '../Home';
import { BrowserRouter, Link, Route, Routes, Outlet } from 'react-router-dom';
import Reservation from '../Reservation';

export const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/reservation" element={<Reservation />} />
    </Routes>
    <Outlet />
    <Footer />
  </>
);
