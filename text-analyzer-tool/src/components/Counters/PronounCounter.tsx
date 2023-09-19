import React, { useEffect, useState } from 'react'
import { pronouns } from '../../data/pronouns'

type PronounCounterProps = {
  text: string
}

const PronounCounter: React.FC<PronounCounterProps> = ({ text }) => {
  const [pronounCount, setPronounCount] = useState<number>(0)

  useEffect(() => {
    const words = text
      .trim()
      .split(' ')
      .filter((word) => word !== '')
    const pronounCount = words.filter((word) => pronouns.includes(word.toLowerCase())).length
    setPronounCount(pronounCount)
  }, [text])

  return (
    <div>
      <p>{pronounCount}</p>
    </div>
  )
}

export default PronounCounter
