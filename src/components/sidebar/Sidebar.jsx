import React, { useState } from "react";
import "./Sidebar.css";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaShoppingBag,
} from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { CgShoppingBag } from "react-icons/cg";

import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/*",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/*/orders",
      name: "Orders",
      icon: <CgShoppingBag />,
    },
    {
      path: "/*/customers",
      name: "Customers",
      icon: <FaUserAlt />,
    },

    {
      path: "/*/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/*/productList",
      name: "Add Product",
      icon: <CiImageOn />      ,
    },
  ];
  return (
    <div className="admin-container">
      <div
        style={{ width: isOpen ? "250px" : "50px" }}
        className="admin-sidebar"
      >
        <div className="top_section">
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="admin-logo"
          >
            SellX
          </h1>
          <div
            style={{ marginLeft: isOpen ? "50px" : "0px" }}
            className="admin-bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="admin-link"
            activeClassName="active"
          >
            <div className="admin-icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              <p>{item.name}</p>
            </div>
          </NavLink>
        ))}
      </div>

      {/* content is here */}

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
