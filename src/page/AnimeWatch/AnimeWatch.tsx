import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import "./AnimeWatch.scss";
import { type FC } from "react";
import "./media.animeWatch.scss"

export interface IAnimeWatchProps {}

const AnimeWatch: FC<IAnimeWatchProps> = () => {
  const anime = useSelector((state: RootState) => state.anime.currentAnime);

  if (!anime) {
    return <p>No anime selected</p>;
  }

  return (
    <section className="section">
      <div className="wrapper__content">
        <img className="wrapper__content-img"
          src={anime.attributes.posterImage.small}
          alt={anime.attributes.canonicalTitle}
        />
        <div className="wrapper__content-text">
          <h2 className="title__text">{anime.attributes.canonicalTitle}</h2>
          <p className="text">Дата: {anime.attributes.startDate}</p>
          <p className="text">Жанр: {anime.attributes.ageRatingGuide}</p>
          <p className="text">Серии: {anime.attributes.episodeLength}</p>
          <div className="option__text">Описание: <p className="text">{anime.attributes.synopsis}</p></div>
          
        </div>
      </div>
    </section>
  );
};

export default AnimeWatch;
