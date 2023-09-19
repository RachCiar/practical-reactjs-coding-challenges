import React, { useEffect, useState } from 'react'

type AverageReadingTimeCounterProps = {
  text: string
}

const AverageReadingTimeCounter: React.FC<AverageReadingTimeCounterProps> = ({ text }) => {
  const [averageReadingTime, setAverageReadingTime] = useState<string>('0:00')

  useEffect(() => {
    const words = text
      .trim()
      .split(' ')
      .filter((word) => word !== '')
    const readingTime = words.length / 200
    const minutes = Math.floor(readingTime)
    const seconds = Math.floor((readingTime - minutes) * 60)
    setAverageReadingTime(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`)
  }, [text])

  return (
    <div>
      <p>{averageReadingTime}</p>
    </div>
  )
}

export default AverageReadingTimeCounter
