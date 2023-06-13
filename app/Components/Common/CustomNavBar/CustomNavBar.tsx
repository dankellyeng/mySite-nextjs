'use client'
import React from "react";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import customNavBar from'./customNavBar.module.scss';

const CustomNavbar = () => {
  return (
      <NavigationMenu.Root className={customNavBar.NavContainer}>
        <NavigationMenu.List className={customNavBar.Navbar}>
          <NavigationMenu.Item className={customNavBar.NavLink}>
              <NavigationMenu.Link className={customNavBar.NavLink} href="/">
                HOME
              </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className={customNavBar.NavLink}>
              <NavigationMenu.Link className={customNavBar.NavLink} href="about">
                ABOUT
              </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className={customNavBar.NavLink}>
              <NavigationMenu.Link className={customNavBar.NavLink} href="work">
                WORK
              </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item className={customNavBar.NavLink}>
              <NavigationMenu.Link className={customNavBar.NavLink} href="contact">
                CONTACT
              </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
  );
};

export default CustomNavbar;
