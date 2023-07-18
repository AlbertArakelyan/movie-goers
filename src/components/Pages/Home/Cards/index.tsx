import React from 'react';
import {ContainerPropTypes} from './types';
import View from './view';
import {useRTKSelector} from "@/store/hooks";
import {selectMovieQueryState} from "@/store/slices/movie";

const CARDS = [
  {
    "adult": false,
    "backdrop_path": "/qWQSnedj0LCUjWNp9fLcMtfgadp.jpg",
    "genre_ids": [
      28,
      12,
      878
    ],
    "id": 667538,
    "original_language": "en",
    "original_title": "Transformers: Rise of the Beasts",
    "overview": "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
    "popularity": 11856.991,
    "poster_path": "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
    "release_date": "2023-06-06",
    "title": "Transformers: Rise of the Beasts",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 1304
  },
  {
    "adult": false,
    "backdrop_path": "/oqP1qEZccq5AD9TVTIaO6IGUj7o.jpg",
    "genre_ids": [
      14,
      28,
      12
    ],
    "id": 455476,
    "original_language": "en",
    "original_title": "Knights of the Zodiac",
    "overview": "When a headstrong street orphan, Seiya, in search of his abducted sister unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess, sent to watch over humanity. Can he let his past go and embrace his destiny to become a Knight of the Zodiac?",
    "popularity": 2030.307,
    "poster_path": "/tBiUXvCqz34GDeuY7jK14QQdtat.jpg",
    "release_date": "2023-04-27",
    "title": "Knights of the Zodiac",
    "video": false,
    "vote_average": 6.6,
    "vote_count": 504
  },
  {
    "adult": false,
    "backdrop_path": "/uyi0Ytkkw4pgT4GkYZHdqravjT5.jpg",
    "genre_ids": [
      28,
      18
    ],
    "id": 678512,
    "original_language": "en",
    "original_title": "Sound of Freedom",
    "overview": "The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
    "popularity": 1759.455,
    "poster_path": "/mx4O9OEvIB265VM3UATLslsSW5t.jpg",
    "release_date": "2023-07-03",
    "title": "Sound of Freedom",
    "video": false,
    "vote_average": 8.1,
    "vote_count": 102
  },
  {
    "adult": false,
    "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
    "genre_ids": [
      16,
      10751,
      12,
      14,
      35
    ],
    "id": 502356,
    "original_language": "en",
    "original_title": "The Super Mario Bros. Movie",
    "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    "popularity": 1105.898,
    "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    "release_date": "2023-04-05",
    "title": "The Super Mario Bros. Movie",
    "video": false,
    "vote_average": 7.8,
    "vote_count": 5674
  },
]
const CardsContainer: React.FC<ContainerPropTypes> = () => {
  const { isFetching, data = [], error } = useRTKSelector(selectMovieQueryState);
  console.log(isFetching, data);
  return <View list={data} error={error} isFetching={isFetching} />
}
export default React.memo(CardsContainer);