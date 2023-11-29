import React from "react";
import "./SBar.css";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
const SBar = () => {
  return (
    <div className="SidebarContainer">
      <h1 className="SidebarTitle">Filters</h1>

      <Menu className="SidebarMenu">
        <SubMenu label="Categories">
          <MenuItem> Clothes </MenuItem>
          <MenuItem> Cars</MenuItem>
          <MenuItem> electronic</MenuItem>
          <MenuItem> real estate</MenuItem>
          <MenuItem>home appliance </MenuItem>
        </SubMenu>
        <SubMenu label="Price">
          <MenuItem> High to Low </MenuItem>
          <MenuItem> Low to High</MenuItem>
        </SubMenu>
        <SubMenu label="Collections">
          <MenuItem> winter </MenuItem>
          <MenuItem>summer</MenuItem>
          <MenuItem>spring</MenuItem>
        </SubMenu>
        <SubMenu label="On Sale In">
          <MenuItem> available </MenuItem>
          <MenuItem>unavailable</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default SBar;
