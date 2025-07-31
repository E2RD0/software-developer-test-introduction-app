export type Animal = 'frog' | 'dragonfly' | 'cricket';

export interface SongSound {
  sound: string;
  animal: Animal;
}

export const songs: SongSound[][] = [
  [
    { sound: 'brr', animal: 'frog' },
    { sound: 'fiu', animal: 'dragonfly' },
    { sound: 'cric-cric', animal: 'cricket' },
    { sound: 'brrah', animal: 'frog' },
  ],
  [
    { sound: 'pep', animal: 'dragonfly' },
    { sound: 'birip', animal: 'frog' },
    { sound: 'trri-trri', animal: 'cricket' },
    { sound: 'croac', animal: 'frog' },
  ],
  [
    { sound: 'bri-bri', animal: 'cricket' },
    { sound: 'plop', animal: 'dragonfly' },
    { sound: 'cric-cric', animal: 'cricket' },
    { sound: 'brrah', animal: 'frog' },
  ],
];
