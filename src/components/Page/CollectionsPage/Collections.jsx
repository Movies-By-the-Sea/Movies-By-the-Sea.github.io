import { Page } from '../../common/Page';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import img from '../../../images/collections.png';
import intl from '../../../images/collections/Cards/International Affair.png';
import horror from '../../../images/collections/Cards/Horror Nights.png';
import trueS from '../../../images/collections/Cards/True Stories.png';
import meta from '../../../images/collections/Cards/The Meta Experience.png';
import anime from '../../../images/collections/Cards/animated.png';
import roman from '../../../images/collections/Cards/romantic.png';
import scifi from '../../../images/collections/Cards/scifi.png';
import action from '../../../images/collections/Cards/Action.png';
import drama from '../../../images/collections/Cards/Drama.png';
import thriller from '../../../images/collections/Cards/Mystery.png';
import light from '../../../images/collections/Cards/Lighthearted.png';

import ScrollBar from '../../common/ScrollBar/ScrollBar';

import './collections.css';

export default function Collections() {

    const isMobile = useMediaQuery({query:'(max-width:600px)'});
    const navigate = useNavigate();

    const mapping = [
        {
            name: "Animation Land",
            poster: anime,
            link: "animated"
        },
        {
            name: "International Affair",
            poster: intl,
            link: "international"
        },
        {
            name: "Horror Nights",
            poster: horror,
            link: "horror"
        },
        {
            name: "True Stories",
            poster: trueS,
            link: "True-Story"
        },
        {
            name: "The Meta Experience",
            poster: meta,
            link: "meta"
        },
        {
            name: "Romantic Invitation",
            poster: roman,
            link: "romantic"
        },
        {
            name: "The SciFi Imagination",
            poster: scifi,
            link: "sci-fi"
        },
        {
            name: "Life of Action",
            poster: action,
            link: "action"
        },
        {
            name: "Soulful Drama",
            poster: drama,
            link: "drama"
        },
        {
            name: "Mystery Alley",
            poster: thriller,
            link: "thriller"
        },
        {
            name: "Laid Back Days",
            poster: light,
            link: "lighthearted"
        }
    ]

    const openPage = (item) => (e) => {
        e.preventDefault();
        navigate(`/collections/${item.link}`);
    }

  return (
      <Page img={img} alt={img} info={"Requiem For A Dream, Darren Arronofsky"}>
          <h1>Browser Collection</h1>
          <p>Select an experience from below to discover more such films</p>
          {isMobile ? (
            mapping.map((card) => {
                return (<img 
                src={card.poster} 
                alt={card.name} 
                key={card.name}
                onClick={openPage(card)}
                className="card-img-mob" />)
            })
          ) : ( 
            <ScrollBar
            data={mapping}
            openModal={openPage}
            className="collection-card"
            />)}
      </Page>
  )
}