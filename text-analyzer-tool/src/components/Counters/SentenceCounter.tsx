import React, { useEffect, useState } from 'react'

type SentenceCounterProps = {
  text: string
}

const SentenceCounter: React.FC<SentenceCounterProps> = ({ text }) => {
  const [sentenceCount, setSentenceCount] = useState(0)

  useEffect(() => {
    setSentenceCount(text.split(/[.!?]+/).length - 1)
  }, [text])

  return (
    <div>
      <p>{sentenceCount}</p>
    </div>
  )
}

export default SentenceCounter
