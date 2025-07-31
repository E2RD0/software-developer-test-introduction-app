import { songs } from './songs';

/**
 * Given a starting sound, returns the rest of that song as an array of strings.
 */
export function getRemainingSounds(inputSound: string): string[] {
  const normalizedSound = inputSound.trim().toLowerCase();
  for (const song of songs) {
    const soundIndex = song.findIndex(entry => entry.sound === normalizedSound);
    if (soundIndex >= 0 && soundIndex < song.length - 1) {
      return song
        .slice(soundIndex + 1)
        .map(entry => entry.sound);
    }
  }

  return [];
}