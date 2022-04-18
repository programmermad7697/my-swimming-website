import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'

function logBook() {
  const [stroke, setStroke] = useState('')
  const [date, setDate] = useState('')
  const [timings, setTimings] = useState('')
  const [remarks, setRemarks] = useState('')

  return (
    <div>
      <Head>
        <title>Log Book</title>
      </Head>

      <Header />

      <main className="min-h-screen">
        <div className="mx-auto max-w-5xl py-16">
          <form className="space-y-4 py-4">
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
                type="date"
                name="date"
                id="date"
                className="rounded-md border-2 p-5 text-xl shadow-md outline-none focus:ring-indigo-500"
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
              <label htmlFor="remarks" className="pr-4">
                Remarks
              </label>
              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                name="remarks"
                id=""
                cols="22"
                rows="5"
                className="rounded-md border-2 p-5 text-xl shadow-md outline-none focus:ring-indigo-500"
                placeholder="Remarks"
              ></textarea>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="flex w-64 items-center justify-center rounded-md bg-indigo-500 py-3 px-2 text-white shadow"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default logBook
