import React from "react";
import { ProfilImage } from "./PIconHeader";
import doctor from "./doctor2.png";

// remarque si je veux leurs importer d'un seul coup je dois enlever Icon à la fin de ui ex: NotificationsActiveIcon
import {
  NotificationsRounded,
  LockRounded,
  DarkMode,
  ListRounded,
  Search,
} from "@mui/icons-material";
export const Header = ({ dashboard, photo }) => {
  return (
    <>
      <section className="header w-full">
        <div className="logo">
          <ListRounded className=" menu" />
          <h1 className="font-bold text-xl">
            Med<span className="text-doctor-blue">Ex</span>
          </h1>
        </div>
        <div className="searchbar-notifications-profile">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search"
              className="searchbar-input text-sm"
            />
            <button type="submit">
              <Search />
            </button>
          </div>
          <div className="notifications-profile">
            <div className="p-icon bell ">
              <NotificationsRounded className=" w-7 h-7" />
            </div>
            <div className="p-icon lock">
              <LockRounded className="lock-icon" />
            </div>
            <div className="p-icon switch">
              <DarkMode className=" w-7 h-7" />
            </div>

            <ProfilImage
              classe1="p-icon profile"
              classe2="w-8 h-8"
              photo={doctor}
            />
          </div>
        </div>
      </section>
    </>
  );
};
