'use client';

import { useState } from "react";
export default function Home() {

const action: string[] = [
  "Build",
  "Create",
  "Design",
  "Develop",
  "Code",
  "Implement",
  "Construct",
  "Invent",
  "Engineer",
  "Craft",
  "Assemble",
  "Produce",
  "Formulate",
  "Devise",
  "Synthesize",
  "Fabricate",
  "Generate",
  "Write",
  "Compose",
  "Conceive",
  "Program",
  "Hack",
  "Debug",
  "Optimize",
  "Refactor",
  "Test",
  "Deploy",
  "Integrate",
  "Automate",
  "Script",
  "Compile",
  "Execute",
  "Run",
  "Evaluate",
  "Analyze",
  "Design patterns with",
]
const subjects: string[] = [
  "an app for dogs",
  "file storage system",
  "a new programming language",
  "a social media platform",
  "a site for sharing memes",
  "a game about gambling",
  "a code editor",
  "a music visualizer",
  "a weather app",
  "a fitness tracker",
  "a recipe app",
  "a virtual pet",
  "a cryptocurrency exchange",
  "a blogging platform",
  "a video streaming service",
  "budgeting software",
  "a language learning app",
  "a meditation timer",
  "a to-do list app",
  "a calendar app",
  "a book recommendation engine",
  "The last project you did"
]
const constraints: string[] = [
  "in under an hour",
  "without using the letter 'e'",
  "for a non-existent programming language",
]
const wildCard: string[] = [
  "No backspace allowed",
  "Use new programming language",
  "No if statements",
  "Wear oven mitts",
  "No loops allowed",
  "Single line of code",
  "No using 'e' key",
  "No syntax highlighting",
  "Delete code every 5 minutes",
  "Keyboard only, no mouse",
  "Joke in every string",
  "Three line function limit",
  "No external libraries/frameworks",
  "Use hexadecimal numbers only",
  "Use an esoteric language",
  "Write code backwards",
  "No semi-colons",
  "Single argument functions",
  "Grayscale monitor mode",
  "No boolean literals",
  "Code must be poetry",
  "Use Vim, no experience no google",
  "Base64 encoded strings",
  "No else keywords",
  "Use non-Latin alphabet",
  "Long variable names",
  "No comments allowed",
  "No debugging, first try",
  "Upside down keyboard",
  "AI writes every other line",
  "Emoji function names",
  "No enter key",
  "Everything is an array",
  "Globals only, no locals",
  "Foreign language comments",
  "Screen reader only",
  "No return statements",
  "Dvorak keyboard layout",
  "Rhyming variable names",
  "No standard library",
  "Linked lists only",
  "Typewriter font only",
  "Binary hardcoded input",
  "Loud environment coding",
  "Swap S and D keys",
  "No indentation allowed",
  "Self-calling functions only",
  "One kilobyte file limit",
  "For loops only",
  "Terminal coding only",
  "API fetched constants",
  "Wear sunglasses while coding brightness 30%",
  "Fast synonym variables",
  "Live stream coding and viewers contorl the constraints",
  "Procedural only, no classes",
  "Legacy IDE only",
  "Variables start with X",
  "Use game controller",
  "On screen keyboard only",
  "Odd character line counts",
  "Manual memory management",
  "1 handed codeing",
  "No control keys",
  "Dual language polyglot code",
  "Latin variable names",
  "No switch statements",
  "Identical looking fonts",
  "Drink a bottle of water on error",
  "No null or undefined",
  "Prime number constants",
  "Voice-to-text coding",
  "While loops only",
  "Under ten millisecond runtime",
  "Food item variables",
  "No shift key",
  "4:3 aspect ratio",
  "Code must be Quine",
  "No arithmetic operators",
  "Ten pixel font size",
  "Hate-filled comments",
  "Different IDE per file",
  "Five variable limit",
  "Google Doc coding",
  "Increasingly longer variable names",
  "Functional patterns only",
  "No using the 'A' key",
  "Logic inside try-catch",
  "Star Wars variables",
  "Mobile phone coding",
  "No else-if allowed",
  "Comic Sans font (Including IDE)",
  "Secret binary messages",
  "No global variables",
  "One handed coding",
  "Floating point numbers only",
  "No break or continue",
  "Variables initialize to zero",
  "Exactly forty-two lines",
  "No math libraries",
  "Single object storage",
  "PascalCase everything",
  "Heavy metal music",
  "No new keyword",
  "Vim terminal coding",
  "Comment every line",
  "No this keyword",
  "Main function logic only",
  "Trackpad only",
  "No switch statements",
  "Animal noise variables",
  "No types allowed",
  "Silent error handling",
  "Sixty percent keyboard",
  "No using the 'S' key",
  "Browser console coding",
  "Constants only",
  "No async await",
  "Garbage collected language",
  "No const keyword",
  "Return objects only",
  "Sit on floor",
  "No let keyword",
  "Random file deletion ever 5 minutes",
  "Snake_case everything (use CamelCase in python)",
  "No string methods",
  "Use hated language",
  "Single class logic",
  "Lowest refresh on monitor",
  "No array methods",
  "Two line functions",
  "No var keyword",
  "Greek letter variables",
  "No class keyword",
  "1 push up for every error",
  "No object methods",
  "Static typing only",
  "Single file logic",
  "Wireless mouse only",
  "No boolean operators",
  "Return booleans only",
  "No number methods",
  "Instruct somone to code for you no contact to allowed",
  "Dynamic typing only",
  "Single module logic",
  "Dual monitor setup",
  "No date methods",
  "JSDoc every function",
  "Drink tea",
  "No regex methods",
  "Vegetable variables",
  "Strict typing only",
  "Single package logic",
  "Laptop only",
  "No JSON methods, or arrays",
  "Arrow functions only",
  "Drink coffee no milk or sugar (or creamer)",
  "No math operators",
  "Car brand variables",
  "Weak typing only",
  "Single namespace logic",
  "No error methods",
  "Generator functions only",
  "Listen to 3 podcasts at once while coding",
  "No async operators",
  "Proto typing only",
  "Single library logic",
  "No buffer methods",
  "Async functions only",
  "No stream methods",
  "Duck typing only",
  "Single project logic",
  "Smartphone only",
  "No crypto methods",
  "Recursive functions only",
  "Listen to jazz",
  "No file methods",
  "Plant name variables",
  "Structural typing only",
  "Single workspace logic",
  "VR headset only (If you dont have one, pretend you do)",
  "No process methods",
  "Pure functions only",
  "No OS methods",
  "Bug name variables",
  "Nominal typing only",
  "Single repo logic",
  "Smart watch only",
  "No path methods",
  "Callback functions only",
  "Pop music",
  "No URL methods",
  "Mountain name variables",
  "No API's",
  "Gradual typing only",
  "lines are one time use only, delete after use or build",
  "Single folder logic",
  "Projector only",
  "No querystring methods",
  "Anonymous functions only",
  "Rock music",
  "No util methods",
  "Infer typing only",
  "Single script logic",
  "No DNS methods",
  "Higher-order functions",
  "No net methods",
  "River name variables",
  "Opaque typing only",
  "Single program logic",
  "No HTTP methods",
  "Closures only",
  "No reusing code",
  "Star name variables",
  "Single service logic",
  "Remote desktop only",
  "No VM methods",
  "Factory functions only",
  "No zlib methods",
  "Strong typing only",
  "Single controller logic",
  "No assert methods",
  "Promises only",
  "No console methods",
  "Static typing only",
  "Single view logic",
  "Terminal emulator only",
  "No timers methods",
  "Modules only",
  "Soul music",
  "No trace_events methods",
  "Single hook logic",
  "Cloud IDE only",
  "No worker_threads",
  "Event listeners only",
  "No async_hooks",
  "Strict typing only",
  "Local IDE only",
  "No perf_hooks",
  "Decorators only",
  "No inspector methods"
]

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
    animateReel('subject', 0, 400);
    animateReel('constraint', 0, 500);
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

const [isSpinning, setIsSpinning] = useState(true);

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
    setTimeout(() => animateReel(reelKey, currentDelay + 25, maxDelay), currentDelay);
  } else {
    if (reelKey === 'constraint') {
      setIsSpinning(false);
    }
  }
};

  return (
    <div className="p-8 h-full w-full flex flex-col font-[ubuntuBold] items-center justify-center space-y-8">
        <div className="grid grid-cols-4 gap-4 text-4xl">
          <div className={`w-100 h-200 flex border-5 justify-center items-center rounded-3xl transition-all duration-100 p-4 ${isSpinning ? 'border-blue-600 bg-blue-500' : 'border-green-600 bg-green-400'}`}>{result.action}</div>
          <div className={`w-100 h-200 flex border-5 justify-center items-center rounded-3xl transition-all duration-100 p-4 ${isSpinning ? 'border-blue-600 bg-blue-500' : 'border-green-600 bg-green-400'}`}>{result.subject}</div>
          <div className={`w-100 h-200 flex border-5 justify-center items-center rounded-3xl transition-all duration-100 p-4 ${isSpinning ? 'bg-blue-500 border-blue-600' : 'border-green-600 bg-green-400'}`}>{result.constraint}</div>
          <button onClick={wildCardIndex} className="w-100 h-200 bg-red-400 border-5 border-red-500 rounded-3xl p-4">{wildCardResult.wildCard}</button>
        </div>
          <button onClick={spin} className="w-416 text-3xl italic h-16 bg-amber-500 rounded-4xl mx-8">Spin</button>
    </div>
  );
}
