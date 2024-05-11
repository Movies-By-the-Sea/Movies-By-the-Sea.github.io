import scifi from '../../../media/images/collections/Cards/scifi.webp';
import drama from '../../../media/images/collections/Cards/Drama.webp';
import action from '../../../media/images/collections/Cards/Action.webp';
import anime from '../../../media/images/collections/Cards/animated.webp';
import roman from '../../../media/images/collections/Cards/romantic.webp';
import essen from '../../../media/images/collections/Cards/MustWatch.webp';
import thriller from '../../../media/images/collections/Cards/Mystery.webp';
import light from '../../../media/images/collections/Cards/Lighthearted.webp';
import trueS from '../../../media/images/collections/Cards/True Stories.webp';
import horror from '../../../media/images/collections/Cards/Horror Nights.webp';
import meta from '../../../media/images/collections/Cards/The Meta Experience.webp';
import intl from '../../../media/images/collections/Cards/International Affair.webp';

import anime_bg from '../../../media/images/bg/animated.webp';
import international_bg from '../../../media/images/bg/international.webp';
import essentials_bg from '../../../media/images/bg/essentials.webp';
import horror_bg from '../../../media/images/bg/horror.webp';
import true_story_bg from '../../../media/images/bg/true_story.webp';
import meta_bg from '../../../media/images/bg/meta.jpg';
import romantic_bg from '../../../media/images/bg/romantic.webp';
import scifi_bg from '../../../media/images/bg/scifi.webp';
import action_bg from '../../../media/images/bg/action.webp';
import drama_bg from '../../../media/images/bg/drama.webp';
import mystery_bg from '../../../media/images/bg/mystery.webp';
import lighthearted_bg from '../../../media/images/bg/lighthearted.webp';

export const mapping = [
    {
        name: "Animation Land",
        link: "animated",
        subtitle: "Discover some of the finest animated movies that do more than just entertain the inner child",
        bg_info: "Perfect Blue, Satoshi Kon",
        poster: anime,
        bg: anime_bg

    },
    {
        name: "International Affair",
        link: "foreign",
        subtitle: "Presenting before you, the best that cinema has to offer from land far and beyond.",
        bg_info: "The Handmaiden, Park Chan Wook",
        poster: intl,
        bg: international_bg,

    },
    {
        name: "MBTS Essentials",
        link: "must-watch",
        subtitle: "There are some films which deserves to be on everyone’s bucket list. Sharing here are some of the #MustWatch movies.",
        bg_info: "The Green Knight, David Lowery",
        poster: essen,
        bg: essentials_bg
    },
    {
        name: "Horror Nights",
        link: "horror",
        subtitle: "Feeling a bit darring, are we? Well, we’ve got just the right set of films for you here!",
        bg_info: "The VVitch, Robert Eggers",
        poster: horror,
        bg: horror_bg
    },
    {
        name: "True Stories",
        link: "true-story",
        subtitle: "Too much fantasy can be a bit much. Get a breather with our true stories collection.",
        bg_info: "Lawrence Of Arabia, David Lean",
        poster: trueS,
        bg: true_story_bg
    },
    {
        name: "The Meta Experience",
        link: "meta",
        subtitle: "Feeling inspired? We got just the right ones here, which will transcend you to a new plane. An artistic powerhouse.",
        bg_info: "I’m Thinking Of Ending Things, Charile Kaufmann",
        poster: meta,
        bg: meta_bg
    },
    {
        name: "Romantic Invitation",
        link: "romance",
        subtitle: "In the mood for some love? We got you covered! Hold your loved one close as we take you on a journey to wonderland!",
        bg_info: "Moonrise Kingdom, Wes Anderson",
        poster: roman,
        bg: romantic_bg
    },
    {
        name: "The SciFi Imagination",
        link: "sci-fi",
        subtitle: "Enter a world where the only limit to what humans can achieve is their imagination.",
        bg_info: "Blade Runner 2047, Denis Villeneuve",
        poster: scifi,
        bg: scifi_bg
    },
    {
        name: "Life of Action",
        link: "action",
        subtitle: "For the days when one wants to just watch some mindless entertainment. Whats better than some good’ol action films!",
        bg_info: "Dunkirk, Christopher Nolan",
        poster: action,
        bg: action_bg

    },
    {
        name: "Soulful Drama",
        link: "drama",
        subtitle: "For times when all you need is to sit back, relax and watch a slice of life getting acted out in front of you.",
        bg_info: "The Revenant, Alejandro Inarritu",
        poster: drama,
        bg: drama_bg
    },
    {
        name: "Mystery Alley",
        link: "mystery",
        subtitle: "Full of twists and turns, this alley will bowl you over upside down. Perfect for friday nights with popcorn!",
        bg_info: "Mulholland Drive, David Lynch",
        poster: thriller,
        bg: mystery_bg
    },
    {
        name: "Laid Back Days",
        link: "lighthearted",
        subtitle: "Had a tough day at work and need a lift-me-up? Sit back, relax and let these films cover you in their warmth.",
        bg_info: "Take Me Somewhere Nice, Ena Sendijarevic",
        poster: light,
        bg: lighthearted_bg
    }
]