import { heroes } from "../data/heroes"


export const getHeroById = ( id = '' ) => {
    console.log('getHeroById Called');
    return heroes.find( hero => hero.id === id );
}
