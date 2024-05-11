import landing_page from '../media/images/bg/landing_page.webp';
import top_30 from '../media/images/bg/top_30.webp';
import collections from '../media/images/bg/collections.webp';

import top_30_alt from '../media/images/bg/mobile/top_30.webp';
import collections_alt from '../media/images/bg/mobile/collections.webp';

import landing_page_vd from '../media/video/landing_page.webm';


export const bg_data = {
    landingPage: {
        image: landing_page,
        alt: undefined,
        video: landing_page_vd,
        api_endpoint: "motd",
        info: undefined
    },
    top30: {
        image: top_30,
        alt: top_30_alt,
        video: undefined,
        api_endpoint: "top30",
        info: undefined
    },
    collections: {
        image: collections,
        alt: collections_alt,
        video: undefined,
        api_endpoint: undefined,
        info: undefined
    }
}