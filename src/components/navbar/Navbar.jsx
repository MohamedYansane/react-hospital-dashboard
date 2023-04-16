import React from "react";
export const Navbar = ({ nav_name, className, icon }) => {
  return (
    <>
      <li>
        {/** le jsx veut que j'utilise le button au lieu
         * d'une balise a avec un href ="#" donc je vais changer
         * lors de l'implementations j'utiliserai le Link du react router-Dom
         */}
        <button>
          <span className={className}>{icon}</span>
          <span className="sidebar-item">{nav_name}</span>
        </button>
      </li>
    </>
  );
};
