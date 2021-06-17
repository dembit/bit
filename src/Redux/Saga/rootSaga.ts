import { all, fork } from "redux-saga/effects";
import todoSaga from "./Saga";

export function* rootSaga() {
  yield all([fork(todoSaga)]);
}