'use client';

import { useState } from 'react';
import { TextScramble } from '@/components/ui/text-scramble';

export function Name({name} : {name: string}) {
  const [isTrigger, setIsTrigger] = useState(false);

  return (
    <a
      href='#'
      className='transition-colors text-zinc-500 hover:text-black dark:hover:text-white'
    >
      <TextScramble
        className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'
        as='span'
        speed={0.01}
        trigger={isTrigger}
        onHoverStart={() => setIsTrigger(true)}
        onScrambleComplete={() => setIsTrigger(false)}
      >
        {name}
      </TextScramble>
    </a>
  );
}
