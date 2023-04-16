import "./App.css";
import { Header } from "./components/header/Header";
import dashboard from "./menu.png";
import doctor from "./doctor2.png";
import { Navbar } from "./components/navbar/Navbar";
// remarque si je veux leurs importer d'un seul coup je dois enlever Icon à la fin de ui ex: NotificationsActiveIcon
import {
  SpaceDashboardRounded,
  Person,
  PermIdentity,
  CalendarMonth,
  ContactSupport,
  SignalCellularAlt,
  Settings,
  Logout,
} from "@mui/icons-material";

function App() {
  return (
    <>
      <Header dashboard={dashboard} photo={doctor} />
      <section className="main w-full">
        <section className="sidebar">
          {/** begining of top sidebar  */}
          <ul className="sidebar-items">
            <Navbar
              nav_name="Dashboard"
              className="icon icon-1"
              icon={<SpaceDashboardRounded />}
            />
            <Navbar
              nav_name="Schedule"
              className="icon icon-2"
              icon={<CalendarMonth />}
            />
            <Navbar
              nav_name="Reliable Doctor"
              className="icon icon-3"
              icon={<PermIdentity />}
            />
            <Navbar
              nav_name="Patients"
              className="icon icon-4"
              icon={<Person />}
            />
            <Navbar
              nav_name="Activity"
              className="icon icon-5"
              icon={<SignalCellularAlt />}
            />
            <Navbar
              nav_name="Support"
              className="icon icon-6"
              icon={<ContactSupport />}
            />
          </ul>
          {/** end of top sidebar  */}
          {/** begining of sidebar bottom */}
          <ul className="sidebar-bottom-items">
            <Navbar
              nav_name="Settings"
              className="icon icon-7"
              icon={<Settings />}
            />
            <Navbar
              nav_name="Logout"
              className="icon icon-7"
              icon={<Logout />}
            />
          </ul>
          {/** end of sidebar bottom */}
        </section>
        <section className="main-content"></section>
      </section>
    </>
  );
}

export default App;
