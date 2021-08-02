import { combineReducers } from 'redux';
import { postsReducer } from './Posts/reducer';
import { genresReducer } from "./Genres/reducer";

export const rootReducer = combineReducers({
   posts: postsReducer,
   genres: genresReducer,
});
