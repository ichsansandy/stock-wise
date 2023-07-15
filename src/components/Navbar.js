import {
  Circle,
  Github, Palette, ScanFace, TrendingUp,
} from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Dropdown } from 'antd';
import { changeTheme } from '../redux/theme/changeThemeSlice';

function Navbar() {
  const dispatch = useDispatch();

  const items = [
    {
      key: '1',
      label: 'Magenta Madness',
      icon: <Circle color="#ec4c8a" fill="#ec4c8a" />,
      classNames: 'magenta-madness',
    },
    {
      key: '2',
      label: 'Royal Blue',
      icon: <Circle color="#4369b2" fill="#4369b2" />,
      classNames: 'royal-blue',
    },
  ];

  const changesTheme = (e) => {
    const value = items.find((i) => i.key === e.key).classNames;
    dispatch(changeTheme(value));
  };

  const menuProps = {
    items,
    onClick: changesTheme,
    selectable: true,
    defaultSelectedKeys: ['1'],
    type: 'button',
  };

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
            <div className="hidden sm:block">Github</div>
          </a>
          <NavLink className="flex items-center gap-2" to="/aboutme">
            <ScanFace />
            <div className="hidden sm:block">About Me</div>
          </NavLink>
          <Dropdown
            menu={menuProps}
            placement="bottomRight"
            arrow={{
              pointAtCenter: true,
            }}
            trigger={['click']}
          >
            <Palette />
          </Dropdown>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
