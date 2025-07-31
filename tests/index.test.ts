import { getRemainingSounds } from '../src/index';

describe('getRemainingSounds', () => {
  it('returns ["fiu","cric-cric","brrah"] for input "brr"', () => {
    expect(getRemainingSounds('brr')).toEqual([
      'fiu',
      'cric-cric',
      'brrah',
    ]);
  });

  it('returns ["trri-trri","croac"] for input "birip"', () => {
    expect(getRemainingSounds('birip')).toEqual([
      'trri-trri',
      'croac',
    ]);
  });

  it('returns ["cric-cric","brrah"] for input "plop"', () => {
    expect(getRemainingSounds('plop')).toEqual([
      'cric-cric',
      'brrah',
    ]);
  });

  it('returns [] for inputs "croac" and "brrah"', () => {
    expect(getRemainingSounds('croac')).toEqual([]);
    expect(getRemainingSounds('brrah')).toEqual([]);
  });

  it('is case‐insensitive by transforming input to lowercase', () => {
    expect(getRemainingSounds('BRR')).toEqual([
      'fiu',
      'cric-cric',
      'brrah',
    ]);
  });

  it('returns [] for a sound not in any song', () => {
    expect(getRemainingSounds('xyz')).toEqual([]);
  });
});
