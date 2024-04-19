import React from 'react';
import { Link, useLocation } from "react-router-dom";

interface Iprops {
  closeMenu: () => void;
  isOpen: boolean; 
}

const DropDownMenu = React.memo(({ closeMenu, isOpen }: Iprops) => {
  const location = useLocation();

  return (
    <div className={`DropDownMenu ${isOpen ? '' : 'close'}`}>
      <div className="menuWrap">
        <div className="links">
          <Link
            to="/"
            className={`${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => { closeMenu(); console.log(location.pathname); }}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className={`${location.pathname === '/about' ? 'active' : ''}`}
            onClick={() => { closeMenu(); console.log(location.pathname); }}
          >
            ABOUT
          </Link>
          <Link
            to="/work"
            className={`${location.pathname === '/work' ? 'active' : ''}`}
            onClick={() => { closeMenu(); console.log(location.pathname); }}
          >
            WORK
          </Link>
        </div>
        <ul className="snsWrap">
          <li>
            <a href="https://github.com/seonyeongyoon">GITHUB</a>
          </li>
          <li>
            <a href="https://www.notion.so/5c57a8f76c814815badc0301d705f5f7?pvs=4">NOTION</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sun094">LINKEDIN</a>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default DropDownMenu;
