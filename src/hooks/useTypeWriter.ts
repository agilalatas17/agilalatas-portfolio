'use client';

import { TypeWriterProps } from '@/types/typewriter';
import { useState, useEffect } from 'react';

export const useTypeWriter = ({
  words,
  loop = true,
  typeSpeed = 150,
  deleteSpeed = 50,
  delaySpeed = 1500,
}: TypeWriterProps) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const currentWordIndex = loopNum % words.length;
      const fullText = words[currentWordIndex];

      setText((prevText) => {
        if (isDeleting) {
          return fullText.substring(0, prevText.length - 1);
        } else {
          return fullText.substring(0, prevText.length + 1);
        }
      });

      let typingSpeed = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && text === fullText) {
        if (!loop && loopNum === words.length - 1) return;
        typingSpeed = delaySpeed;
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        typingSpeed = typeSpeed;
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, words, typeSpeed, deleteSpeed, delaySpeed, loop]);

  return { text, isDeleting, currentWord: words[loopNum % words.length] };
};
