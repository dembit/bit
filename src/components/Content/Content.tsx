import React, { FC, useEffect } from 'react'
import { Table, Tag, Space } from 'antd';
import { useAppDispatch, useAppSelector } from '../../VariablesAndFunc/Functions';
import { getWesoket } from '../../Redux/reducers/action';

const TIKER = 'Tiker'
const BID = "Bid"
const ASK = "Ask"
const HIGH = "High"
const LOW = "LOW"
const LAST = "LAST"

const columns = [
  {
    title: TIKER,
    dataIndex: TIKER,
    key: TIKER,
  },
  {
    title: BID,
    dataIndex: BID,
    key: BID,
  },
  {
    title: ASK,
    dataIndex: ASK,
    key: ASK,
  },
  {
    title: HIGH,
    dataIndex: HIGH,
    key: HIGH,
  },
  {
    title: LOW,
    dataIndex: LOW,
    key: LOW,
  },
  {
    title: LAST,
    dataIndex: LAST,
    key: LAST,
  },
]



type Props = {

}


export const Content: FC<Props> = () => {
  const dispatch = useAppDispatch()
  let table = useAppSelector(state => state.counterSlice.table)

  console.log("table")
  let data = table.map((item, i) => {
    return {
      key: i,
      [TIKER]: item.id,
      [BID]: item.bid,
      [ASK]: item.ask,
      [HIGH]: item.high,
      [LOW]: item.low,
      [LAST]: item.last
    }
  })

  return <Table pagination={false} dataSource={data} columns={columns} />
}