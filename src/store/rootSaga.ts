import { all } from 'redux-saga/effects';
import { postsSaga } from './Posts/sagas';
import { genresSaga } from "./Genres/sagas";

export function* rootSaga() {
   yield all([postsSaga(), genresSaga()]);
}
