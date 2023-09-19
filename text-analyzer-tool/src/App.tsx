import { useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'

const App: React.FC = () => {
  const [text, setText] = useState<string>('')

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox text={text} />
          <TextArea updateText={setText} />
          <BottomResultBox text={text} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
