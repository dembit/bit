import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import counterSlice  from './reducers/bitcoinReducer'
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger'
import { rootSaga } from './Saga/rootSaga';
import { socketMiddleware } from './../socketMiddleware';


const sagaMiddleware = createSagaMiddleware();

const socket = socketMiddleware("wss://api.exchange.bitcoin.com/api/2/ws")

export const store = configureStore({
  reducer: {
    counterSlice,
  },
  middleware: new MiddlewareArray().concat(socket, sagaMiddleware, logger),
})


sagaMiddleware.run(rootSaga)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


