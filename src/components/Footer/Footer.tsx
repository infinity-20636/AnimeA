import { type FC } from "react";
import "./Footer.scss";
import anime_girls from "@/assets/image/anome-girl.svg";
import uzumaki_naruto from "@/assets/image/uxumaki-naruto.svg";
import onPang from "@/assets/image/onPang.svg";
import { Link } from "react-router-dom";
import insta from "@/assets/image/insta.svg"
import watup from "@/assets/image/watup.svg"
import tiktiok from "@/assets/image/tiktok.svg"
import call from "@/assets/image/call.svg"
import mail from "@/assets/image/mail.svg"
import position from "@/assets/image/position.svg"
import "./media.Footer.scss"

export interface IFooterProps {}
const Footer: FC<IFooterProps> = ({}) => {
  return (
    <footer className="wrapper__footer">
      <div className="aboutMe">
        <img src={uzumaki_naruto} alt="" className="aboutMe__img" />
        <div className="aboutMe__text">
          <p></p>
          <Link className="aboutMe__text-link" to={""}>О нас</Link> 
          <Link className="aboutMe__text-link" to={""}>Направления</Link>   
          <Link className="aboutMe__text-link" to={""}>Стоимость</Link>
        </div>
      </div>
      <div className="aboutMe">
        <img src={anime_girls} alt="" className="aboutMe__img" />
        <div className="aboutMe__text">
          <p>Присоединяйся к нам</p>
          <Link className="aboutMe__text-link" to={""}><img src={insta}alt=""></img> metalabs.kg</Link>
          <Link className="aboutMe__text-link" to={""}><img src={watup}alt=""></img> MetaLabs</Link>
          <Link className="aboutMe__text-link" to={""}><img src={tiktiok}alt=""></img> metalabs.kg</Link>
        </div>
      </div>
      <div className="aboutMe">
        <img src={onPang} alt="" className="aboutMe__img" />
        <div className="aboutMe__text">
          <p>Контакты</p>
          <Link className="aboutMe__text-link" to={""}><img src={call}alt=""></img> +996 705 311 113</Link>
          <Link className="aboutMe__text-link" to={""}><img src={call}alt=""></img> +996 990 311 113</Link>
          <Link className="aboutMe__text-link" to={""}><img src={mail}alt=""></img> metalab.kg@mail.com</Link>
          <Link className="aboutMe__text-link" to={""}><img src={position}alt=""></img> г.Бишкек, ул. Уметалиева 113/Рыскулова 34</Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
