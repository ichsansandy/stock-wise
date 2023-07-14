import {
  Github, Palette, ScanFace, TrendingUp,
} from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-center items-center w-full border-b-slate-600 border-b-2">
      <ul className="flex justify-between p-4 w-full max-w-[900px]">
        <NavLink className="flex items-center gap-2" to="/">
          <TrendingUp />
          Stockwise
        </NavLink>
        <div className="flex gap-3">
          <a className="flex items-center gap-2" target="_blank" href="https://github.com/ichsansandy/stock-wise/" rel="noreferrer">
            <Github />
            <div className="hidden sm:block">
              Github
            </div>
          </a>
          <NavLink className="flex items-center gap-2" to="/aboutme">
            <ScanFace />
            <div className="hidden sm:block">
              About Me
            </div>
          </NavLink>
          <Palette />
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
