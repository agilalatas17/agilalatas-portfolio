'use client';

import { TypeWriterProps } from '@/types/typewriter';
import { useTypeWriter } from '@/hooks/useTypeWriter';

function TypeWriterAnimation(props: TypeWriterProps) {
  const { text } = useTypeWriter(props);

  return (
    <span className="inline-block min-w-[20px]">
      {text}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
}

export default TypeWriterAnimation;
