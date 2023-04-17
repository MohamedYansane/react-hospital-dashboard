import {
  ArrowDropDown,
  ArrowDropUp,
  SignalCellularAlt,
} from "@mui/icons-material";
export const OverviewCards = ({
  card_title,
  number,
  icon,
  stat1,
  stat2,
  stat3,
}) => {
  return (
    <>
      <div className="card rounded-xl shadow-lg">
        <div className="card-data">
          <div className="card-content flex justify-between ">
            <div className="card-title flex flex-col">
              <span>{card_title}</span>
              <h4>{number}</h4>
            </div>
            {icon}
          </div>
        </div>
        <div className="card-stats flex justify-between">
          <span className="flex justify-center items-center">
            <SignalCellularAlt className="mb-2" />
            {stat1}
          </span>
          <span className="flex justify-center items-center">
            <ArrowDropUp className="mb-2" />
            {stat2}
          </span>
          <span className="flex  items-center justify-center ">
            <ArrowDropDown className="mb-2" />
            {stat3}
          </span>
        </div>
      </div>
    </>
  );
};
export const DoctorsCards = () => {
  return <></>;
};
