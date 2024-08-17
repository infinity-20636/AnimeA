import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import cart from "../../assets/image/basket.svg";
import account from "../../assets/image/account.svg";
import { type FC } from "react";
import { PAGE_LIST } from "../../app/routes/AppRoutes";
import './media.Header.scss'
import { AcumProduct } from "../AcumProduct";

export interface IHeaderProps {

}

export const Header: FC<IHeaderProps> = () => {
  return (
    <header className="container">
      <div className="header">
        <div className="header__wrapper">
          <Link to="Search" className="header__wrapper-glass"></Link>
          <input
            placeholder="Название..." 
            type="text" 
            className="header__wrapper-search"
          />
        </div>
        
        <nav className="header__nav">
          
          <NavLink to={PAGE_LIST.CART} className="header__nav-cart">
            <img className="cart" src={cart} alt="#"/>
            <AcumProduct />
          </NavLink>
          <NavLink to={PAGE_LIST.ACCOUNT} className="header__nav-account">
            <img src={account} alt="#" />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}