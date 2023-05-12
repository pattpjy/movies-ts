// Create routes here

import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "../Home/Home";
import { Movie } from "../MovieDetail/MovieDetail";
import { NavBar } from "../../Components/NavigationBar/NavBar";
import "./App.css";

export const App: React.FC = () => {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:title" element={<Movie />} />
      </Routes>
    </main>
  );
};
