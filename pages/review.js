import Head from 'next/head'
import { useState } from 'react'
import { Button, Form, TextArea } from 'semantic-ui-react'
import Header from '../components/Header'

function logBook() {
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [message, setMessage] = useState()

  return (
    <div>
      <Head>
        <title>Swimming Madness - Review</title>
      </Head>

      <Header />

      <main className="min-h-screen items-center justify-center">
        <div className="mx-auto max-w-2xl py-16">
          <Form className="attached fluid segment">
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Name"
                placeholder="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Form.Input
                fluid
                label="Email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <TextArea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button color="blue">Submit</Button>
          </Form>
        </div>
      </main>
    </div>
  )
}

export default logBook
