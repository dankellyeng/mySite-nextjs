'use client'
import React from "react";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import customNavBar from'./customNavBar.module.scss';

const CustomNavbar = () => {
  return (
      <NavigationMenu.Root className={customNavBar.NavContainer}>
        <NavigationMenu.List className={customNavBar.Navbar}>
          <NavigationMenu.Link className={customNavBar.NavLink} href="/">
            HOME
          </NavigationMenu.Link>
          <NavigationMenu.Link className={customNavBar.NavLink} href="about">
            ABOUT
          </NavigationMenu.Link>
          <NavigationMenu.Link className={customNavBar.NavLink} href="work">
            WORK
          </NavigationMenu.Link>
          <NavigationMenu.Link className={customNavBar.NavLink} href="contact">
            CONTACT
          </NavigationMenu.Link>
        </NavigationMenu.List>
      </NavigationMenu.Root>
  );
};

export default CustomNavbar;
