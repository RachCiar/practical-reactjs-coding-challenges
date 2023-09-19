import React from 'react'
import './index.scss'
import AverageReadingTimeCounter from '../Counters/AverageReadingTimeCounter'
import LongestWordCounter from '../Counters/LongestWordCounter'

type BottomResultBoxProps = {
  text: string
}

const BottomResultBox: React.FC<BottomResultBoxProps> = ({ text }) => {
  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: <AverageReadingTimeCounter text={text} />,
    },
    {
      title: 'Longest word:',
      value: <LongestWordCounter text={text} />,
    },
  ]

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
