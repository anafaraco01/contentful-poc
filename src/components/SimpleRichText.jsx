import RichTextParser from '@/lib/RichTextParser'
import React from 'react'

export default function SimpleRichText({content}) {
  const { body } = content.fields;
  console.log(body.content)
  return (
    <div className='py-10 px-6'>
      Hello
        <RichTextParser content={body} />
    </div>
  )
}
