import { GenreInterface } from '../../interfaces';

export const fetchGenres = () => ({
    type: 'GENRES/FETCH',
});

export const setGenres = (payload: GenreInterface[]) => ({
    type: 'GENRES/SET',
    payload,
});

export const createGenres = (payload: GenreInterface) => ({
    type: 'GENRES/ADD',
    payload,
});



