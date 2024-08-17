import { useEffect, useState, type FC } from "react";
import "./Anime.scss";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCurrentAnime } from '@/api/anime/animeSlice'; 
import './media.anime.scss'

export interface ICardProps {
  id: string;
  attributes: {
    canonicalTitle: string;
    posterImage: {
      small: string;
    };
    synopsis: string;
    startDate?: string;
    ageRatingGuide?: string;
    episodeLength?: number;
  };
}

export interface IAnimeResponse {
  data: ICardProps[];
  meta?: {
    count: number;
  };
}

const Anime: FC = () => {
  const [animeList, setAnimeList] = useState<ICardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const itemsPerPage = 10;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchAnime = (page: number) => {
    setLoading(true);
    fetch(`https://kitsu.io/api/edge/anime?page[limit]=${itemsPerPage}&page[offset]=${(page - 1) * itemsPerPage}`)
      .then((response) => response.json())
      .then((data: IAnimeResponse) => {
        setAnimeList(data.data);
        if (data.meta?.count) {
          setTotalItems(data.meta.count);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching anime data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAnime(page);
  }, [page]);

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < Math.ceil(totalItems / itemsPerPage)) {
      setPage(page + 1);
    }
  };

  const goToAnimeById = (anime: ICardProps) => {
    dispatch(setCurrentAnime(anime));
    navigate(`/animeWatch`);
  };

  if (loading) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <section className="wrapper__anime">
      <div className="anime">
        {animeList.map((anime) => (
          <div onClick={() => goToAnimeById(anime)} key={anime.id} className="anime__item">
            <img
              className="anime__item-img"
              src={anime.attributes.posterImage.small}
              alt={anime.attributes.canonicalTitle}
            />
            <div className="anime__item-text">
              <h2 className="title__text">
                {anime.attributes.canonicalTitle}
              </h2>
              <p className="text">Дата: {anime.attributes.startDate}</p>
              <p className="text">Жанр: {anime.attributes.ageRatingGuide}</p>
              <p className="text">Серии: {anime.attributes.episodeLength}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="wrapper__control">
        <button className="wrapper__control-btn" onClick={handlePrevious} disabled={page === 1}>
          назад
        </button>
        <span className="wrapper__control-text"> {page} </span>
        <button className="wrapper__control-btn" onClick={handleNext}>
          вперёд
        </button>
      </div>
    </section>
  );
};

export default Anime;