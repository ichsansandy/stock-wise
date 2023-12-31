import {
  Circle, Github, Palette, ScanFace, TrendingUp,
} from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown } from 'antd';
import { changeTheme, selectTheme } from '../redux/theme/changeThemeSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

function Navbar() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const items = [
    {
      key: '1',
      label: 'Magenta Madness',
      icon: <Circle color="#ec4c8a" fill="#ec4c8a" />,
      value: 'magenta-madness',
      color: '#ec4c8a',
    },
    {
      key: '2',
      label: 'Royal Blue',
      icon: <Circle color="#4369b2" fill="#4369b2" />,
      value: 'royal-blue',
      color: '#4369b2',
    },
  ];

  const changesTheme = (e) => {
    const { value, color } = items.find((i) => i.key === e.key);
    dispatch(changeTheme({ value, color }));
  };

  const menuProps = {
    items,
    onClick: changesTheme,
    selectable: true,
    defaultSelectedKeys: ['2'],
    type: 'button',
  };

  return (
    <nav className="z-10 sticky top-0 bg-white flex justify-center items-center w-full border-b-slate-600 border-b-2">
      <ul className="flex justify-between p-4 w-full max-w-wrap relative">
        <NavLink className={({ isActive }) => (isActive ? `${theme} flex items-center gap-2  transition after:w-[4.2rem] after:absolute after:bottom-5 after:left-12 after:bg-accent after:h-1 after:block after:rounded-2xl` : `${theme} transition flex items-center gap-2  after:w-9 after:absolute after:bottom-5 after:left-12 after:bg-accent after:h-1 after:block after:rounded-2xl `)} to="/">
          <TrendingUp />
          Stockwise
        </NavLink>
        <div className="flex gap-3">
          <a className={`${theme} transition flex items-center gap-2 border-accent border-2 p-2 rounded-xl hover:text-textClr hover:bg-accent`} target="_blank" href="https://github.com/ichsansandy/stock-wise/" rel="noreferrer">
            <Github />
            <div className="hidden sm:block">Github</div>
          </a>
          <NavLink className={({ isActive }) => (isActive ? `${theme} flex items-center gap-2 border-accent border-2 p-2 rounded-xl text-textClr bg-accent transition` : `${theme} flex items-center gap-2 border-accent border-2 p-2 rounded-xl hover:text-textClr hover:bg-accent transition`)} to="/aboutme">
            <ScanFace />
            <div className="hidden sm:block">About Me</div>
          </NavLink>
          <Dropdown
            menu={menuProps}
            placement="bottomRight"
            trigger={['click']}
          >
            <div className={`${theme} cursor-pointer flex items-center gap-2 border-accent border-2 p-2 rounded-xl hover:text-textClr hover:bg-accent transition`}>
              <Palette />
              <div className="hidden sm:block">Theme</div>
            </div>
          </Dropdown>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
