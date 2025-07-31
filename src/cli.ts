#!/usr/bin/env ts-node
import readline from 'readline';
import { getSongContinuation } from './index';
import { Animal } from './songs';

const emojiByAnimal: Record<Animal, string> = {
  frog:      '🐸',
  dragonfly: '🪰',
  cricket:   '🦗',
};

const promptLabel = 'Introduce a sound > ';
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: promptLabel,
});

console.log(`🎶 Welcome to the Musical Lake! 🎶
Type a sound (e.g. brr, birip, plop), or 'exit' to quit.`);

reader.prompt();
reader.on('line', (userInput) => {
  const raw = userInput.trim();
  if (!raw) {
    reader.prompt();
    return;
  }
  const cmd = raw.toLowerCase();
  if (cmd === 'exit' || cmd === 'quit') {
    reader.close();
    return;
  }

  const continuation = getSongContinuation(raw);
  if (continuation.length > 0) {
    const out = continuation
      .map(e => `${e.sound}${emojiByAnimal[e.animal]}`)
      .join(', ');
    console.log(`→ Remaining: ${out}`);
  } else {
    console.log(`→ (No remaining sounds)`);
  }

  reader.prompt();
});

reader.on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});
