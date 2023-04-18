import "./App.css";
import { Header } from "./components/header/Header";
import dashboard from "./menu.png";
import doctor from "./doctor2.png";
import doctor1 from "./doctor1.png";
import doctor3 from "./doctor3.png";
import doctorFemale1 from "./doctorFemale1.png";
import doctorFemale2 from "./doctorFemale2.png";
import drpriyadarshi from "./dr-priyadarshi-jitendra-kumar.png";
import yansane from "./yansane.png";
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
  Bed,
} from "@mui/icons-material";
import { DoctorsCards, OverviewCards } from "./components/cards/Cards";

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
        <section className="main-content">
          {/*begining of overview section (div) including cards */}
          <div className="over-view">
            {/*begining of title section (div) */}
            <div className="title">
              <h1 className="section-title">Overview</h1>
              <select name="" id="" defaultValue="filter">
                <option value="filter" disabled>
                  Filter
                </option>
                <option value="today">Today</option>
                <option value="today">Last Week</option>
              </select>
            </div>
            {/*end of title section (div) */}

            {/*begining of over-view cards  */}
            <div className="cards over-view-cards">
              <OverviewCards
                className="card-1"
                card_title="Total Doctors"
                number="150"
                icon={<PermIdentity className="card-icon" />}
                stat1="65%"
                stat2="10"
                stat3="2"
              />

              <OverviewCards
                className="card-2"
                card_title="Total Patient"
                number="1145"
                icon={<Person className="card-icon" />}
                stat1="82%"
                stat2="230"
                stat3="45"
              />
              <OverviewCards
                className="card-3"
                card_title="Schedule"
                number="150"
                icon={<CalendarMonth className="card-icon" />}
                stat1="27%"
                stat2="31"
                stat3="23"
              />
              <OverviewCards
                className="card-4"
                card_title="Bedrooms"
                number="150"
                icon={<Bed className="card-icon" />}
                stat1="8%"
                stat2="11"
                stat3="2"
              />
            </div>
            {/*end of over-view cards  */}
          </div>
          {/*end of overview section (div) including cards */}

          {/*begining of doctors section (div) including cards */}
          <div className="doctors">
            <div className="title">
              <h1 className="section-title">Doctors</h1>
              <select name="" id="" defaultValue="filter">
                <option value="filter" disabled>
                  Filter
                </option>
                <option value="today">Today</option>
                <option value="today">Last Week</option>
              </select>
            </div>
            {/** begining of doctors card */}
            <div className="cards">
              <DoctorsCards
                photo={yansane}
                occupation="Scheduled"
                className="text-doctor-blue"
                text_color="text-doctor-blue"
              />
              <DoctorsCards
                photo={yansane}
                occupation="Scheduled"
                className="text-doctor-blue"
                text_color="text-doctor-blue"
              />
              <DoctorsCards
                photo={doctor3}
                occupation="Scheduled"
                className="text-doctor-blue"
                text_color="text-doctor-blue"
              />
              <DoctorsCards
                photo={doctorFemale1}
                occupation="Free"
                className="text-red-600"
                text_color="text-red-600"
              />
              <DoctorsCards
                photo={doctor1}
                occupation="Free"
                className="text-doctor-blue"
                text_color="text-red-600"
              />
              <DoctorsCards
                photo={drpriyadarshi}
                occupation="Scheduled"
                className="text-doctor-blue"
                text_color="text-doctor-blue"
              />
              <DoctorsCards
                photo={doctorFemale2}
                occupation="Scheduled"
                className="text-doctor-blue"
                text_color="text-doctor-blue"
              />
              <DoctorsCards
                photo={doctorFemale1}
                occupation="Free"
                className="text-red-600"
                text_color="text-red-600"
              />
              <DoctorsCards
                photo={doctor1}
                occupation="Free"
                className="text-doctor-blue"
                text_color="text-red-600"
              />
            </div>
            {/** end of doctors card */}
          </div>
          {/*end of doctors section (div) including cards */}

          {/** beginning of reccent patients  */}
          {/** end of reccent patients  */}
        </section>
      </section>
    </>
  );
}

export default App;
