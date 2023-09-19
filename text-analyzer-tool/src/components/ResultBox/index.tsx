import React from 'react'
import './index.scss'
import WordCounter from '../Counters/WordCounter'
import CharacterCounter from '../Counters/CharacterCounter'
import SentenceCounter from '../Counters/SentenceCounter'
import ParagraphCounter from '../Counters/ParagraphCounter'
import PronounCounter from '../Counters/PronounCounter'

type ResultBoxProps = {
  text: string
}

const ResultBox: React.FC<ResultBoxProps> = ({ text }) => {
  const resultBar = [
    {
      title: 'Words',
      value: <WordCounter text={text} />,
    },
    {
      title: 'Characters',
      value: <CharacterCounter text={text} />,
    },
    {
      title: 'Sentences',
      value: <SentenceCounter text={text} />,
    },
    {
      title: 'Paragraphs ',
      value: <ParagraphCounter text={text} />,
    },
    {
      title: 'Pronouns',
      value: <PronounCounter text={text} />,
    },
  ]

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
