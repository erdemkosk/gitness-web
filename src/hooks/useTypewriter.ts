import { useState, useEffect } from 'react'

export const useTypewriter = (text: string, speed: number = 50, delay: number = 0) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (delay > 0 && !isTyping) {
      timeout = setTimeout(() => setIsTyping(true), delay)
      return () => clearTimeout(timeout)
    }

    if (currentIndex < text.length && (delay === 0 || isTyping)) {
      timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [text, speed, delay, currentIndex, isTyping])

  return displayText
} 