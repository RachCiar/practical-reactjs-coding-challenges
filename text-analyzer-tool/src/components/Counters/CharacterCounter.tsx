import React, { useEffect, useState } from 'react'

type CharacterCounterProps = {
  text: string
}

const CharacterCounter: React.FC<CharacterCounterProps> = ({ text }) => {
  const [characterCount, setCharacterCount] = useState<number>(0)

  useEffect(() => {
    setCharacterCount(text.length)
  }, [text])

  return (
    <div>
      <p>{characterCount}</p>
    </div>
  )
}

export default CharacterCounter
