import React, { useState } from 'react'
import { EditorState } from 'draft-js'
import dynamic from 'next/dynamic'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import Head from 'next/head'
import Header from '../components/Header'

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  {
    ssr: false,
  }
)

function LogBook() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
  }

  console.log(editorState)

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-16">
      <Header />

      <Head>
        <title>Swimming Madness - Log Book</title>
      </Head>

      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName="flex sticky top-0 z-50 !justify-center mx-auto"
        editorClassName="mt-6 bg-white shadow-lg max-w-6xl mx-auto mb-12 border-2 border-grey p-10 rounded-lg"
      />
    </div>
  )
}

export default LogBook
