import React from "react";
import data from "./Data";
import "./Products.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Product from "./Product";
const Products = () => {
  return (
    <div className="container">
      <Sidebar className="sidebar">
        <h1>Filters</h1>
        <Menu>
          <SubMenu label="Categories">
            <MenuItem> home appliance </MenuItem>
            <MenuItem> clothes </MenuItem>
            <MenuItem> real estate </MenuItem>
            <MenuItem> Cars </MenuItem>
          </SubMenu>
          <SubMenu label="Price">
            <MenuItem> High--Low </MenuItem>
            <MenuItem> Low--High </MenuItem>
          </SubMenu>
          <MenuItem> Collections </MenuItem>
          <MenuItem> On sale in </MenuItem>
        </Menu>
      </Sidebar>
      <div className="product-container">
        {data.map((e, i) => {
          return <Product key={i} e={e} />;
        })}
      </div>
    </div>
  );
};

export default Products;
