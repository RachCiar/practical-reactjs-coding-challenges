import React, { useEffect, useState } from 'react'

type LongestWordCounterProps = {
  text: string
}

const LongestWordCounter: React.FC<LongestWordCounterProps> = ({ text }) => {
  const [longestWord, setLongestWord] = useState<string>('')

  useEffect(() => {
    const words = text.split(/[\s\n]+/).filter((word) => word.trim() !== '')
    const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), '')
    setLongestWord(longestWord)
  }, [text])

  return (
    <div>
      <p>{longestWord}</p>
    </div>
  )
}

export default LongestWordCounter
