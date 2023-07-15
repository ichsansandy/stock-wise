import {
  Circle,
  Github, Palette, ScanFace, TrendingUp,
} from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from 'antd';
import { changeTheme } from '../redux/theme/changeThemeSlice';

function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.changeTheme.value);

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
      <ul className="flex justify-between p-4 w-full max-w-wrap">
        <NavLink className="flex items-center gap-2" to="/">
          <TrendingUp />
          Stockwise
        </NavLink>
        <div className="flex gap-3">
          <a className={`${theme} flex items-center gap-2 border-primary border-2 p-2 rounded-xl`} target="_blank" href="https://github.com/ichsansandy/stock-wise/" rel="noreferrer">
            <Github />
            <div className="hidden sm:block">Github</div>
          </a>
          <NavLink className={`${theme} flex items-center gap-2 border-primary border-2 p-2 rounded-xl`} to="/aboutme">
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
            <div className={`${theme} flex items-center gap-2 border-primary border-2 p-2 rounded-xl`}>
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
