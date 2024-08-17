import { type FC } from 'react';
import './AnimeList.scss';
import Anime from '@/components/Card/Anime';

export interface IAnimeListProps {

}
const AnimeList: FC<IAnimeListProps> = ({})=> {
return (
        <section className='section'>
            <Anime/>
        </section>
    )
}
export default AnimeList