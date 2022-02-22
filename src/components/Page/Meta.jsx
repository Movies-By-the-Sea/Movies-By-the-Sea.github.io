import { useEffect, useState } from 'react'

import {Collection} from '../common/Collection/Collection';

import img from '../../images/collections/meta.jpg';
import { getMetaFilms } from '../../services/MovieService';

export default function Horror() {

    const [films, setFilms] = useState();
    const [load, setLoad] = useState(true);

    useEffect(() => {
        getMetaFilms()
        .then((res) => {
            setFilms(res);
            setLoad(false);
        })
    }, [])

  return load ? ("Loading...") : (
    <Collection
    img={img}
    alt={img}
    bg_info={"I’m Thinking Of Ending Things, Charile Kaufmann"}
    heading={"The Meta Experience"}
    subheading={"Feeling inspired? We got just the right ones here, which will transcend you to a new plane. An artistic powerhouse."}
    data={films}
    />
  )
}
