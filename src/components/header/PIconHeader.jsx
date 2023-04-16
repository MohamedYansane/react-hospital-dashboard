import React from "react";

export const PIconHeader = ({ classe1, classe2, photo,isImage }) => {
  return (
    <div className={classe1}>
      <img src={photo} className={classe2} alt="" />
    </div>
  );
};

export const ProfilImage = ({ classe1, classe2, photo,isImage }) =>{
  return  (
    <div className={classe1}>
      <img src={photo} className={classe2} alt="" />
    </div>
  );
}