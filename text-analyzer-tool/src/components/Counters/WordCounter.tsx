import React, { useEffect, useState } from 'react'

type WordCounterProps = {
  text: string
}

const WordCounter: React.FC<WordCounterProps> = ({ text }) => {
  const [wordCount, setWordCount] = useState<number>(0)

  useEffect(() => {
    const words = text
      .trim()
      .split(' ')
      .filter((word) => word !== '')
    setWordCount(words.length)
  }, [text])

  return (
    <div>
      <p>{wordCount}</p>
    </div>
  )
}

export default WordCounter
