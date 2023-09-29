import { useEffect, useState } from "react"
import axios from "axios"
import { shuffleArray } from "./utils"

interface Quote {
  quote: string
  author: string
}

export const useQuoteFetcher = (apiUrl: string) => {
  const [quoteList, setQuoteList] = useState<Quote[]>([])
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null)
  const [currentIndex, setcurrentIndex] = useState<number | null>(null)
  const [quoteHistory, setQuoteHistory] = useState<Quote[]>([])

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get<Quote[]>(apiUrl)
        const shuffledQuotes = shuffleArray(response.data)
        setQuoteList(shuffledQuotes)
        const initialQuote = shuffledQuotes[Math.floor(Math.random() * shuffledQuotes.length)]
        setRandomQuote(initialQuote)
        setQuoteHistory([initialQuote])
        setcurrentIndex(0)
      } catch (error) {
        console.error("Failed to fetch quotes:", error)
      }
    }

    fetchQuotes()
  }, [apiUrl])

  const getRandomQuote = () => {
    const newRandomQuote = quoteList[Math.floor(Math.random() * quoteList.length)]
    setRandomQuote(newRandomQuote)
    setQuoteHistory((prevHistory) => [...prevHistory, newRandomQuote])
    setcurrentIndex((prevIndex) => (prevIndex !== null ? prevIndex + 1 : 0))
  }

  const getPreviousQuote = () => {
    if (currentIndex !== null && currentIndex > 0) {
      const newIndex = currentIndex - 1
      setcurrentIndex(newIndex)
      const prevQuote = quoteHistory[newIndex]
      setRandomQuote(prevQuote)
    }
  }

  return {
    randomQuote,
    getRandomQuote,
    getPreviousQuote
  }
}
