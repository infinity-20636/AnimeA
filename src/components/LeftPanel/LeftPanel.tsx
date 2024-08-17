import { Link, NavLink } from "react-router-dom";
import "./LeftPanel.scss";
import "../../assets/image/logoAnime-removebg-preview.png";
import home from "../../assets/image/home.svg";
import shop from "../../assets/image/shop.svg";
import forum from "../../assets/image/forum.svg";
import users from "../../assets/image/users.svg";
// import statistic from "../../assets/image/statistic.svg";
import calendar from "../../assets/image/calendar.svg";
import { type FC } from "react";
import { PAGE_LIST } from "../../app/routes/AppRoutes";
import animeIcon from "../../assets/image/animeIconka.svg";
import "./media.LeftPanel.scss";



export interface ILeftPanelProps{

}


 export const LeftPanel: FC<ILeftPanelProps> = () => {
  return (
    <div className="container__left">
      <header className="wrapper">
        <Link to="/" className="wrapper__left-logo"></Link>
        <nav className="wrapper__nav">
          <NavLink to={PAGE_LIST.HOME} className="wrapper__nav-left">
            <img className="home" src={home} alt="" />
          </NavLink>
          <NavLink to={PAGE_LIST.ANIMELIST} className="wrapper__nav-left">
            <img className="animeList" src={animeIcon} alt="" />
          </NavLink>
          <NavLink to={PAGE_LIST.SHOP} className="wrapper__nav-left">
            <img className="shop" src={shop} alt="" />
          </NavLink>
          <NavLink to={PAGE_LIST.FORUM} className="wrapper__nav-left">
            <img className="forum" src={forum} alt="" />
          </NavLink>
          <NavLink to={PAGE_LIST.USERS} className="wrapper__nav-left">
            <img className="users" src={users} alt="" />
          </NavLink>
          <NavLink to={PAGE_LIST.CALENDAR} className="wrapper__nav-left">
            <img className="calendar" src={calendar} alt="" />
          </NavLink>
         
        </nav>
      </header>
    </div>
  );
}
