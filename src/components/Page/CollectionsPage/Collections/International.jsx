import { useEffect, useState } from 'react'

import { Collection } from '../../../common/Collection/Collection';
import { getInternationalFilms } from '../../../../services/MovieService';

import Loading from '../../../LoadingScreen/LoadingScreen';

export default function International() {

    const [films, setFilms] = useState();
    const [load, setLoad] = useState(true);
    const img = "https://ik.imagekit.io/mbts/international_MegfEuSwh.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645938023071";

    useEffect(() => {
        getInternationalFilms()
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    }, [])

  return load ? (<Loading />) : (
    <Collection
    img={img}
    alt={img}
    bg_info={"The Handmaiden, Park Chan Wook"}
    heading={"The International Affair"}
    subheading={"Presenting before you, the best that cinema has to offer from land far and beyond."}
    data={films}
    />
  )
}
