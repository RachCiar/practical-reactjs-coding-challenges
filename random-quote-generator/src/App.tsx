import classnames from "classnames"
import { ReactComponent as Button } from "../src/assets/icons/button.svg"
import { ReactComponent as Quotation } from "../src/assets/icons/quotation.svg"
import { ReactComponent as Twitter } from "../src/assets/icons/twitter.svg"
import { ReactComponent as Whatsapp } from "../src/assets/icons/whatsapp.svg"
import "./App.css"
import { useQuoteFetcher } from "./useQuoteFetcher"




function App() {
const apiURL = 'http://localhost:4000/quotes'
const { randomQuote, getRandomQuote, getPreviousQuote } = useQuoteFetcher(apiURL) 

const getShareableQuote = () => {
  if (randomQuote) {
    return encodeURIComponent(`"${randomQuote.quote}" - ${randomQuote.author}`)
  }
  return ''
}

  return (
    <>
      <header>
        <div className="top-strip" />
      </header>
      <div className="container">
        <div className="quotation-box ">
          <Quotation />
          <div className="quote">
          {randomQuote ? (
              <>
                <p>{randomQuote.quote}</p>
                <span>- {randomQuote.author}</span>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="bottom-navigation">
            <div>
              <Button className={classnames("rotate cp")} onClick={getPreviousQuote}  />
              <Button className="cp" onClick={getRandomQuote} />
            </div>
            <div className="share">
              <span>Share At:</span>
              <a href={`https://twitter.com/intent/tweet?text=${getShareableQuote()}`} target="_blank" rel="noopener noreferrer">
              <Twitter title="Post this quote on twitter!" className="cp" />
              </a>
              <a href={`https://wa.me/?text=${getShareableQuote()}`} target="_blank" rel="noopener noreferrer">
              <Whatsapp title="Post this quote on WhatsApp!" className="cp" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-strip" />
    </>
  )
}

export default App
