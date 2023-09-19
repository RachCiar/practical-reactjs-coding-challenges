import './index.scss'

type TextAreaProps = {
  updateText: (text: string) => void
}

const TextArea: React.FC<TextAreaProps> = ({ updateText }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateText(event.target.value)
  }

  return (
    <textarea className="text-area" placeholder="Paste your text here..." onChange={handleChange} />
  )
}

export default TextArea
