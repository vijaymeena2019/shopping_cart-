import React, { Component } from "react";

// stateless functional components
const Navbar = ({ totalItems, totalCounters }) => {
  //const totalCounters = { props };
  console.log("navbar rendered");
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Total Items {}{" "}
          <span className="badge badge-pill badge-secondary m-2">
            {totalItems}
          </span>
          Total Number of Unique Items
          <span className="badge badge-pill badge-secondary m-2">
            {totalCounters}
          </span>
        </a>
      </nav>
    </div>
  );
};

// class Navbar extends Component {
//   render() {
//     return (

//     );
//   }
// }

export default Navbar;
