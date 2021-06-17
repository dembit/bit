import axios from "axios";
import {
  all,
  put,
  takeEvery,
  select,
} from "redux-saga/effects";
import { ActionType, SubscriberType, Tiker } from "../../Types/Tipes";
import { setSingleCurrencies, setTikers } from "../reducers/bitcoinReducer";
import { RootState } from "../redux";

function* connect() {
  yield put({
    type: ActionType.WS_SEND_MESSAGE,
    value: {
      method: "getSymbols",
      params: {},
      id: 1,
    },
  });

  try {
  } catch (e) {}
}

function* message(action: any) {
  const { id, result, method, params } = action.value;

  if (method && method === "ticker") {
    let res: SubscriberType = params;

    const state: RootState = yield select();
    let { table } = state.counterSlice;

    let index = table.findIndex((item, i) => {
        if(item.id === res.symbol) {
          if(!item.symbol) {
            return true
          }

          if(item.symbol) {
            for (let property in item) {
              if (property in res) {
                  // @ts-ignore
                  if(item[property] !== res[property]) {
                     return true
                  }
              }
            }
          }
        }

        
    })

    console.log(index, "index")
    if(index !== -1) {
      yield put(setSingleCurrencies({currency: res, index}))
      return
    }

    return;
  }

  if (id === 1 && result) {
    let res: Tiker[] = result;
    yield put(setTikers(res));
    yield all(
      res.map(function (item, i) {
        if (i > 20) {
          return;
        }
        return put({
          type: ActionType.WS_SEND_MESSAGE,
          value: {
            method: "subscribeTicker",
            params: { symbol: item.id },
            id: i + 2,
          },
        });
      })
    );
    return;
  }

  try {
  } catch (e) {}
}

function* todoSaga() {
  yield all([
    takeEvery(ActionType.WS_CONNECTED, connect),
    takeEvery(ActionType.WS_MESSAGE, message),
  ]);
}

export default todoSaga;
