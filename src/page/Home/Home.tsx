import "./Home.scss";
import path_to_image from "../../assets/image/path_to_image.png";
import { type FC } from "react";
import effect_titans from "../../assets/image/effect-titans.svg";
import fire_titans from "../../assets/image/fire-titans.svg";
import light_titans from "../../assets/image/light-titan.svg";
import Footer from "@/components/Footer/Footer";
import './media.Home.scss'
// import anome_girlfrom from "../../assets/image/anome-girl.svg";

export interface IMainProps {}

const Home: FC<IMainProps> = () => {
  return (
    <>
      <section className="section">
        <div className="preview">
          <div className="preview__name">
            <div className="preview__name-top"><p className="preview__name-text">Top anime</p></div>
            
            <h1 className="preview__name-text">
              Atack on Titan: <br />
              Final season 2
            </h1>
            <div className="preview__name-btn">
              <p>12 episodes</p>
              <button>Watch</button>
            </div>
          </div>
          <div className="preview__img">
            <img src={light_titans} alt="" className="preview__img-light" />
            <img src={fire_titans} alt="" className="preview__img-fire" />
            <img src={effect_titans} alt="" className="preview__img-effect" />
            <img className="preview__img-Titan" src={path_to_image} alt="" />
          </div>
        </div>
        <Footer/>
      </section>
    </>
  );
};

export default Home;
