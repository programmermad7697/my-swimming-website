import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import Header from '../components/Header'

function logBook() {
  const [stroke, setStroke] = useState('')
  const [date, setDate] = useState('')
  const [timings, setTimings] = useState('')
  const [distance, setDistance] = useState('')
  const [remarks, setRemarks] = useState('')

  const [APIdata, setAPIdata] = useState([])
  // const [refresh, setRefresh] = useState([])

  // const onSubmit = () => {
  //   axios
  //     .post(
  //       `https://sheet.best/api/sheets/1b5ef263-a62d-4d90-a040-2140a466cb57`,
  //       {
  //         stroke,
  //         date,
  //         timings,
  //         distance,
  //         remarks,
  //       }
  //     )
  //     .then((data) => {
  //       setRefresh(data)
  //     })
  // }

  useEffect(() => {
    axios
      .get(`https://sheet.best/api/sheets/1b5ef263-a62d-4d90-a040-2140a466cb57`)
      .then((incomingData) => {
        setAPIdata(incomingData.data)
      })
  }, [])

  return (
    <div>
      <Head>
        <title>Swimming Madness - Log Book</title>
      </Head>

      <Header />

      <main className="min-h-screen">
        <div className="mx-auto max-w-5xl py-16">
          {/* <form className="space-y-4 py-4">
            <div className="flex items-center justify-center">
              <label htmlFor="stroke" className="pr-4">
                Stroke
              </label>
              <input
                value={stroke}
                onChange={(e) => setStroke(e.target.value)}
                type="text"
                name="stroke"
                id="stroke"
                className="rounded-md border-2 p-5 text-xl shadow-md outline-none focus:ring-indigo-500"
                placeholder="Your Stroke"
              />
            </div>

            <div className="flex items-center justify-center">
              <label htmlFor="date" className="pr-4">
                Date
              </label>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="text"
                name="date"
                id="date"
                className="rounded-md border-2 p-5 text-xl shadow-md outline-none focus:ring-indigo-500"
                placeholder="Date"
              />
            </div>

            <div className="flex items-center justify-center">
              <label htmlFor="timing" className="pr-4">
                Timings
              </label>
              <input
                value={timings}
                onChange={(e) => setTimings(e.target.value)}
                type="text"
                name="timing"
                id="timing"
                className="rounded-md border-2 p-5 text-xl shadow-md outline-none focus:ring-indigo-500"
                placeholder="Timings"
              />
            </div>

            <div className="flex items-center justify-center">
              <label htmlFor="timing" className="pr-4">
                Distance
              </label>
              <input
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                type="text"
                name="distance"
                id="distance"
                className="rounded-md border-2 p-5 text-xl shadow-md outline-none focus:ring-indigo-500"
                placeholder="Distance"
              />
            </div>

            <div className="flex items-center justify-center">
              <label htmlFor="remarks" className="pr-4">
                Remarks
              </label>
              <input
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                name="remarks"
                id="remarks"
                type="text"
                className="rounded-md border-2 p-5 text-xl shadow-md outline-none focus:ring-indigo-500"
                placeholder="Remarks"
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="flex w-64 items-center justify-center rounded-md bg-indigo-500 py-3 px-2 text-white shadow"
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
          </form> */}

          <h3>
            Please write your Logbook in the Google Spreadsheets and It will
            appear here.
          </h3>
          <h3>Logging Your Timing, Coming soon...</h3>
        </div>

        <div className="px-10">
          <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Stroke</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Timings</Table.HeaderCell>
                <Table.HeaderCell>Distance</Table.HeaderCell>
                <Table.HeaderCell>Remarks</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {APIdata.map((data) => {
                return (
                  <Table.Row key={data.Stroke}>
                    <Table.Cell>{data.Stroke}</Table.Cell>
                    <Table.Cell>{data.Date}</Table.Cell>
                    <Table.Cell>{data.Timings}</Table.Cell>
                    <Table.Cell>{data.Distance}</Table.Cell>
                    <Table.Cell>
                      {!data.Remarks ? <h3>-</h3> : data.Remarks}
                    </Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body>
          </Table>
        </div>
      </main>
    </div>
  )
}

export default logBook
