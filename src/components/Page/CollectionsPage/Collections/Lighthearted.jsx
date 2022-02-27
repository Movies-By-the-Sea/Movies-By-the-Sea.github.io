import { useEffect, useState } from 'react'

import { Collection } from '../../../common/Collection/Collection';
import { getLightheartedFilms } from '../../../../services/MovieService';

import Loading from '../../../LoadingScreen/LoadingScreen';

export default function Animated() {

    const [films, setFilms] = useState();
    const [load, setLoad] = useState(true);
    const img = "https://ik.imagekit.io/mbts/lighthearted_E2LsCJQ6TI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1645938023320";

    useEffect(() => {
        getLightheartedFilms()
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    }, [])

  return load ? (<Loading />) : (
    <Collection
    img={img}
    alt={img}
    bg_info={"Take Me Somewhere Nice, Ena Sendijarevic"}
    heading={"Laid Back Days"}
    subheading={"Had a tough day at work and need a lift-me-up? Sit back, relax and let these films cover you in their warmth."}
    data={films}
    />
  )
}
