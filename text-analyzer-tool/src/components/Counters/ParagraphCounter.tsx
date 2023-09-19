import React, { useEffect, useState } from 'react'

type ParagraphCounterProps = {
  text: string
}

const ParagraphCounter: React.FC<ParagraphCounterProps> = ({ text }) => {
  const [paragraphCount, setParagraphCount] = useState<number>(0)

  useEffect(() => {
    const trimmedText = text.trim()
    const paragraphs =
      trimmedText === ''
        ? []
        : trimmedText.split('\n\n').filter((paragraph) => paragraph.trim() !== '')
    setParagraphCount(paragraphs.length)
  }, [text])

  return (
    <div>
      <p>{paragraphCount}</p>
    </div>
  )
}

export default ParagraphCounter
