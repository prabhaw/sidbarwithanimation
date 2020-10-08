import React from "react";

import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "side-nav-text",
    subMenu:[{
      title: "Reports",
      path: "/reports",
      icon: <IoIcons.IoIosPaper />,
      cName: "side-nav-text",
    },{
      title: "Reports",
      path: "/reports",
      icon: <IoIcons.IoIosPaper />,
      cName: "side-nav-text",
      subMenu:[{
        title: "Reports",
        path: "/reports",
        icon: <IoIcons.IoIosPaper />,
        cName: "side-nav-text",
      },{
        title: "Reports",
        path: "/reports",
        icon: <IoIcons.IoIosPaper />,
        cName: "side-nav-text",
      }]
    }]
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "side-nav-text",
  },
  {
    title: "Product",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "side-nav-text",
  },
  {
    title: "Team",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "side-nav-text",
  },
  {
    title: "Messages",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "side-nav-text",
  },
  {
    title: "Support",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "side-nav-text",
  },
];
