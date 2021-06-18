import React, { FC, useEffect, useRef } from 'react'
import { Table, Tag, Space, Col, Row } from 'antd';
import { useAppDispatch, useAppSelector } from '../../VariablesAndFunc/Functions';
import { ColumnsType } from 'antd/es/table';


const TIKER = 'Tiker'
const BID = "Bid"
const ASK = "Ask"
const HIGH = "High"
const LOW = "LOW"
const LAST = "LAST"




type Props = {

}


export const Content: FC<Props> = () => {
  const dispatch = useAppDispatch()
  let table = useAppSelector(state => state.counterSlice.table)

  const prevTableRef = useRef(table);

  useEffect(() => {
    prevTableRef.current = table;
  });

  function SetColor(text: any, prev: string | undefined, index: number) {
    let lowStyle = { background: "green", color: "#fff" }
    let largerStyle = { background: "red", color: "#fff" }

    return {
      props: {
        style: prev && +text > +prev ? lowStyle :
          prev && +text < +prev ? largerStyle : 
          index % 2 ? { background: "#f6f6f6" } : {}
      },
      children: <div>{text}</div>
    };
  }

  const columns: ColumnsType<{
    key: number;
    Tiker: string;
    Bid: string | undefined;
    Ask: string | undefined;
    High: string | undefined;
    LOW: string | undefined;
    LAST: string | undefined;
  }> = [
      {
        title: TIKER,
        dataIndex: TIKER,
        key: TIKER,
      },
      {
        title: BID,
        dataIndex: BID,
        key: BID,
        sorter: (a, b) => {
          if (a.Bid && b.Bid) {
            return +a.Bid - +b.Bid
          }
          return 0
        },
        render(text, record, i) {
          if (prevTableRef.current.length !== 0) {
            let prev = prevTableRef.current.find((item) => item.id === record.Tiker)
            return SetColor(text, prev?.bid, i)
          }
          return {
            children: <div>{text}</div>
          };
        }

      },
      {
        title: ASK,
        dataIndex: ASK,
        key: ASK,
        sorter: (a, b) => {
          if (a.Ask && b.Ask) {
            return +a.Ask - +b.Ask
          }
          return 0
        },
        render(text, record, i) {
          if (prevTableRef.current.length !== 0) {
            let prev = prevTableRef.current.find((item) => item.id === record.Tiker)
            return SetColor(text, prev?.ask, i)
          }
          return {
            children: <div>{text}</div>
          };
        }
      },
      {
        title: HIGH,
        dataIndex: HIGH,
        key: HIGH,
        sorter: (a, b) => {
          if (a.High && b.High) {
            return +a.High - +b.High
          }
          return 0
        },
        render(text, record, i) {
          if (prevTableRef.current.length !== 0) {
            let prev = prevTableRef.current.find((item) => item.id === record.Tiker)
            return SetColor(text, prev?.high, i)
          }
          return {
            children: <div>{text}</div>
          };
        }
      },
      {
        title: LOW,
        dataIndex: LOW,
        key: LOW,
        sorter: (a, b) => {
          if (a.LOW && b.LOW) {
            return +a.LOW - +b.LOW
          }
          return 0
        },
        render(text, record, i) {
          if (prevTableRef.current.length !== 0) {
            let prev = prevTableRef.current.find((item) => item.id === record.Tiker)
            return SetColor(text, prev?.low, i)
          }
          return {
            children: <div>{text}</div>
          };
        }
      },
      {
        title: LAST,
        dataIndex: LAST,
        key: LAST,
        sorter: (a, b) => {
          if (a.LAST && b.LAST) {
            return +a.LAST - +b.LAST
          }
          return 0
        },
        render(text, record, i) {
          if (prevTableRef.current.length !== 0) {
            let prev = prevTableRef.current.find((item) => item.id === record.Tiker)
            return SetColor(text, prev?.last, i)
          }
          return {
            children: <div>{text}</div>
          };
        }
      },
    ]

  let data = table.map((item, i) => {
    return {
      key: i,
      [TIKER]: item.id,
      [BID]: item.bid,
      [ASK]: item.ask,
      [HIGH]: item.high,
      [LOW]: item.low,
      [LAST]: item.last,


    }
  })



  return <>
    <Row style={{ padding: "10px" }}>
      <Col span={12}>
        <p>Реализация таблицы приходящих данных по websoket</p>
        <p>Инструменты:</p>
        <p>Saga для получения данных(Websoket)</p>
        <p>Typescript</p>
        <p>ToolkitRedux</p>
        <p>AntDesign</p>
      </Col>
      <Col span={12}>
        <p>Еable for getting data(Websoket)</p>
        <p>Tools:</p>
        <p>Saga get data(Websoket)</p>
        <p>Typescript</p>
        <p>ToolkitRedux</p>
        <p>AntDesign</p>
      </Col>
    </Row>

    <Table pagination={false} dataSource={data} columns={columns} />
  </>
}