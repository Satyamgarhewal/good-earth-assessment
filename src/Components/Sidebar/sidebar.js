import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import { SidebarData } from '../../utils/sidebardata';
function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((value, i) => {
          return (
            <li
              key={i}
              className="row"
              onClick={(e) => {
                window.location.pathname = value.link;
                e.preventDefault();
              }}
              id={window.location.pathname === value.link ? 'active' : ''}
            >
              <div id="icon">{value.icon}</div>
              <div id="title">{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
