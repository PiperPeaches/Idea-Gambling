'use client';

import { useState } from "react";
export default function Home() {

const action: string[] = ["build", "design", "refactor","animate"]
const subjects: string[] = ["a music app", "a gambling app", "a game", "a website"]
const constraints: string[] = ["using material 3 ui", "using tailwind css", "using next js", "using react", "using vanilla js"]
const wildCard: string[] = ["in 5 minuets", "in 1 hour", "in only html", "in a new language", "no backspace allowed", "in vim", "using a new keyboard and mouse", "with your eyes layout"]

const randomAction = action[Math.floor(Math.random() * action.length)];
const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
const randomConstraint = constraints[Math.floor(Math.random() * constraints.length)];
const randomWildCard = wildCard[Math.floor(Math.random() * wildCard.length)];

interface SpinResult {
    action: string;
    subject: string;
    constraint: string;
}

const [result, setResult] = useState<SpinResult>({
    action: "???",
    subject: "???",
    constraint: "???"
});

const spin = () => {

    setIsSpinning(true);
    animateReel('action', 0, 300);
    animateReel('subject', 0, 500);
    animateReel('constraint', 0, 700);
  }

interface WildCardResult {
    wildCard: string;
    isLocked: boolean;
}

const [wildCardResult, setWildCard] = useState<WildCardResult>({
    wildCard: "Click to Reveal Wild Card",
    isLocked: false
});

const wildCardIndex = () => {
    const randomWildCard = wildCard[Math.floor(Math.random() * wildCard.length)];
    if (wildCardResult.isLocked) {
      return;
    }

    setWildCard({
        wildCard: randomWildCard,
        isLocked: true
    });
  }

const [isSpinning, setIsSpinning] = useState(false);

const getRandomWord = (reelKey: string) =>  {
  if (reelKey === 'action') return action[Math.floor(Math.random() * action.length)];
  if (reelKey === 'subject') return subjects[Math.floor(Math.random() * subjects.length)];
  if (reelKey === 'constraint') return constraints[Math.floor(Math.random() * constraints.length)];
  return wildCard[Math.floor(Math.random() * wildCard.length)];
}

const animateReel = (reelKey: keyof SpinResult | 'wildcard', currentDelay: number, maxDelay: number) => {
  const newValue = getRandomWord(reelKey);
  if (reelKey === 'wildcard') {
    if (wildCardResult.isLocked) return;
    setWildCard({ wildCard: newValue, isLocked: true})
  } else {
    setResult(prev => ({ ...prev, [reelKey]: newValue }));
  }

  if (currentDelay < maxDelay) {
    setTimeout(() => animateReel(reelKey, currentDelay + 10, maxDelay), currentDelay);
  } else {
    if (reelKey === 'constraint') {
      setIsSpinning(false);
    }
  }
};

  return (
    <div >
      <div >
        <div>
          <div>{result.action}</div>
          <div>{result.subject}</div>
          <div>{result.constraint}</div>
          <button onClick={wildCardIndex}>{wildCardResult.wildCard}</button>
        </div>
        <button onClick={spin}>Spin</button>
      </div>
    </div>
  );
}
