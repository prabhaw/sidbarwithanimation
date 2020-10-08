import React, { useState } from "react";
import { SidebarData } from "./SidebarData.component";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import Logo from "./../../../image/logo.png";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const Sidebar = () => {
  const [activemenu, setActiveSubmenu] = useState("main");
  const [subMenu, setSubMenu] = useState([]);

  return (
    <nav className='side-nav-menu side-nav-active'>
      <div className='logo-imge'>
        <img src={Logo} alt='radio' className='img-fluid ' />
      </div>
      <hr style={{ borderColor: "#939CA1" }} />
      <CSSTransition
        in={activemenu === "main"}
        unmountOnExit
        timeout={500}
        classNames='menu-primary'
      >
        <ul className='side-nav-menu-items '>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                {item.subMenu && item.subMenu.length ? (
                  <div
                    className='side-nav-ancher'
                    onClick={() => {
                      setSubMenu(item.subMenu);
                      setActiveSubmenu("submenu");
                    }}
                  >
                    {item.icon}
                    <span>{item.title}</span>

                    <span className='ml-auto'>
                      <AiIcons.AiOutlineDoubleRight />
                    </span>
                  </div>
                ) : (
                  <Link to='/' className='side-nav-ancher'>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </CSSTransition>
      <CSSTransition
        in={activemenu === "submenu"}
        unmountOnExit
        timeout={500}
        classNames='menu-secondary'
      >
        <ul className='side-nav-menu-items '>
          <li className={"side-nav-text"}>
            <div
              className='side-nav-ancher'
              onClick={() => {
                setActiveSubmenu("main");
              }}
            >
              <FaIcons.FaArrowLeft />

              <span className='mx-auto'>Back</span>
            </div>
          </li>
          {subMenu.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                {item.subMenu && item.subMenu.length ? (
                  <div
                    className='side-nav-ancher'
                    onClick={() => {
                      setSubMenu(item.subMenu);
                    }}
                  >
                    {item.icon}
                    <span>{item.title}</span>

                    <span className='ml-auto'>
                      <AiIcons.AiOutlineDoubleRight />
                    </span>
                  </div>
                ) : (
                  <Link to='/' className='side-nav-ancher'>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </CSSTransition>
    </nav>
  );
};

export default Sidebar;
